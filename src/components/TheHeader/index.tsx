import { GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useNavigate } from "react-router-dom";

export function TheHeader() {
  const navigate = useNavigate();
  const menuSelected = window.location.pathname;

  const isActive = (path: string) => menuSelected === path;

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full justify-center bg-[#10121e]/80 backdrop-blur-sm">
      <div className="flex w-4/5 max-w-7xl items-center justify-between rounded-b-lg bg-[#181a28] px-6 py-3 shadow-lg mobile:hidden">
        <div className="flex items-center gap-12">
          <button
            className={`relative text-lg font-medium ${
              isActive("/") ? "text-[#FF4A57]" : "text-white"
            } transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:bg-[#FF4A57] after:transition-all after:duration-300 hover:text-[#FF4A57] hover:after:w-full ${
              isActive("/") && "after:w-full"
            }`}
            onClick={() => navigate("/")}
          >
            Inicio
          </button>
          {/* <button
            className={`relative text-lg font-medium ${
              isActive("/projetos") ? "text-[#FF4A57]" : "text-white"
            } transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:bg-[#FF4A57] after:transition-all after:duration-300 hover:text-[#FF4A57] hover:after:w-full ${
              isActive("/projetos") && "after:w-full"
            }`}
            onClick={() => navigate("/projetos")}
          >
            Projetos
          </button> */}
          <button
            className={`relative text-lg font-medium ${
              isActive("/experiencias") ? "text-[#FF4A57]" : "text-white"
            } transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:bg-[#FF4A57] after:transition-all after:duration-300 hover:text-[#FF4A57] hover:after:w-full ${
              isActive("/experiencias") && "after:w-full"
            }`}
            onClick={() => navigate("/experiencias")}
          >
            Experiências
          </button>
        </div>

        <div className="flex items-center gap-5">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/matheus-feij%C3%B3-058013208/"
            target="_blank"
            className="rounded-full p-2 transition-all duration-200 hover:bg-white/10"
            aria-label="LinkedIn Profile"
          >
            <LinkedinLogo
              size={28}
              weight="fill"
              className="text-white transition-colors duration-200 hover:text-[#FF4A57]"
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.github.com/matheus-feijo"
            target="_blank"
            className="rounded-full p-2 transition-all duration-200 hover:bg-white/10"
            aria-label="GitHub Profile"
          >
            <GithubLogo
              size={28}
              weight="fill"
              className="text-white transition-colors duration-200 hover:text-[#FF4A57]"
            />
          </a>
        </div>
      </div>

      <div className="hidden w-4/5 items-center justify-between rounded-b-lg bg-[#181a28] px-6 py-3 shadow-lg mobile:flex">
        <span className="text-xl font-bold text-white">MF</span>
        <Menubar className="border-none bg-transparent p-0">
          <MenubarMenu>
            <MenubarTrigger className="data-[state=open]:bg-white/10 cursor-pointer rounded-lg bg-transparent p-2 hover:bg-white/10 focus:bg-white/10">
              <List size={28} className="text-white" />
            </MenubarTrigger>
            <MenubarContent className="rounded-md border-[#282a38] bg-[#181a28] shadow-xl">
              <MenubarItem
                onClick={() => navigate("/")}
                className={`cursor-pointer px-4 py-2 text-base hover:bg-white/10 ${
                  isActive("/") ? "text-[#FF4A57]" : "text-white"
                }`}
              >
                Inicio
              </MenubarItem>
              {/* <MenubarItem
                onClick={() => navigate("/projetos")}
                className={`cursor-pointer px-4 py-2 text-base hover:bg-white/10 ${
                  isActive("/projetos") ? "text-[#FF4A57]" : "text-white"
                }`}
              >
                Projetos
              </MenubarItem> */}
              <MenubarItem
                onClick={() => navigate("/experiencias")}
                className={`cursor-pointer px-4 py-2 text-base hover:bg-white/10 ${
                  isActive("/experiencias") ? "text-[#FF4A57]" : "text-white"
                }`}
              >
                Experiências
              </MenubarItem>
              <div className="my-1 h-px bg-[#282a38]"></div>
              <MenubarItem className="px-4 py-2 hover:bg-white/10">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/matheus-feij%C3%B3-058013208/"
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:text-black"
                >
                  <LinkedinLogo size={18} weight="fill" /> Linkedin
                </a>
              </MenubarItem>
              <MenubarItem className="px-4 py-2 hover:bg-white/10">
                <a
                  rel="noreferrer"
                  href="https://www.github.com/matheus-feijo"
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:text-black"
                >
                  <GithubLogo size={18} weight="fill" /> Github
                </a>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}

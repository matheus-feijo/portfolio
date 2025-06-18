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

  return (
    <>
      <header className="flex h-16 w-screen justify-center">
        <div className="flex w-4/5 justify-around rounded bg-[#181a28] mobile:hidden">
          <button
            className={`text-${
              menuSelected === "/" ? "[#FF4A57]" : "white"
            } text-xl transition delay-100 ease-in-out hover:text-[#FF4A57]`}
            onClick={() => navigate("/")}
          >
            Inicio
          </button>
          <button
            className={`text-${
              menuSelected === "/projetos" ? "[#FF4A57]" : "white"
            } text-xl transition delay-100 ease-in-out hover:text-[#FF4A57]`}
            onClick={() => navigate("/projetos")}
          >
            Projetos
          </button>
          <button
            className={`text-${
              menuSelected === "/experiencias" ? "[#FF4A57]" : "white"
            } text-xl transition delay-100 ease-in-out hover:text-[#FF4A57]`}
            onClick={() => navigate("/experiencias")}
          >
            Experiências
          </button>

          <div className="flex items-center gap-5">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/matheus-feij%C3%B3-058013208/"
              target="_blank"
            >
              <LinkedinLogo
                size={32}
                className="text-white transition delay-100 ease-in-out hover:text-[#FF4A57]"
              />
            </a>
            <a
              rel="noreferrer"
              href="https://www.github.com/matheus-feijo"
              target="_blank"
            >
              <GithubLogo
                size={32}
                className="text-white transition delay-100 ease-in-out hover:text-[#FF4A57]"
              />
            </a>
          </div>
        </div>

        <div className="hidden w-4/5 items-center justify-center rounded bg-[#181a28] mobile:flex">
          <Menubar className="bg-[#181a28]">
            <MenubarMenu>
              <MenubarTrigger>
                <List size={32} color="#FFFF" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem
                  onClick={() => navigate("/")}
                  className={`text-${menuSelected === "/" && "[#FF4A57]"}`}
                >
                  Inicio
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/experiencias")}
                  className={`text-${
                    menuSelected === "/experiencias" &&
                    "[#FF4A57]" &&
                    "[#FF4A57]"
                  }`}
                >
                  Experiências
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/projetos")}
                  className={`text-${
                    menuSelected === "/projetos" && "[#FF4A57]"
                  }`}
                >
                  Projetos
                </MenubarItem>

                <MenubarItem>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/matheus-feij%C3%B3-058013208/"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <LinkedinLogo size={16} /> Linkedin
                  </a>
                </MenubarItem>

                <MenubarItem>
                  <a
                    rel="noreferrer"
                    href="https://www.github.com/matheus-feijo"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <GithubLogo size={16} /> Github
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>
    </>
  );
}

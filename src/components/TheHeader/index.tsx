import { GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../components-ui/ui/menubar";
import { useNavigate } from "react-router-dom";

export function TheHeader() {
  const navigate = useNavigate();
  const menuSelected = window.location.pathname;

  return (
    <>
      <header className="w-screen h-16  flex justify-center">
        <div className="w-4/5 bg-[#181a28] rounded flex justify-around mobile:hidden">
          <button
            className={`text-${
              menuSelected === "/" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className={`text-${
              menuSelected === "/projetos" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
          <button
            className={`text-${
              menuSelected === "/experiencias" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/experiences")}
          >
            Experience
          </button>

          <div className="flex gap-5 items-center">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/matheus-feij%C3%B3-058013208/"
              target="_blank"
            >
              <LinkedinLogo
                size={32}
                className="text-white transition ease-in-out delay-100 hover:text-[#FF4A57]"
              />
            </a>
            <a
              rel="noreferrer"
              href="https://www.github.com/matheus-feijo"
              target="_blank"
            >
              <GithubLogo
                size={32}
                className="text-white transition ease-in-out delay-100 hover:text-[#FF4A57]"
              />
            </a>
          </div>
        </div>

        <div className="w-4/5 bg-[#181a28] rounded hidden justify-center items-center mobile:flex">
          <Menubar className="bg-[#181a28]">
            <MenubarMenu>
              <MenubarTrigger>
                <List size={32} color="#FFFF" />
              </MenubarTrigger>
              <MenubarContent align="center">
                <MenubarItem
                  onClick={() => navigate("/")}
                  className={`text-${menuSelected === "/" && "[#FF4A57]"}`}
                >
                  Home
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/experiencias")}
                  className={`text-${
                    menuSelected === "/experiencias" &&
                    "[#FF4A57]" &&
                    "[#FF4A57]"
                  }`}
                >
                  Experience
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/projetos")}
                  className={`text-${
                    menuSelected === "/projetos" && "[#FF4A57]"
                  }`}
                >
                  Projects
                </MenubarItem>

                <MenubarItem>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/matheus-feij%C3%B3-058013208/"
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <LinkedinLogo size={16} /> Linkedin
                  </a>
                </MenubarItem>

                <MenubarItem>
                  <a
                    rel="noreferrer"
                    href="https://www.github.com/matheus-feijo"
                    target="_blank"
                    className="flex gap-1 items-center"
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

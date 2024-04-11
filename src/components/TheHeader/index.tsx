import { GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";
import { Menu } from "../../@types/Menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../components-ui/ui/menubar";

export function TheHeader({
  onChangeMenu,
  menu,
}: {
  onChangeMenu: (menu: Menu) => void;
  menu: Menu;
}) {
  return (
    <>
      <header className="w-screen h-16  flex justify-center">
        <div className="w-4/5 bg-[#181a28] rounded flex justify-around mobile:hidden">
          <button
            className={`text-${
              menu === "inicio" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => onChangeMenu("inicio")}
          >
            Inicio
          </button>
          <button
            className={`text-${
              menu === "projetos" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => onChangeMenu("projetos")}
          >
            Projetos
          </button>
          <button
            className={`text-${
              menu === "experiencias" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => onChangeMenu("experiencias")}
          >
            Experiências
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
              <MenubarContent>
                <MenubarItem
                  onClick={() => onChangeMenu("inicio")}
                  className={`text-${menu === "inicio" && "[#FF4A57]"}`}
                >
                  Inicio
                </MenubarItem>
                <MenubarItem
                  onClick={() => onChangeMenu("experiencias")}
                  className={`text-${
                    menu === "experiencias" && "[#FF4A57]" && "[#FF4A57]"
                  }`}
                >
                  Experiências
                </MenubarItem>
                <MenubarItem
                  onClick={() => onChangeMenu("projetos")}
                  className={`text-${menu === "projetos" && "[#FF4A57]"}`}
                >
                  Projetos
                </MenubarItem>

                <MenubarItem onClick={() => onChangeMenu("projetos")}>
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

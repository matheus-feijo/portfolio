import { Fragment } from "react";
import { NavItem } from "./components/NavItem";
import { Menu, Transition } from "@headlessui/react";
import { List } from "@phosphor-icons/react";

export function Navigation() {
  return (
    <Fragment>
      <div className="z-10 fixed w-full p-5 mobile:hidden backdrop-blur-sm">
        <ul className="justify-around flex items-center h-8">
          <NavItem name="Sobre" scroll={0} />
          <NavItem name="Experiências" scroll={700} />
          <NavItem name="Habilidades" scroll={1500} />
        </ul>
      </div>

      <div className="hidden p-5 mobile:flex">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <List size={18} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        window.scrollTo({ behavior: "smooth", top: 0 });
                      }}
                    >
                      Sobre
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        window.scrollTo({ behavior: "smooth", top: 1000 });
                      }}
                    >
                      Experiências
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        window.scrollTo({ behavior: "smooth", top: 3000 });
                      }}
                    >
                      Habilidades
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </Fragment>
  );
}

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import perfil from "../assets/foto-perfil.jpg";

interface ModalAboutMeProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalAboutMe({ isOpen, setIsOpen }: ModalAboutMeProps) {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-bold leading-6 text-gray-900 text-center mb-5"
                >
                  Sobre
                </Dialog.Title>

                <Dialog.Description>
                  <div className="flex justify-center mb-2">
                    <img
                      src={perfil}
                      className="w-40 h-40 rounded-2xl"
                      alt="foto do matheus feijo"
                    />
                  </div>
                  <div className="text-justify">
                    Olá, seja bem-vindo ao portfólio do Matheus. Com 22 anos de
                    idade, ele concluiu sua formação em Ciência da Computação na
                    UFMT no ano de 2023. Matheus é habilidoso em duas línguas:
                    Português e Inglês. Como desenvolvedor, ele detém
                    competências tanto no campo do backend quanto do frontend,
                    embora tenha direcionado seu enfoque principalmente para o
                    desenvolvimento frontend, com especialização no framework
                    ReactJs.
                  </div>
                </Dialog.Description>

                <Dialog.Overlay className="flex justify-center mt-2">
                  <button
                    onClick={handleCloseModal}
                    className="text-white bg-red-600 rounded p-2 text-sm font-semibold hover:bg-red-900 hover:transition-all"
                  >
                    Fechar
                  </button>
                </Dialog.Overlay>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

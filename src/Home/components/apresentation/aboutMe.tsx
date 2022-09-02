import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import perfil from "../../assets/perfil.jpeg";
import "./style.css";

type AboutMeProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


export function AboutMe(props: AboutMeProps) {
    const open = props.open;
    const setOpen = props.setOpen;


    const handleCloseModal = () => {
        setOpen(false);
    }


    return (
        <Transition appear show={open} as={Fragment}>
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
                            <Dialog.Panel className="modal-aboutMe w-[640px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-4xl font-bold leading-6 text-gray-900 text-center mb-5"
                                >
                                    Sobre
                                </Dialog.Title>

                                <div className="content-modal flex gap-6">
                                    <img src={perfil} className="modal-img-aboutMe w-40 h-40 rounded-2xl" alt="foto do matheus feijo" />
                                    <p className="text-justify">
                                        Meu nome é Matheus Feijó tenho 21 anos, sou estudante de Ciência da Computação na UFMT, buscando cada vez mais conhecimento na área de desenvolvimento web. Entrei no mundo da programação no ano de 2019 devido a faculdade. A partir de que fui me interessando mais, fui buscando outros meios de conhecimento além da faculdade.
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button
                                        type="button"
                                        className="bg-red-500 text-slate-100 w-32 h-8 font-bold rounded-lg"
                                        onClick={handleCloseModal}
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
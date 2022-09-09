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
                                    <div>
                                        <p className="text-justify text-lg indent-5">
                                            Meu nome é Matheus Feijó, tenho 21 anos, sou estudante de ciência da Computação na UFMT. Comecei a me interessar sobre o desenvolvimento de software desde outubro de 2021, época na qual entrei em um estágio com DEV. Desde então, busco cada vez mais aprimorar meus conhecimentos sobre a área dando mais enfase no Front-end, pois foi a parte em que mais me interessei e me sinto feliz em estudar e praticar.
                                        </p>
                                        <p className="text-justify text-lg indent-5">
                                            Além disso, participei de projetos de pesquisa no qual me deram uma boa experiência relacionadas a performance dos algoritmos e lógica, visto que era responsável por realizar a filtragem de uma grande quantidade de dados com Python.
                                        </p>
                                    </div>
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
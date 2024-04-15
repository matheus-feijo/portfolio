import { Signpost } from "@phosphor-icons/react";
import foto from "../../assets/foto-perfil.jpg";
import { NextIcon } from "../../icons/NextIcon";
import { VueIcon } from "../../icons/VueIcon";
import { MySqlIcon } from "../../icons/MySqlIcon";
import { JavaScriptIcon } from "../../icons/javaScriptIcon";
import { TypeScriptIcon } from "../../icons/TypeScriptIcon";
import { PythonIcon } from "../../icons/PythonIcon";
import { NodeIcon } from "../../icons/NodeIcon";
import { ReactIcon } from "../../icons/ReactIcon";

export function AboutMe() {
  const habilidades = {
    javaScript: <JavaScriptIcon />,
    typeScript: <TypeScriptIcon />,
    mySql: <MySqlIcon />,
    node: <NodeIcon />,
    python: <PythonIcon />,
    vue: <VueIcon />,
    next: <NextIcon />,
    react: <ReactIcon />,
  };

  return (
    <>
      <div className="w-screen pl-24 pr-24 pt-20 flex gap-2 justify-center items-start flex-wrap mobile:pl-0 mobile:pr-0 mobile:pt-1 ">
        <div className="grid grid-rows-principal justify-items-center items-end w-2/4 mobile:w-full mobile:grid-rows-mobile ">
          <div>
            <h1 className="text-vermelhoPrincipal leading-relaxed whitespace-nowrap overflow-hidden select-none animate-wiggle text-5xl pr-1 mobile:text-2xl  sm:leading-relaxed">
              Matheus Feijó
            </h1>
          </div>

          <p className="text-white text-xl text-justify animate-more-details mobile:text-lg">
            Desenvolvedor de Sotware.
          </p>

          <div className="flex flex-col gap-5 justify-center items-center animate-habilidades">
            <h1 className="text-vermelhoPrincipal text-4xl mobile:text-2xl">
              Habilidades
            </h1>

            <li className="flex gap-5 flex-wrap p-5">
              {Object.entries(habilidades).map((habilidade) => {
                return (
                  <ul key={habilidade[0]} id={habilidade[0]}>
                    {habilidade[1]}
                  </ul>
                );
              })}
            </li>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <img
            className="w-4/5 h-4/5 max-w-[18rem] max-h-72 rounded-full mobile:w-32 mobile:h-32 "
            src={foto}
            alt="Foto do deselvovedor referenciado no site"
          />

          <ol className="flex flex-col gap-2 mobile:pl-5 mobile:pr-5">
            <li className="text-white text-lg flex items-center gap-2 mobile:text-base ">
              <Signpost size={32} /> Formado em Ciência da Computação na UFMT
            </li>

            <li className="text-white text-lg flex items-center gap-2 mobile:text-base ">
              <Signpost size={32} />
              Ingles Intermediário/Fluente
            </li>

            <li className="text-white text-lg flex items-center gap-2 mobile:text-base ">
              <Signpost size={32} />
              Experiência em Desenvolvimento Front-end: 3 ano(s)
            </li>
            <li className="text-white text-lg flex items-center gap-2 mobile:text-base ">
              <Signpost size={32} />
              Experiência em Desenvolvimento Back-end: 1 ano
            </li>
          </ol>
        </div>
      </div>

      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}

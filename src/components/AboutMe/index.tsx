import foto from "@/assets/foto-perfil.jpg";
import { JavascriptIcon } from "@/icons/Javascript";
import { MysqlIcon } from "@/icons/Mysql";
import { NextJsIcon } from "@/icons/NextJs";
import { NodeJsIcon } from "@/icons/NodeJs";
import { PythonIcon } from "@/icons/Python";
import { ReactIcon } from "@/icons/React";
import { TypescriptIcon } from "@/icons/Typescript";
import { VueIcon } from "@/icons/Vue";
import { Signpost } from "@phosphor-icons/react";
import { useEffect } from "react";

export function AboutMe() {
  const iconSkills = {
    React: <ReactIcon />,
    NodeJs: <NodeJsIcon />,
    Python: <PythonIcon />,
    Typescript: <TypescriptIcon />,
    Javascript: <JavascriptIcon />,
    Mysql: <MysqlIcon />,
    NextJs: <NextJsIcon />,
    Vue: <VueIcon />,
  };

  useEffect(() => {
    document.title = "Sobre Mim - Matheus Feijó";
  }, []);

  return (
    <>
      <div className="flex w-screen flex-wrap items-start justify-center gap-2 pl-24 pr-24 pt-24 mobile:pl-0 mobile:pr-0 mobile:pt-1">
        <div className="grid w-2/4 grid-rows-principal items-end justify-items-center mobile:w-full mobile:grid-rows-mobile">
          <div>
            <h1 className="sm:leading-relaxed animate-wiggle select-none overflow-hidden whitespace-nowrap pr-1 text-5xl leading-relaxed text-vermelhoPrincipal mobile:text-2xl">
              Matheus Feijó
            </h1>
          </div>

          <p className="animate-more-details text-justify text-xl text-white mobile:text-lg">
            Desenvolvedor de Sotware.
          </p>

          <div className="flex animate-habilidades flex-col items-center justify-center gap-5">
            <h1 className="text-5xl text-vermelhoPrincipal mobile:text-2xl">
              Habilidades
            </h1>

            <li className="flex flex-wrap gap-5 p-5">
              {Object.entries(iconSkills).map(([skill, Icon]) => (
                <ul key={skill} className="flex items-center justify-center">
                  {Icon}
                </ul>
              ))}
            </li>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <img
            className="h-4/5 max-h-[25rem] w-4/5 max-w-[25rem] rounded-full mobile:h-32 mobile:w-32"
            src={foto}
            alt="Foto do deselvovedor referenciado no site"
          />

          <ol className="flex flex-col gap-2 mobile:pl-5 mobile:pr-5">
            <li className="flex items-center gap-2 text-lg text-white mobile:text-base">
              <Signpost size={32} /> Formado em Ciência da Computação na UFMT
            </li>

            <li className="flex items-center gap-2 text-lg text-white mobile:text-base">
              <Signpost size={32} />
              Ingles Intermediário/Fluente
            </li>

            <li className="flex items-center gap-2 text-lg text-white mobile:text-base">
              <Signpost size={32} />
              Experiência em Desenvolvimento Front-end: 3 ano(s)
            </li>
            <li className="flex items-center gap-2 text-lg text-white mobile:text-base">
              <Signpost size={32} />
              Experiência em Desenvolvimento Back-end: 1 ano
            </li>
          </ol>
        </div>
      </div>

      <div
        id="tooltip-default"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}

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

  const descricoes = {
    formacao: "Graduate in Computer Science at UFMT-Brazil",
    ingles: " English Level: Intermediate",
    frontend: "Experience in frontend development: 4 years ",
    backend: "Experience in backend development: 1 year",
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
            Software Developer.
          </p>

          <div className="flex flex-col gap-5 justify-center items-center animate-habilidades">
            <h1 className="text-vermelhoPrincipal text-4xl mobile:text-2xl">
              Skills
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
            alt="this is a img of the developer"
          />

          <ol className="flex flex-col gap-2 mobile:pl-5 mobile:pr-5">
            {Object.entries(descricoes).map((descricao) => {
              return (
                <li
                  key={descricao[0]}
                  id={descricao[0]}
                  className="text-white text-lg flex items-center gap-2 mobile:text-base "
                >
                  <Signpost size={32} />
                  {descricao[1]}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

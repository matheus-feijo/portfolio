import foto from "@/assets/perfil.jpg";
import { JavascriptIcon } from "@/icons/Javascript";
import { MysqlIcon } from "@/icons/Mysql";
import { NextJsIcon } from "@/icons/NextJs";
import { NodeJsIcon } from "@/icons/NodeJs";
import { PythonIcon } from "@/icons/Python";
import { ReactIcon } from "@/icons/React";
import { TypescriptIcon } from "@/icons/Typescript";
import { VueIcon } from "@/icons/Vue";
import {
  Certificate,
  Code,
  Database,
  GraduationCap,
} from "@phosphor-icons/react";
import { useEffect } from "react";

export function AboutMe() {
  const skills = [
    { name: "React", icon: <ReactIcon />, category: "frontend" },
    { name: "Vue", icon: <VueIcon />, category: "frontend" },
    { name: "NextJs", icon: <NextJsIcon />, category: "frontend" },
    { name: "Javascript", icon: <JavascriptIcon />, category: "language" },
    { name: "Typescript", icon: <TypescriptIcon />, category: "language" },
    { name: "NodeJs", icon: <NodeJsIcon />, category: "backend" },
    { name: "Python", icon: <PythonIcon />, category: "language" },
    { name: "MySQL", icon: <MysqlIcon />, category: "database" },
  ];

  useEffect(() => {
    document.title = "Sobre Mim - Matheus Feijó";
  }, []);

  return (
    <div className="sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="md:flex-row mb-20 flex flex-col items-center justify-between gap-12">
          <div className="relative">
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-vermelhoPrincipal shadow-lg shadow-vermelhoPrincipal/30">
              <img
                className="h-full w-full object-cover"
                src={foto}
                alt="Matheus Feijó - Desenvolvedor de Software"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-full bg-vermelhoPrincipal p-3 shadow-lg">
              <Code weight="bold" size={24} className="text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="sm:text-6xl mb-4 animate-pulse bg-gradient-to-r from-vermelhoPrincipal to-orange-400 bg-clip-text text-5xl font-bold text-transparent">
              Matheus Feijó
            </h1>
            <p className="mb-6 text-2xl text-gray-300">
              Desenvolvedor de Software
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Bem vindo ao meu portfólio! Sou um desenvolvedor de Software
              atualmente Fullstack. Gosto muito de aprender novas tecnologias e
              aprimorar minhas habilidades. Tenho experiência em desenvolvimento
              de aplicações web, tanto no front-end quanto no back-end. Minha
              principal linguagem de programção é Typescript, tanto em projetos
              front-end quanto back-end.
            </p>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="md:grid-cols-2 mb-20 grid grid-cols-1 gap-10">
          {/* Left Column */}
          <div className="transform rounded-2xl bg-gray-800/50 p-8 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.01]">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold text-vermelhoPrincipal">
              <GraduationCap size={32} weight="duotone" />
              Formação & Conhecimentos
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 rounded-lg bg-vermelhoPrincipal/20 p-2">
                  <GraduationCap size={24} className="text-vermelhoPrincipal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    Ciência da Computação
                  </h3>
                  <p className="text-gray-400">
                    Universidade Federal de Mato Grosso (UFMT)
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 rounded-lg bg-vermelhoPrincipal/20 p-2">
                  <Certificate size={24} className="text-vermelhoPrincipal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    Inglês Intermediário/Fluente
                  </h3>
                  <p className="text-gray-400">
                    Comunicação técnica e conversacional
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="transform rounded-2xl bg-gray-800/50 p-8 shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.01]">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold text-vermelhoPrincipal">
              <Code size={32} weight="duotone" />
              Experiência Profissional
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 rounded-lg bg-vermelhoPrincipal/20 p-2">
                  <Code size={24} className="text-vermelhoPrincipal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    Desenvolvimento Front-end
                  </h3>
                  <p className="text-gray-400">3 anos de experiência</p>
                  <p className="mt-1 text-sm text-gray-500">
                    React, Vue, NextJS, TypeScript, PWA, TailwindCSS, Styled
                    Components, Antd, Redux, Recoil, Zustand.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 rounded-lg bg-vermelhoPrincipal/20 p-2">
                  <Database size={24} className="text-vermelhoPrincipal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    Desenvolvimento Back-end
                  </h3>
                  <p className="text-gray-400">1 ano de experiência</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Node.js, Typescript, Express, Fastify, PrismaORM, NestJs,
                    Postgres, Docker, Sequelize, Knex, Python, MySQL, Keycloak
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="rounded-2xl bg-gray-800/30 p-8 shadow-xl backdrop-blur-sm">
          <h2 className="mb-12 text-center text-4xl font-bold text-vermelhoPrincipal">
            Habilidades Técnicas
          </h2>

          <div className="sm:grid-cols-4 grid grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center"
              >
                <div className="mb-4 flex h-16 w-16 transform items-center justify-center rounded-xl bg-gray-700/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-vermelhoPrincipal/20">
                  {skill.icon}
                </div>
                <span className="text-gray-300 transition-colors group-hover:text-vermelhoPrincipal">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

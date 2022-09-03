import { useEffect, useState } from "react";
import { IconCSS, IconExpress, IconFirebase, IconHTML, IconJs, IconMui, IconMySql, IconNextJs, IconNode, IconPython, IconReact, IconRedux, IconSequelize, IconTailwind, IconTypeScript } from "./icons";
import "./style.css";

const habilidades = {
    react: {
        name: 'ReactJS',
        exp: '1 ano(s)',
        describe: 'Framework utilizado para aplicações frontend desenvolvido pelo Facebook. Atualmente é a stack na qual mais concentro meus estudos, aprimorando conhecimentos sobre as diversas formas de gerenciamento de estados como Redux, ContextAPI e Recoil. Como também, aprender a utilizar outras formas de estilização como Material Ui, TailwindCSS e headless ui',
        icon: {
            mui: <IconMui estilo="h-11 w-11" />,
            tailwind: <IconTailwind estilo="h-11 w-11" />,
            redux: <IconRedux estilo="h-11 w-11" />
        }
    },
    nodejs: {
        name: 'NodeJS',
        exp: '1 ano(s)',
        describe: 'Ambiente de execução de javaScript server-side, na qual tem uma enorme capacidade de escalabilidade. Stack na qual mais tenho conhecimento para desenvolver aplicações com backend, variando muitas vezes os ORMs para manipular o banco de dados seja relacional com prisma, Knex, TypeORM ou Sequelize. Para subir o servidor sempre recorri ao uso do Express devido sua facilidade de uso e sua eficiência',
        icon: {
            sequelize: <IconSequelize estilo="h-11 w-11" />,
            express: <IconExpress estilo="h-11 w-11" />
        }
    },
    python: {
        name: 'Python',
        exp: '2 ano(s)',
        describe: 'Python é uma linguagem de programação de alto nivel, na qual como principal experiência tenho a utilização dessa linguagem para limpeza de dados obtidos através da coleta de dados do solo. Nesse estudo foi-se utilizado diversas bibliotecas, dentre as principais a pandas para abrir e manipular os arquivos, numpy para manipular os dados e o pyplot para plotar gráficos com a finalidade de avaliar os resultados obtidos. Além disso, essa linguagem foi-se utilizada em todo momento durante minha carreira academica na faculdade, fazendo com que obtesse um maior conhecimento acerca dele'
    },
    css: {
        name: 'CSS',
        exp: '1 ano(s)',
        describe: 'Ferramenta de estilização para paginas e aplicações web. Essa ferramenta possui diversas formas de se obter um mesmo resultado, seja utilizando flex box ou grid box, e cada vez mais surge novas possibilidades de se aprimorar o estilo de uma aplicação. A variedade de animações possiveis também.'
    },
    html: {
        name: 'HTML',
        exp: '1 ano(s)',
        describe: 'Linguagem de marcação utilizado para construção de paginas web. Seu conhecimento se tornou muito importante para evitar uso de tags em lugares inapropriados, uso de divs exagerados entre outros.'
    },
    mysql: {
        name: 'MySQL',
        exp: '2 ano(s)',
        describe: 'Ambiente de gerenciamento de banco de dados. Banco de dados relacional no qual comecei a utilizar devido a faculdade e com isso, acabo utilizando em todos os projetos',
    },
    nextjs: {
        name: 'NextJS',
        exp: '0 ano(s)',
        describe: ' É uma estrutura da web de desenvolvimento front-end React. O aprendizado desse framework aconteceu em decorrência da busca por mais conhecimento pelo framework React',
    },
    javascript: {
        name: 'JavaScript',
        exp: '1 ano(s)',
        describe: ' É uma linguagem de programação interpretada estruturada. Linguagem na qual busquei maior aprendizado após ingressar em meu primeiro estágio, sendo ela a minha principal linguagem utilizada'
    },
    typeScript: {
        name: 'TypeScript',
        exp: '0 ano(s)',
        describe: 'É uma linguagem de programação interpretada estruturada fortemente tipada. Principal linguagem de programação estudada atualmente, pois a tipagem das variaveis torna o projeto muito mais coeso e explicativo para novas pessoas que forem ler o código'
    },
    firebase: {
        name: 'Firebase',
        exp: '0 ano(s)',
        describe: 'Plataforma para criação de aplicações web desenvolvida pela Google. Essa ferramenta foi aprendida no curso da RocketSeat no qual foi utilizado o firebase como banco de dados online da aplicação.',
    }
}

type DataSkillProps = {
    name: string,
    exp: string,
    describe: string,
}

export function Skills() {

    const styleDefault = 'h-16 w-16';
    const styleMobile = 'h-11 w-11';
    const [dataSkill, setDataSkill] = useState<DataSkillProps>();

    const showDescription = (title: string) => {
        const arraySkill = Object.entries(habilidades);
        const names = Object.getOwnPropertyNames(habilidades);
        const pos = names.indexOf(title);

        setDataSkill(arraySkill[pos][1]);
    }


    return (

        <div className="container-general">
            <p className="title-skills text-3xl font-bold pl-20 pb-5 select-none">Habilidades</p>

            <div className="container-skills flex gap-5">
                <div className="flex flex-wrap gap-10 pl-20 w-1/2 h-auto">

                    <button className={`p-5 outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'JavaScript' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('javascript');
                        }}
                    >
                        <IconJs estilo={styleDefault} />
                    </button>

                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'ReactJS' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('react');
                        }}
                    >
                        <IconReact estilo={styleDefault} />
                    </button>

                    <button
                        className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'NodeJS' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('nodejs');
                        }}
                    >
                        <IconNode estilo={styleDefault} />
                    </button>
                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'CSS' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('css');
                        }}
                        onMouseLeave={() => {
                            //showDescription('default');
                        }}
                    >
                        {/**CSS */}
                        <IconCSS estilo={styleDefault} />
                    </button>

                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'HTML' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('html');
                        }}
                    >
                        <IconHTML estilo={styleDefault} />
                    </button>

                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'Python' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('python');
                        }}
                    >
                        <IconPython estilo={styleDefault} />

                    </button>

                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'MySQL' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('mysql');
                        }}
                    >

                        <IconMySql estilo={styleDefault} />
                    </button>

                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'NextJS' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('nextjs');
                        }}
                    >
                        <IconNextJs estilo={styleDefault} />
                    </button>

                    <button className={`p-5 outline outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'Firebase' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('firebase');
                        }}
                    >
                        <IconFirebase estilo={styleDefault} />
                    </button>

                    <button className={`p-5 outline outline-1 outline-gray-800 rounded-md hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'TypeScript' ? 'bg-slate-400' : 'none'}`}
                        onMouseMove={() => {
                            showDescription('typeScript');
                        }}
                    >
                        <IconTypeScript estilo={styleDefault} />
                    </button>
                </div>
                <div className="w-1/2 min-h-[35vh]">
                    <h3 className="font-bold text-center text-3xl">{dataSkill?.name}</h3>
                    {dataSkill?.exp && <p className="mt-12 mb-6 text-2xl"><strong>Tempo de Experiência: </strong>{dataSkill?.exp}</p>}
                    <p className="description-language text-justify pr-20 text-xl">{dataSkill?.describe}</p>
                </div>
            </div>


            <div className="container-skills-mobile">
                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md
                 hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'JavaScript' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconJs estilo={styleMobile} />
                </button>

                {/**REACT */}
                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md
                 hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'ReactJS' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconReact estilo={styleMobile} />
                </button>

                {/**NODE JS */}
                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md 
                hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'NodeJS' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconNode estilo={styleMobile} />
                </button>

                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md
                 hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'CSS' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconCSS estilo={styleMobile} />
                </button>

                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md 
                hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'HTML' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconHTML estilo={styleMobile} />
                </button>

                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md
                 hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'Python' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconPython estilo={styleMobile} />
                </button>

                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md
                     hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'MySQL' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconMySql estilo={styleMobile} />
                </button>

                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md 
                    hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'NextJS' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconNextJs estilo={styleMobile} />
                </button>
                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md 
                    hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'Firebase' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconFirebase estilo={styleMobile} />
                </button>

                <button
                    className={`p-3 outline outline-1 outline-gray-800 rounded-md 
                    hover:bg-slate-400 transition-colors duration-75 ${dataSkill?.name === 'TypeScript' ? 'bg-slate-400' : 'none'}`
                    }
                >
                    <IconTypeScript estilo={styleMobile} />
                </button>

            </div>
        </div>
    )
}
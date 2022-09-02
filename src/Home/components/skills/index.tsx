import { useEffect, useState } from "react";
import { IconCSS, IconHTML, IconJs, IconMySql, IconNextJs, IconNode, IconPython, IconReact } from "./icons";
import "./style.css";

const habilidades = {
    react: {
        name: 'ReactJS',
        exp: '1 ano(s)',
        describe: 'Atualmente meu framework favorito para criar aplicações web no frontend'
    },
    nodejs: {
        name: 'NodeJS',
        exp: '1 ano(s)',
        describe: 'Normalmente recorro a essa ferramenta quando preciso criar um backend de alguma aplicação, utilizando juntamente com o express'
    },
    python: {
        name: 'Python',
        exp: '2 ano(s)',
        describe: 'Minha primeira linguagem de programação a aprender na faculdade. Posteriormente busquei aperfeiçoar os conhecimentos nessa linguagem por causa dos projetos de pesquisa da universidade'
    },
    css: {
        name: 'CSS',
        exp: '1 ano(s)',
        describe: 'Gosto muito da ampla possibilidade de estilizações que se pode fazer com essa ferramenta'
    },
    html: {
        name: 'HTML',
        exp: '1 ano(s)',
        describe: 'Meu primeiro passo para entrar no mundo do desenvolvimento web'
    },
    mysql: {
        name: 'MySQL',
        exp: '2 ano(s)',
        describe: 'Meu primeiro gerenciador de banco de dados relacional, uso muito quando crio alguma aplicação completa',
    },
    nextjs: {
        name: 'NextJS',
        exp: '0 ano(s)',
        describe: 'Por ser apaixonado por React, busco sempre aprender sobre essa ferramenta visto que é um framework melhorado',
    },
    javascript: {
        name: 'JavaScript',
        exp: '1 ano(s)',
        describe: 'Minha linguagem de programação favorita, busco utiliza-la sempre que possivel'
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
                </div>
                <div className="w-1/2 min-h-[35vh]">
                    <h3 className="font-bold text-center text-3xl">{dataSkill?.name}</h3>
                    {dataSkill?.exp && <p className="mt-12 mb-6 text-2xl"><strong>Tempo de Experiência: </strong>{dataSkill?.exp}</p>}
                    <p className="description-language text-justify pr-20 text-2xl">{dataSkill?.describe}</p>
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
            </div>
        </div>
    )
}
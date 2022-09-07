import { Fragment, useCallback, useState } from "react";
import { ButtonSkill } from "./components/ButtonSkill";
import { IconCSS, IconExpress, IconFirebase, IconHTML, IconJs, IconMui, IconMySql, IconNextJs, IconNode, IconPython, IconReact, IconRedux, IconSequelize, IconTailwind, IconTypeScript } from "./components/icons";
import "./style.css";


const habilidades = [
    {
        icon: <IconReact estilo="h-16 w-16" />,
        iconMobile: <IconReact estilo="h-11 w-11" />,
        name: 'ReactJs',
        exp: '1 ano(s)',
        describe: 'Framework utilizado para aplicações frontend desenvolvido pelo Facebook. Atualmente é a stack na qual mais concentro meus estudos, aprimorando conhecimentos sobre as diversas formas de gerenciamento de estados como Redux, ContextAPI e Recoil. Como também, aprender a utilizar outras formas de estilização como Material Ui, TailwindCSS e headless ui',
    },
    {
        icon: <IconNode estilo="h-16 w-16" />,
        iconMobile: <IconNode estilo="h-11 w-11" />,
        name: 'NodeJS',
        exp: '1 ano(s)',
        describe: 'Ambiente de execução de javaScript server-side, na qual tem uma enorme capacidade de escalabilidade. Stack na qual mais tenho conhecimento para desenvolver aplicações com backend, variando muitas vezes os ORMs para manipular o banco de dados seja relacional com prisma, Knex, TypeORM ou Sequelize. Para subir o servidor sempre recorri ao uso do Express devido sua facilidade de uso e sua eficiência',
    },
    {
        icon: <IconPython estilo="h-16 w-16" />,
        iconMobile: <IconPython estilo="h-11 w-11" />,
        name: 'Python',
        exp: '2 ano(s)',
        describe: 'Python é uma linguagem de programação de alto nivel, na qual como principal experiência tenho a utilização dessa linguagem para limpeza de dados obtidos através da coleta de dados do solo. Nesse estudo foi-se utilizado diversas bibliotecas, dentre as principais a pandas para abrir e manipular os arquivos, numpy para manipular os dados e o pyplot para plotar gráficos com a finalidade de avaliar os resultados obtidos. Além disso, essa linguagem foi-se utilizada em todo momento durante minha carreira academica na faculdade, fazendo com que obtesse um maior conhecimento acerca dele'
    },
    {
        icon: <IconCSS estilo="h-16 w-16" />,
        iconMobile: <IconCSS estilo="h-11 w-11" />,
        name: 'CSS',
        exp: '1 ano(s)',
        describe: 'Ferramenta de estilização para paginas e aplicações web. Essa ferramenta possui diversas formas de se obter um mesmo resultado, seja utilizando flex box ou grid box, e cada vez mais surge novas possibilidades de se aprimorar o estilo de uma aplicação. A variedade de animações possiveis também.'
    },
    {
        icon: <IconHTML estilo="h-16 w-16" />,
        iconMobile: <IconHTML estilo="h-11 w-11" />,
        name: 'HTML',
        exp: '1 ano(s)',
        describe: 'Linguagem de marcação utilizado para construção de paginas web. Seu conhecimento se tornou muito importante para evitar uso de tags em lugares inapropriados, uso de divs exagerados entre outros.'
    },
    {
        icon: <IconMySql estilo="h-16 w-16" />,
        iconMobile: <IconMySql estilo="h-11 w-11" />,
        name: 'MySQL',
        exp: '2 ano(s)',
        describe: 'Ambiente de gerenciamento de banco de dados. Banco de dados relacional no qual comecei a utilizar devido a faculdade e com isso, acabo utilizando em todos os projetos',
    },
    {
        icon: <IconNextJs estilo="h-16 w-16" />,
        iconMobile: <IconNextJs estilo="h-11 w-11" />,
        name: 'NextJS',
        exp: '4 meses',
        describe: ' É uma estrutura da web de desenvolvimento front-end React. O aprendizado desse framework aconteceu em decorrência da busca por mais conhecimento pelo framework React',
    },
    {
        icon: <IconJs estilo="h-16 w-16" />,
        iconMobile: <IconJs estilo="h-11 w-11" />,
        name: 'JavaScript',
        exp: '1 ano(s)',
        describe: ' É uma linguagem de programação interpretada estruturada. Linguagem na qual busquei maior aprendizado após ingressar em meu primeiro estágio, sendo ela a minha principal linguagem utilizada'
    },
    {
        icon: <IconTypeScript estilo="h-16 w-16" />,
        iconMobile: <IconTypeScript estilo="h-11 w-11" />,
        name: 'TypeScript',
        exp: '6 meses',
        describe: 'É uma linguagem de programação interpretada estruturada fortemente tipada. Principal linguagem de programação estudada atualmente, pois a tipagem das variaveis torna o projeto muito mais coeso e explicativo para novas pessoas que forem ler o código'
    },
    {
        icon: <IconFirebase estilo="h-16 w-16" />,
        iconMobile: <IconFirebase estilo="h-11 w-11" />,
        name: 'Firebase',
        exp: '3 meses',
        describe: 'Plataforma para criação de aplicações web desenvolvida pela Google. Essa ferramenta foi aprendida no curso da RocketSeat no qual foi utilizado o firebase como banco de dados online da aplicação.',
    }
]


type DataSkillProps = {
    name: string,
    exp: string,
    describe: string,
}

export function Skills() {

    const [dataSkill, setDataSkill] = useState<DataSkillProps>();

    const showDescribe = useCallback((ind: number) => {
        const desc = habilidades[ind];
        setDataSkill({
            name: desc.name,
            exp: desc.exp,
            describe: desc.describe
        })
    }, [dataSkill]);


    return (

        <div className="container-general">
            <p className="title-skills text-3xl font-bold pl-20 pb-5 select-none">Habilidades</p>

            <div className="container-skills flex gap-5">
                <div className="flex flex-wrap gap-10 pl-20 w-1/2 h-auto">
                    {habilidades.map((skill, ind) => {
                        return (
                            <Fragment key={ind}>
                                <ButtonSkill
                                    name={skill.name}
                                    icon={skill.icon}
                                    ind={ind}
                                    showDescription={showDescribe}
                                    selected={dataSkill?.name}
                                />
                            </Fragment>
                        )
                    })}
                </div>

                <div className="w-1/2 min-h-[35vh]">
                    <h3 className="font-bold text-center text-3xl">{dataSkill?.name}</h3>
                    {dataSkill?.exp && <p className="mt-12 mb-6 text-2xl"><strong>Tempo de Experiência: </strong>{dataSkill?.exp}</p>}
                    <p className="description-language text-justify pr-20 text-xl">{dataSkill?.describe}</p>
                </div>
            </div>

            <div className="container-skills-mobile">
                {habilidades.map((skill, ind) => {
                    return (
                        <Fragment key={ind}>
                            <ButtonSkill
                                name={skill.name}
                                icon={skill.iconMobile}
                                ind={ind}
                                showDescription={showDescribe}
                            />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}
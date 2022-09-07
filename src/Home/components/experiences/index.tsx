import { MouseEvent, useState } from "react";
import "./style.css";

const experiencias = [
    {
        buttonName: 'Projeto de pesquisa 2019-2020',
        name: 'Projeto de pesquisa 2019-2020',
        title: 'Modelagem do processo de coleta de dados do solo',
        describe: ' Foi-se feita uma vasta revisão bibliografica acerca das diversas formas de se realizar a amostragem do solo na agricultura de precisão, com isso minha proposta foi criar um modelo no qual o agricultor pudesse visualizar com maior clareza qual amostragem escolher de acordo com o tipo de talhão que possui'
    },
    {
        buttonName: 'Projeto de pesquisa 2020-2021',
        name: 'Projeto de pesquisa 2020-2021',
        title: 'Filtragem de dados do solo',
        describe: 'Após realizar os estudos sovre o processo de coleta de dados foi feita uma pesquisa para determinar qual o melhor tipo de filtragem de dados para cada tipo de amostragem realizada, com isso foram utilizadas base de dados reais disponibilizadas pelo meu orientador, e com isso houveram varios testes utilizando Python juntamente com as bibliotecas: Pandas,numpy e pyplot.'
    },
    {
        buttonName: 'Estagio',
        name: 'Estagio como Desenvolvedor de Software 2021-(até o momento)',
        describe: 'Como principais tarefas realizadas inicialmente, seriam padronizar botões do aplicativo que estava sendo desenvolvido bem como, refatorar telas. Após isso, entrando para as etapas finais do projeto, resolver bugs ou melhorar a performance se tornaram tarefas mais recorrentes. Como ferramentas foi utilizado o ReactJs e NodeJs'
    }

]

type TextProps = {
    name: string,
    title?: string,
    describe: string,
}


export function Experiences() {


    const [openDescribeExp, setOpenDescribeExp] = useState(false);
    const [text, setText] = useState<TextProps>()


    const handleShowDescribeExp = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { name } = e.currentTarget;
        const [exp] = experiencias.filter((exp) => exp.name === name);

        await setText(exp);
        await setOpenDescribeExp(true);
        window.scrollTo({ behavior: 'smooth', top: 10000 })
    }


    return (
        <div className="pt-48 pb-20">
            <div className="container-title pb-10">
                <p className="title-exp text-3xl font-bold pl-20">Experiências</p>
            </div>

            <div className="flex justify-around flex-wrap gap-5">
                {experiencias.map((exp, ind) => {
                    return (
                        <div key={ind}>
                            <button
                                name={exp.name}
                                className="w-80 h-12 rounded-lg font-bold text-slate-50 bg-[#065EBD] hover:bg-[#13678A] focus:bg-[#012030]"
                                onClick={handleShowDescribeExp}
                            >
                                {exp.buttonName}
                            </button>
                        </div>
                    )
                })}
            </div>

            {
                openDescribeExp &&
                <div className="pt-20 grid place-items-center">
                    <div className="container-describe-exp p-5 w-1/2 text-center">
                        <p className="text-4xl font-bold">{text?.name}</p>
                        <ul>
                            {text?.title && <li className="title-exp"><b>Titulo do projeto:</b>{text.title}</li>}
                            <li className="describe-exp"><b>Atividade realizada:</b>{text?.describe}</li>
                        </ul>
                    </div>
                    <button
                        className="bg-red-500 text-slate-100 w-40 h-11 font-bold rounded-lg"
                        onClick={async (e) => {
                            e.preventDefault();
                            await window.scrollTo({ behavior: 'smooth', top: 1600 })
                            setOpenDescribeExp(false);

                        }}>Fechar</button>
                </div>
            }

        </div>
    )
}
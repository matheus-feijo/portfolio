import { MouseEvent, MouseEventHandler, useState } from "react"


const exp = {
    pesquisa1: {
        name: 'Projeto de pesquisa 2019-2020',
        title: 'Modelagem do processo de coleta de dados do solo',
        describe: ' Foi-se feita uma vasta revisão bibliografica acerca das diversas formas de se realizar a amostragem do solo na agricultura de precisão, com isso minha proposta foi criar um modelo no qual o agricultor pudesse visualizar com maior clareza qual amostragem escolher de acordo com o tipo de talhão que possui'

    },
    pesquisa2: {
        name: 'Projeto de pesquisa 2020-2021',
        title: 'Filtragem de dados do solo',
        describe: 'Após realizar os estudos sovre o processo de coleta de dados foi feita uma pesquisa para determinar qual o melhor tipo de filtragem de dados para cada tipo de amostragem realizada, com isso foram utilizadas base de dados reais disponibilizadas pelo meu orientador, e com isso houveram varios testes utilizando Python juntamente com as bibliotecas: Pandas,numpy e pyplot.'
    },
    estagio: {
        name: 'Estagio como Desenvolvedor de Software 2021-(até o momento)',
        describe: 'Como principais tarefas realizadas inicialmente, seriam padronizar botões do aplicativo que estava sendo desenvolvido bem como, refatorar telas. Após isso, entrando para as etapas finais do projeto, resolver bugs ou melhorar a performance se tornaram tarefas mais recorrentes. Como ferramentas foi utilizado o ReactJs e NodeJs'
    }

}


type TextProps = {
    name: string,
    title?: string,
    describe: string,
}


export function Experiences() {


    const [openDescribeExp, setOpenDescribeExp] = useState(false);
    const [text, setText] = useState<TextProps>()


    const handleViewDescribeExp = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const nameExp = e.currentTarget.name;

        const arrayExp = Object.entries(exp);
        const names = Object.getOwnPropertyNames(exp);
        const pos = names.indexOf(nameExp);

        setText(arrayExp[pos][1])

        await setOpenDescribeExp(true);
        window.scrollTo({ behavior: 'smooth', top: 10000 })


    }


    return (
        <div className="pt-20 pb-20">
            <div className="pb-10">
                <p className="text-3xl font-bold pl-20">Experiências</p>
            </div>

            <div className="flex justify-around flex-wrap gap-5">
                {/**PROJETO DE PESQUISA 1 */}
                <div className=" w-80 h-12 text-center">
                    <button
                        name="pesquisa1"
                        className="w-80 h-12 rounded-lg font-bold text-slate-50 bg-[#065EBD] hover:bg-[#13678A] focus:bg-[#012030]"
                        onClick={handleViewDescribeExp}
                    >Projeto de pesquisa 2019-2020</button>
                </div>

                {/**PROJETO DE PESQUISA 2 */}
                <div className=" w-80 h-12 text-center">
                    <button className="w-80 h-12 rounded-lg font-bold text-slate-50 bg-[#065EBD] hover:bg-[#13678A] focus:bg-[#012030]"
                        name="pesquisa2"
                        onClick={handleViewDescribeExp}
                    >Projeto de pesquisa 2020-2021</button>
                </div>

                {/**ESTAGIO */}
                <div className="w-80 h-12 text-center">
                    <button className="w-80 h-12 rounded-lg font-bold text-slate-50 bg-[#065EBD] hover:bg-[#13678A] focus:bg-[#012030]"
                        name="estagio"
                        onClick={handleViewDescribeExp}
                    >Estágio</button>
                </div>
            </div>


            {
                openDescribeExp &&
                <div className="pt-20 grid place-items-center">
                    <div className="p-5 w-1/2 text-center">
                        <p className="text-4xl font-bold">{text?.name}</p>
                        <ul>
                            {text?.title && <li><b>Titulo do projeto:</b>{text.title}</li>}
                            <li><b>Atividade realizada:</b>{text?.describe}</li>
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
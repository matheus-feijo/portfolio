export function Experiences() {

    return (
        <div className="pt-20 pb-20">
            <p className="text-3xl font-bold pl-20 pb-5">Experiências</p>

            <div className="flex flex-wrap pl-[60px] pr-20">
                <div className="p-5 w-1/3 text-justify border-r border-[rgba(0,0,0,0.2)]">
                    <p className="text-2xl font-bold">Projeto de pesquisa 2019-2020</p>
                    <ul>
                        <li><b>Titulo do projeto:</b> Modelagem do processo de coleta de dados do solo</li>
                        <li><b>Atividade realizada:</b> Foi-se feita uma vasta revisão bibliografica acerca das diversas formas de se realizar a amostragem do solo na agricultura de precisão, com isso minha proposta foi criar um modelo no qual o agricultor pudesse visualizar com maior clareza qual amostragem escolher de acordo com o tipo de talhão que possui</li>
                    </ul>
                </div>


                <div className="p-5 w-1/3 text-justify border-r border-[rgba(0,0,0,0.2)]">
                    <p className="text-2xl font-bold">Projeto de pesquisa 2020-2021</p>
                    <ul>
                        <li><b>Titulo do projeto:</b>Filtragem de dados do solo</li>
                        <li><b>Atividade realizada:</b> Após realizar os estudos sovre o processo de coleta de dados foi feita uma pesquisa para determinar qual o melhor tipo de filtragem de dados para cada tipo de amostragem realizada, com isso foram utilizadas base de dados reais disponibilizadas pelo meu orientador, e com isso houveram varios testes utilizando Python juntamente com as bibliotecas: Pandas,numpy e pyplot.</li>
                    </ul>
                </div>

                <div className="p-5 w-1/3 text-justify">
                    <p className="text-2xl font-bold">Estagio como Desenvolvedor de Software 2021-(até o momento)</p>
                    <ul>
                        <li><b>Atividade realizada:</b> Como principais tarefas realizadas inicialmente, seriam padronizar botões do aplicativo que estava sendo desenvolvido bem como, refatorar telas. Após isso, entrando para as etapas finais do projeto, resolver bugs ou melhorar a performance se tornaram tarefas mais recorrentes. Como ferramentas foi utilizado o ReactJs e NodeJs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
import { CardExp } from "./components/CardExp";

export function Exp() {
  return (
    <div className="p-10 mobile:p-5">
      <h1 className="text-5xl mobile:text-2xl font-semibold pl-10">
        Experiências
      </h1>

      <div className="p-10  mt-2 flex flex-wrap gap-5">
        <CardExp
          title="Projeto de pesquisa 2019-2020"
          description=" Foi-se feita uma vasta revisão bibliografica acerca das diversas formas de se realizar a amostragem do solo na agricultura de precisão, com isso minha proposta foi criar um modelo no qual o agricultor pudesse visualizar com maior clareza qual amostragem escolher de acordo com o tipo de talhão que possui"
        />
        <CardExp
          title="Projeto de pesquisa 2020-2021"
          description="Após realizar os estudos sovre o processo de coleta de dados foi feita uma pesquisa para determinar qual o melhor tipo de filtragem de dados para cada tipo de amostragem realizada, com isso foram utilizadas base de dados reais disponibilizadas pelo meu orientador, e com isso houveram varios testes utilizando Python juntamente com as bibliotecas: Pandas,numpy e pyplot."
        />
        <CardExp
          title="Estagio como Desenvolvedor de Software 2021-2023"
          description="Como principais tarefas realizadas inicialmente, seriam padronizar botões do aplicativo que estava sendo desenvolvido bem como, refatorar telas. Após isso, entrando para as etapas finais do projeto, resolver bugs ou melhorar a performance se tornaram tarefas mais recorrentes. Como ferramentas foi utilizado o ReactJs e NodeJs"
        />
      </div>
    </div>
  );
}

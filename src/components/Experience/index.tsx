import { CardExp } from "./CardExp";

export function Experience() {
  return (
    <>
      <div className="p-10 mobile:p-5">
        <h1 className="text-5xl mobile:text-2xl font-semibold pl-10">
          Experiências
        </h1>

        <div className="p-10  mt-2 flex flex-wrap gap-5">
          <CardExp
            title="Projeto de pesquisa UFMT 2019-2021"
            description="Nesse Projeto de Pesquisa foi abordado como objetivo do estudo entender as melhores formas de filtragem de dados de amostragem do solo, no qual foi utilizado Python para poder realizar o tratamento das informações. Além disso, foi pedido para criar um Diagrama de processos para mostrar quais são os modelos mais indicados para cada tipo de amostragem realizada, em que para isso foi preciso realizar um vasto estudo a respeito de cada forma de amostragem do solo existente e as vantagens e desvantagens em aplicar cada modelo de filtragem."
          />

          <CardExp
            title="Estagio Desenvolvedor de Software Policia Militar 2021-2023"
            description={
              "Nesse estágio trabalhei como Fullstack sendo no frontend com ReactJs e backend com NodeJs utilizando o Knex como query builder\n O projeto era criar um aplicativo para gerencimento escalas dentro da Policia Militar do estado de Mato Grosso, nesse projeto adquiri muita experiencia e conhecimento em metodologias ageis como SCRUM e trabalho em equipe."
            }
          />

          <CardExp
            title="Desenvolvedor Front-end Jr Sydy 2022"
            description={`Nessa funçao fui designado a gerir um projeto do zero, no qual teria como objetivo criar um aplicativo seguindo os padrões do offline-first, pois seria um aplicativo de formulários no qual geralmente os usuarios estariam em lugares sem acesso a internet. Para esse projeto foi preciso utilizar conhecimentos de PWA, redux para gerenciamento dos dados, service worker e também bibliotecas para criaçao de push notifications e impressão de pdfs online e offline.`}
          />
        </div>
      </div>
    </>
  );
}

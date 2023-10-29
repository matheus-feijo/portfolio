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
            title="Projeto de pesquisa UFMT 2019-2020"
            description="Uma extensa revisão bibliográfica foi conduzida, abordando as variadas abordagens para realizar a amostragem do solo na agricultura de precisão. Com base nisso, a minha proposta consistiu em desenvolver um modelo que permitisse aos agricultores uma compreensão mais nítida das opções de amostragem disponíveis, alinhando-as de maneira mais clara com os tipos específicos de parcelas agrícolas sob sua gestão."
          />
          <CardExp
            title="Projeto de pesquisa UFMT 2020-2021"
            description={`Após conduzir uma análise aprofundada sobre o processo de coleta de dados, foi empreendida uma pesquisa com o objetivo de identificar a abordagem ideal para filtragem de dados correspondente a cada tipo específico de amostragem executada. Para esse propósito, foram empregadas bases de dados reais gentilmente disponibilizadas pelo meu orientador.\n
        Nesse contexto, uma série de experimentos foi conduzida por meio da aplicação de técnicas de processamento de dados utilizando a linguagem de programação Python, conjuntamente com as bibliotecas de análise e visualização de dados, como Pandas, numpy e pyplot.`}
          />
          <CardExp
            title="Estagio Desenvolvedor de Software Policia Militar 2021-2023"
            description={`Iniciando com as principais atividades, a padronização dos botões no aplicativo em desenvolvimento foi uma das primeiras ações empreendidas, juntamente com a reestruturação das interfaces. À medida que o projeto avançava para suas fases finais, a resolução de problemas pontuais e o aprimoramento de desempenho passaram a ocupar um lugar mais frequente nas tarefas em curso.\n
        Como pilares tecnológicos, contamos com as poderosas ferramentas ReactJs e NodeJs, que forneceram a base sólida para a implementação e aprimoramento dessas funcionalidades.`}
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

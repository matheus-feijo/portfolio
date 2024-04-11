import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components-ui/ui/accordion";

export function Experience() {
  const [contentSelected, setContentSelected] = useState("");

  return (
    <>
      <h1 className="text-white text-5xl text-center pt-10 mobile:text-4xl">
        Experiências
      </h1>

      <div className="flex justify-center items-center">
        <Accordion type="single" collapsible className="p-10 w-4/5 ">
          <AccordionItem
            value="item-1"
            onClick={() => {
              if (contentSelected === "item-1") {
                setContentSelected("");
                return;
              }

              setContentSelected("item-1");
            }}
          >
            <AccordionTrigger
              className={` ${
                contentSelected === "item-1"
                  ? "text-vermelhoPrincipal"
                  : "text-white"
              } text-xl mobile:text-lg`}
            >
              Desenvolvedor de Software Policia Militar (2021-2023)
            </AccordionTrigger>
            <AccordionContent className="text-white text-lg text-justify mobile:text-base mobile:text-center">
              Nesse estágio, foi desenvolvido um aplicativo web no qual foi
              utilizado no frontend o ReactJs, juntamente com bibliotecas como
              materialUi, styled-components, entre outros. Vale ressaltar que
              foi utilizado para gerenciamento de estados o ContextAPI, porém,
              quando o projeto atingiu um tamanho consideravelmente grande, foi
              alterado para o Zustand. Para o backend, foi utilizado o NodeJs
              com o ORM knex para facilitar as interações com o banco de dados.
              Esse aplicativo já se encontra em produção
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            onClick={() => {
              if (contentSelected === "item-2") {
                setContentSelected("");
                return;
              }

              setContentSelected("item-2");
            }}
          >
            <AccordionTrigger
              className={` ${
                contentSelected === "item-2"
                  ? "text-vermelhoPrincipal"
                  : "text-white"
              } text-xl mobile:text-lg`}
            >
              Desenvolvedor Frontend SYDY (2022- até o momento)
            </AccordionTrigger>
            <AccordionContent className="text-white text-lg text-justify mobile:text-base mobile:text-center ">
              Na Sydy, participei de 2 projetos. Todos eles PWAs utilizando
              ReactJs com Typescript empregando Redux para gerenciamento de
              estado global. Sendo o primeiro projeto, um web app para
              fiscalizações de propriedades no interior do Estado (Mato Grosso).
              Porém, havia o problema de que a maioria das localidades não
              haviam acesso à internet, portanto, era necessário um aplicativo
              com funcionamento offline-first, no qual fui responsável por
              escolher as ferramentas utilizadas bem como desenvolver as
              funcionalidades requisitadas dentro de cada sprint. <br />
              No Segundo projeto, similar ao anterior, foi uma PWA, porém, para
              fiscalização de transito de veículos agrícolas. Neste, houve uma
              maior complexidade quanto ao dinamismo do formulário, pois no
              levantamento de requisitos, haviam diversos fluxos a serem
              seguidos, no qual eram muito desgastantes de serem elaborados,
              portanto, a maior dificuldade foi planejar esse dinamismo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center">
        <a
          href="/curriculo.pdf"
          target="_blank"
          className=" flex justify-center items-center rounded-md h-10 w-40 transition ease-in-out delay-50 bg-white hover:bg-slate-200 "
        >
          Baixar Currículo
        </a>
      </div>
    </>
  );
}

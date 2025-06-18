import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

export function Experience() {
  const [contentSelected, setContentSelected] = useState("");

  useEffect(() => {
    document.title = "Experiências - Matheus Feijó";
  }, []);

  return (
    <>
      <h1 className="pt-10 text-center text-5xl text-white mobile:text-4xl">
        Experiências
      </h1>

      <div className="flex items-center justify-center">
        <Accordion type="single" collapsible className="w-4/5 p-10">
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
            <AccordionContent className="text-justify text-lg text-white mobile:text-center mobile:text-base">
              Nesse estágio foi desenvolvido um aplicativo web no qual foi
              utilizado no frontend o ReactJs juntamente com bibliotecas como
              materialUi, styled-components, etc, vale ressaltar que foi
              utilizado para gerenciamento de estados o ContextAPI porém quando
              o projeto atingiu um tamanho consideravelmente grande foi alterado
              para o Zustand. Para o backend foi utilizado o NodeJs com o ORM
              knex para facilitar as interações com o banco de dados. Esse
              aplicativo já se encontra em produção
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
            <AccordionContent className="text-justify text-lg text-white mobile:text-center mobile:text-base">
              Na Sydy participei de 2 projetos todos eles PWAs utilizando
              ReactJs com Typescript utilizando Redux para gerenciamento de
              estado global, Sendo o primeiro projeto um web app para
              fiscalizações de propriedades no interior do Estado (Mato Grosso).
              Porém eles tinham um problema que a maioria dessas localidades não
              possuiam internet, então queriam um aplicativo com funcionamento
              offline-first, no qual fui responsavel por escoher as ferramentas
              utilizadas bem como desenvolver as funcionalidades requisitadas
              dentro de cada sprint.
              <br /> No Segundo projeto, era similar ao anterior, sendo uma PWA
              porém para fiscalização de transito de veiculos agricolas. Nesse
              houve uma maior complexidade quanto a dinamismo do formulario,
              pois no levantamento de requisitos possuia diversos fluxos a serem
              seguidos, no qual eram muito desgastantes de se fazer, então a
              maior dificuldade foi planejar esse dinamismo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center">
        <a
          href="/curriculo.pdf"
          target="_blank"
          className="delay-50 flex h-10 w-40 items-center justify-center rounded-md bg-white transition ease-in-out hover:bg-slate-200"
        >
          Baixar Currículo
        </a>
      </div>
    </>
  );
}

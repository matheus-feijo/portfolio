import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components-ui/ui/accordion";

export function Experience() {
  const [contentSelected, setContentSelected] = useState("");

  const experiencias = [
    {
      id: "exp-1",
      title: "Desenvolvedor de Software Policia Militar (2021-2023)",
      description:
        "Participei do desenvolvimento de um aplicativo para controle de escalas de serviço na Polícia Militar do Estado de Mato Grosso. Nesse projeto, trabalhei em equipe com outras quatro pessoas, seguindo a metodologia ágil SCRUM. Minhas responsabilidades incluíam a criação de módulos completos, abrangendo tanto o desenvolvimento frontend quanto backend, além de realizar a estruturação das tabelas necessárias no banco de dados.",
    },
    {
      id: "exp-2",
      title: "Desenvolvedor Frontend SYDY (2022- até o momento)",
      description:
        "Durante esse período, tive a oportunidade de liderar dois projetos como único desenvolvedor frontend. Em ambos os casos, fui encarregado de selecionar as tecnologias adequadas e estruturar os projetos do zero. O primeiro projeto consistia em um aplicativo web para a realização de fiscalizações em propriedades rurais no interior do Estado de Mato Grosso. Uma consideração importante foi o fato de que muitas dessas localidades não possuíam acesso à internet, o que exigiu a implementação de uma Progressive Web App (PWA) para garantir a acessibilidade. O sucesso desse aplicativo foi evidente, pois os responsáveis pelas fiscalizações solicitaram a inclusão de mais seis tipos de formulários adicionais, demonstrando sua utilidade e relevância. No segundo projeto, enfrentamos um desafio semelhante. Desenvolvemos outro aplicativo web com foco na fiscalização do trânsito de veículos agrícolas.",
    },
  ];

  const handleChangeAccordionOpen = (id: string) => {
    if (contentSelected === id) {
      setContentSelected("");
      return;
    }

    setContentSelected(id);
  };

  return (
    <>
      <h1 className="text-white text-5xl text-center pt-10 mobile:text-4xl">
        Experiências
      </h1>

      <div className="flex justify-center items-center">
        <Accordion type="single" collapsible className="p-10 w-4/5 ">
          {experiencias.map((exp) => {
            return (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                onClick={() => handleChangeAccordionOpen(exp.id)}
              >
                <AccordionTrigger
                  className={` ${
                    contentSelected === exp.id
                      ? "text-vermelhoPrincipal"
                      : "text-white"
                  } text-xl mobile:text-lg`}
                >
                  {exp.title}
                </AccordionTrigger>
                <AccordionContent className="text-white text-lg text-justify mobile:text-base mobile:text-center">
                  {exp.description.split("\n").map((desc, ind) => {
                    return (
                      <p key={ind} className="indent-10 mb-1 mobile:indent-0">
                        {desc}
                      </p>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* <div className="flex justify-center">
        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noreferrer"
          className=" flex justify-center items-center rounded-md h-10 w-40 transition ease-in-out delay-50 bg-white hover:bg-slate-200 "
        >
          Baixar Currículo
        </a>
      </div> */}
    </>
  );
}

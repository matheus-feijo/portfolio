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
      title: "Software Developer at Militar Police(2021-2023)", // "Desenvolvedor de Software Policia Militar (2021-2023)",
      description:
        "I participated in the development of an application to control duty rosters at the Military Police of the State of Mato Grosso. On this project, I worked in a team with four other people, following the SCRUM agile methodology. My responsibilities included creating complete modules, covering both frontend and backend development, in addition to structuring the necessary tables in the database.",
    },
    {
      id: "exp-2",
      title: "Frontend developer at SYDY (2022- até o momento)",
      description:
        "During this period, I had the opportunity to lead two projects as the sole frontend developer. In both cases, I was tasked with selecting the appropriate technologies and structuring the projects from scratch. The first project consisted of a web application for carrying out inspections on rural properties in the interior of the State of Mato Grosso. An important consideration was the fact that many of these locations did not have internet access, which required the implementation of a Progressive Web App (PWA) to ensure accessibility. The success of this application was evident, as those responsible for inspections requested the inclusion of six additional types of forms, demonstrating their usefulness and relevance. In the second project, we faced a similar challenge. We developed another web application focused on monitoring the traffic of agricultural vehicles.",
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
        Experience
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
    </>
  );
}

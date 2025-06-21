import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BriefcaseIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function Experience() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Experiências - Matheus Feijó";
  }, []);

  const handleItemClick = (itemValue: string) => {
    if (activeItem === itemValue) {
      setActiveItem(null);
      return;
    }

    setActiveItem(itemValue);
  };

  return (
    <div className="sm:px-6 lg:px-8 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-12 bg-gradient-to-r from-vermelhoPrincipal to-orange-400 bg-clip-text text-center text-5xl font-bold text-transparent">
          Experiências Profissionais
        </h1>

        <div className="mb-12 rounded-2xl bg-gray-800/30 p-8 shadow-xl backdrop-blur-sm">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem
              value="item-1"
              className="overflow-hidden rounded-xl border-b-0 bg-gray-800/50 p-4 backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:shadow-vermelhoPrincipal/20"
            >
              <AccordionTrigger
                onClick={() => handleItemClick("item-1")}
                className={`flex items-center gap-2 text-xl font-semibold ${
                  activeItem === "item-1"
                    ? "text-vermelhoPrincipal"
                    : "text-white"
                } px-2 transition-colors duration-200 hover:text-vermelhoPrincipal`}
              >
                <BriefcaseIcon
                  weight="duotone"
                  className="min-w-[24px]"
                  size={24}
                />
                <span>Dev Fullstack - Polícia Militar</span>
              </AccordionTrigger>
              <AccordionContent className="px-2 py-4 text-lg leading-relaxed text-gray-300">
                <p className="text-justify">
                  Atuei como estagiário de desenvolvimento fullstack na Polícia
                  Militar de Mato Grosso de Setembro de 2021 até Março de 2023,
                  onde trabalhei na construção de um sistema de gerenciamento de
                  escalas de serviço. Nesse projeto era utilizado ReactJs +
                  Javascript no frontend, com gerenciamento de estado global o
                  ContextAPI, porém após um certo tempo começou a apresentar
                  alguns problemas de renderização em determinadas partes do
                  sistema, com isso foi alterado para o zustand. Nesse estagio
                  tive o primeiro contato com essas ferramentas, bem como a
                  metodologia de desenvolvimento ágil, onde participei de
                  reuniões diárias e sprints semanais. No backend foi utilizado
                  NodeJs com Javascript, Express e Knex. Foi muito desafiador,
                  visto que era meu primeiro contato com desenvolvimento de
                  software, mas consegui aprender muito e contribuir para o
                  projeto.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="overflow-hidden rounded-xl border-b-0 bg-gray-800/50 p-4 backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:shadow-vermelhoPrincipal/20"
            >
              <AccordionTrigger
                onClick={() => {
                  console.log("Item 2 clicked");
                  handleItemClick("item-2");
                }}
                className={`flex items-center gap-2 text-xl font-semibold ${
                  activeItem === "item-2"
                    ? "text-vermelhoPrincipal"
                    : "text-white"
                } px-2 transition-colors duration-200 hover:text-vermelhoPrincipal`}
              >
                <BriefcaseIcon
                  weight="duotone"
                  className="min-w-[24px]"
                  size={24}
                />
                <span>Dev Frontend - Sydy</span>
              </AccordionTrigger>
              <AccordionContent className="px-2 py-4 text-lg leading-relaxed text-gray-300">
                <p className="mb-2 text-justify">
                  Na Sydy entrei em Setembro de 2022 como desenvolvedor
                  front-end Jr, ainda continuo na empresa atualmente como
                  Desenvolvedor Frontend Pleno.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-medium text-vermelhoPrincipal">
                      Projeto 1: PWA de Fiscalização de Propriedades
                    </h3>
                    <p className="text-justify">
                      Desenvolvi uma aplicação com ReactJs + TypeScript (PWA)
                      para uso em notebooks e dispositivos móveis. O objetivo
                      era automatizar a fiscalização de propriedades em Mato
                      Grosso, incluindo regiões sem internet. Implementei uma
                      solução offline-first com Redux + redux-offline +
                      redux-persist para sincronização automática quando
                      detectada conexão. Trabalhei sozinho no frontend,
                      integrando com API desenvolvida pela contratante. Em
                      produção há 3 anos.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium text-vermelhoPrincipal">
                      Projeto 2: PWA de Fiscalização de Transporte
                    </h3>
                    <p className="text-justify">
                      Similar ao Projeto 1, mas focado em fiscalização de
                      veículos de transporte de cargas animais/vegetais. A
                      complexidade estava nos múltiplos fluxos de negócio.
                      Repliquei e adaptei a arquitetura do projeto anterior,
                      também trabalhando sozinho na implementação.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium text-vermelhoPrincipal">
                      Projeto 3: E-commerce de Sementes
                    </h3>
                    <p className="text-justify">
                      Construí um aplicativo para venda de sementes utilizando
                      ReactJs + TypeScript + React Query + TailwindCSS. Para
                      gerenciamento de estados utilizei URL state, evitando a
                      necessidade de gerenciadores como ContextAPI, Redux ou
                      Zustand.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="overflow-hidden rounded-xl border-b-0 bg-gray-800/50 p-4 backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:shadow-vermelhoPrincipal/20"
            >
              <AccordionTrigger
                onClick={() => {
                  handleItemClick("item-3");
                }}
                className={`flex items-center gap-2 text-xl font-semibold ${
                  activeItem === "item-3"
                    ? "text-vermelhoPrincipal"
                    : "text-white"
                } px-2 transition-colors duration-200 hover:text-vermelhoPrincipal`}
              >
                <BriefcaseIcon
                  weight="duotone"
                  className="min-w-[24px]"
                  size={24}
                />
                <span>Trabalhos Extras</span>
              </AccordionTrigger>

              <AccordionContent className="px-2 py-4 text-lg leading-relaxed text-gray-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-medium text-vermelhoPrincipal">
                      Integração de sistemas para Nutricare (2025)
                    </h3>
                    <p className="text-justify">
                      Nesse projeto foi solicitado a criação de um sistema no
                      qual consumisse os dados do sistema que eles utilizavam
                      para gerenciamento de mercadorias e enviasse para uma
                      empresa de logistica que eles utilizavam. Nesse projeto
                      optei por utilizar ReactJs + Typescript + Antd + Firebase,
                      no frontend, pois eram usuarios fixos e poucos usuarios,
                      logo firebase seria mais simples de implementar e não
                      seria custoso. O antd foi escolhido pois como se tratava
                      de um sistema interno, não houve a necessidade de uma
                      interface elaborada. No backend utilizei NodeJs +
                      Typescript + Fasitfy + PrismaORM, pois são ferramentas que
                      já domino bem. O prisma foi adicionado posteriormente pois
                      foi preciso armazenar determinadas informações para poder
                      fazer uma auditoria, caso se torna-se preciso. Para testes
                      unitarios no backend utilizei o vitest, que é uma
                      ferramenta que já utilizei em projetos pessoais
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

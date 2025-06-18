import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "@phosphor-icons/react";
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
              value="policia-militar"
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
                <Briefcase
                  weight="duotone"
                  className="min-w-[24px]"
                  size={24}
                />
                <span>
                  Desenvolvedor de Software - Polícia Militar (2021-2023)
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-2 py-4 text-lg leading-relaxed text-gray-300">
                <p>
                  Desenvolvi um aplicativo web utilizando ReactJs no frontend
                  com MaterialUI e styled-components. Inicialmente usei
                  ContextAPI para gerenciamento de estado, mas com o crescimento
                  do projeto, migrei para Zustand. O backend foi construído com
                  NodeJs e Knex ORM para facilitar interações com o banco de
                  dados. O aplicativo já está em produção.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="sydy"
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
                <Briefcase
                  weight="duotone"
                  className="min-w-[24px]"
                  size={24}
                />
                <span>Desenvolvedor Frontend - SYDY (2022 - Atual)</span>
              </AccordionTrigger>
              <AccordionContent className="px-2 py-4 text-lg leading-relaxed text-gray-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-medium text-vermelhoPrincipal">
                      Projeto 1: PWA de Fiscalização de Propriedades
                    </h3>
                    <p>
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
                    <p>
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
                    <p>
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
          </Accordion>
        </div>
      </div>
    </div>
  );
}

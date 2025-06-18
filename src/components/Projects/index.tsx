import RickAndMortyCapa from "@/assets/capa-rick-and-morty.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export function Projects() {
  return (
    <>
      <h1 className="pt-10 pb-10 text-center text-5xl text-white mobile:text-4xl">
        Projetos
      </h1>

      <div className="flex flex-wrap justify-center gap-5 p-10">
        <Card className="h-96 w-96">
          <CardHeader>
            <CardTitle>Rick and Morty</CardTitle>
            <CardDescription className="text-white">
              Criado para aprimorar conhecimento em consumo de APIs
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <img
              className="h-48 w-48"
              src={RickAndMortyCapa}
              alt="imagem ilustrativa de Rick and Morty"
            />
          </CardContent>
          <CardFooter className="flex justify-center gap-2">
            <Button className="p-0">
              <a
                rel="noreferrer"
                href="https://github.com/matheus-feijo/rick-and-morty-app"
                target="_blank"
                className="flex h-full w-24 items-center justify-center gap-1"
              >
                <GithubLogo size={16} />
                Github
              </a>
            </Button>

            <Button className="p-0">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://rick-and-morty-app.matheus-feijo.vercel.app/"
                className="flex h-full w-24 items-center justify-center gap-1"
              >
                <Globe size={16} />
                Site
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

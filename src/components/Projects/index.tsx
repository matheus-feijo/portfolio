import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components-ui/ui/card";
import rickAndMortyCapa from "../../assets/capa-rick-and-morty.jpg";
import { Button } from "../../components-ui/ui/button";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Globe } from "@phosphor-icons/react";

export function Projects() {
  return (
    <>
      <h1 className="text-center text-white text-5xl pt-10 pb-10">Projetos</h1>

      <div className="p-10 flex gap-5 flex-wrap justify-center">
        <Card className="w-96 h-96 ">
          <CardHeader>
            <CardTitle>Rick and Morty</CardTitle>
            <CardDescription className="text-white">
              Criado para aprimorar conhecimento em consumo de APIs
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <img
              className="w-48 h-48"
              src={rickAndMortyCapa}
              alt="imagem ilustrativa de Rick and Morty"
            />
          </CardContent>
          <CardFooter className="flex justify-center gap-2">
            <Button className="p-0">
              <a
                rel="noreferrer"
                href="https://github.com/matheus-feijo/rick-and-morty-app"
                target="_blank"
                className="flex items-center justify-center gap-1 w-24 h-full"
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
                className="flex items-center justify-center gap-1 w-24 h-full"
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components-ui/ui/card";
import rickAndMortyCapa from "../../assets/capa-rick-and-morty.jpg";

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
          <CardFooter className="flex justify-evenly">
            <button className="border border-vermelhoPrincipal rounded-md h-8 w-20">
              Github
            </button>

            <button className="border border-vermelhoPrincipal rounded-md h-8 w-20">
              Site
            </button>
          </CardFooter>
        </Card>

        <Card className="w-96 h-96">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="w-96 h-96">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

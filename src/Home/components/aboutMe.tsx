import perfil from "../assets/perfil.jpeg";

export function AboutMe() {

    return (
        <div className="pb-20">
            <p className="text-3xl font-bold pl-20 pb-5">Sobre</p>

            <div className="flex gap-14">
                <div className="pl-20 w-1/4">
                    <img src={perfil} className="w-80 h-80 rounded-3xl outline outline-double outline-slate-800" />
                </div>

                <div className="w-3/4 max-w-2xl text-justify leading-8">
                    <p className="text-2xl font-bold text-center pb-5">Meu nome é Matheus Feijó</p>
                    <ol className="list-disc">
                        <li> <p>Sou academico de ciência da Computação</p></li>
                        <li><p>Ingressei na faculdade no ano de 2019 com previsão de formação em 2023</p></li>
                        <li> <p>email para contato: mat.feijo2506@gmail.com</p></li>
                        <li><p>Realizei dois projetos de pesquisa relacionados a tratamento de dados do solo nos anos de 2019 e 2020. Após isso nos anos de 2021 e 2022 ingressei em um estagio como desenvolvedor com enfoque nas ferramentas ReactJs e NodeJs</p></li>
                    </ol>
                </div>
            </div>

        </div>
    )
}
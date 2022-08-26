import { Fragment } from "react";
import { Apresentation } from "./components/apresentation";
import { Experiences } from "./components/experiences";
import { Navigation } from "./components/navigation";
import { Skills } from "./components/skills";
import "./style.css";

export function Home() {


    return (
        <div>
            <Navigation />
            <Apresentation />
            <Skills />
            <Experiences />

            <div>Projetos</div>
            <div>cursos</div>

        </div>
    )
}
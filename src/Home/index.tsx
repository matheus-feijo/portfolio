import { Fragment } from "react";
import { Apresentation } from "./components/apresentation";
import { Experiences } from "./components/experiences";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export function Home() {

    return (
        <Fragment>
            <Navigation />
            <Apresentation />
            <Skills />
            <Projects />
            <Experiences />
        </Fragment>
    )
}
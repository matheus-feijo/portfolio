import { Fragment, MouseEvent, UIEvent, UIEventHandler } from "react";
import { AboutMe } from "./components/apresentation/aboutMe";
import { Apresentation } from "./components/apresentation";
import { Experiences } from "./components/experiences";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export function Home() {
    const handleScroll = (event: UIEvent<HTMLDivElement>) => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    }

    return (
        <div onScroll={handleScroll} className="h-auto overflow-scroll">
            <Navigation />
            <Apresentation />
            <Skills />
            <Projects />
            <Experiences />
        </div>
    )
}
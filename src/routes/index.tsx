import { TheFooter } from "@/components/TheFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { TheHeader } from "../components/TheHeader";

export function Routers() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <TheHeader />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/experiencias" element={<Experience />} />
          </Routes>
        </main>

        <TheFooter />
      </div>
    </BrowserRouter>
  );
}

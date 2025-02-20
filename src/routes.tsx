import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TheHeader } from "./components/TheHeader";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";

export function Routers() {
  return (
    <BrowserRouter>
      <TheHeader />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/experiencias" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

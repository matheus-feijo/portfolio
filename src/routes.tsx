import { TheFooter } from "@/components/TheFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TheHeader } from "./components/TheHeader";
import { NotFound } from "./NotFound";
import { AboutMe } from "./pages/AboutMe";
import { Experience } from "./pages/Experience";

export function Routers() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <TheHeader />

        <main className="flex-1 bg-gradient-to-b from-gray-900 to-black">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            {/* <Route path="/projetos" element={<Projects />} /> */}
            <Route path="/experiencias" element={<Experience />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <TheFooter />
      </div>
    </BrowserRouter>
  );
}

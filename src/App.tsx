import { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { TheHeader } from "./components/TheHeader";
import "./globalStyle.css";
import { Menu } from "./@types/Menu";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  const [menuSelected, setMenuSelected] = useState<Menu>("inicio");

  return (
    <>
      <TheHeader
        onChangeMenu={(menu) => {
          setMenuSelected(menu);
        }}
        menu={menuSelected}
      />

      {menuSelected === "inicio" && <AboutMe />}

      {menuSelected === "experiencias" && <Experience />}

      {menuSelected === "projetos" && <Projects />}
    </>
  );
}

export default App;

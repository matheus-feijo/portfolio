import { ItemHeader } from "./ItemHeader";

export function TheHeader() {
  return (
    <>
      <div className="z-10 fixed w-full p-5 mobile:hidden backdrop-blur-sm">
        <ul className="justify-around flex items-center h-8">
          <ItemHeader label="Sobre" containerId="#sobre" />
          <ItemHeader label="Experiências" containerId="#experience" />
          <ItemHeader label="Habilidades" containerId="#skill" />
        </ul>
      </div>
    </>
  );
}

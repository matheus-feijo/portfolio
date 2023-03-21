import { Fragment } from "react";
import "./style.css";

export function Navigation() {
  const toggleScrool = () => {
    if (window.screen.availWidth <= 800) {
      return 1200;
    }

    return 1400;
  };

  return (
    <Fragment>
      <div className="navigation-pc">
        <ul className="justify-around flex items-center h-[8vh]">
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ behavior: "smooth", top: 0 });
              }}
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ behavior: "smooth", top: 700 });
              }}
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ behavior: "smooth", top: 10000 });
              }}
            >
              Experiências
            </button>
          </li>
        </ul>
      </div>

      <div className="navigation-mobile"></div>
    </Fragment>
  );
}

import { Fragment } from "react";
import "./style.css";

export function Navigation() {

    return (
        <Fragment>
            <div className="navigation-pc">
                <ul className="justify-around flex items-center h-[8vh]">
                    <li>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ behavior: 'smooth', top: 700 })
                        }}>
                            Habilidades
                        </button>
                    </li>
                    <li>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ behavior: 'smooth', top: 1200 })
                        }}>
                            Projetos
                        </button>
                    </li>
                    <li>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ behavior: "smooth", top: 10000 })
                        }}>
                            Experiências

                        </button>
                    </li>
                </ul>
            </div>

            <div className="navigation-mobile">
            </div>

        </Fragment>


    )
}
import "./style.css";

export function Navigation() {

    return (
        <div>
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
                        window.scrollTo({ behavior: 'smooth', top: 1600 })
                    }}>
                        Experiências
                    </button>
                </li>
                <li>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ behavior: "smooth", top: 1100 })
                    }}>
                        Projetos
                    </button>
                </li>

            </ul>
        </div>
    )
}
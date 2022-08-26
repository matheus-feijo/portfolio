export function Navigation() {

    return (
        <div>
            <ul className="justify-around flex items-center h-[8vh]">
                <li>
                    <button>
                        Apresentação
                    </button>
                </li>
                <li>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ behavior: 'smooth', top: 700 })
                    }}>
                        Habilidades
                    </button>
                </li>
                <li>
                    <button>
                        Experiencias
                    </button>
                </li>
                <li>
                    <button>
                        Cursos
                    </button>
                </li>

            </ul>
        </div>
    )
}
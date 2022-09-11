import "./style.css";
import calculadora from "../../assets/calculadora.png";

export function Projects() {

    const cards = [
        {
            img: calculadora,
            name: 'calculadora',
            describe: 'Projeto de uma calculadora simples',
            link: 'https://calculadora-iota-six.vercel.app/'
        },
    ]


    return (
        <div className="container-general pt-48">
            <p className="title-projects text-3xl font-bold pl-20 pb-5">Projetos</p>
            <div className="content-projects flex gap-5 pl-20 flex-wrap pr-20">
                {cards.map((card, ind) => {
                    return (
                        <a href={card.link} target='_blank' rel="noreferrer" key={ind}>
                            <button className="card-project h-60 w-60 rounded-md flex flex-col">
                                <img src={card.img} alt={card.name} className="w-full h-3/4 rounded-md" />
                                <span className="w-full h-1/4 flex items-center justify-center">{card.name}</span>
                            </button>
                        </a>
                    )
                })}
            </div>

        </div>
    )
}
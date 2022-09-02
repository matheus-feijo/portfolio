import "./style.css";

export function Projects() {

    const cards = [
        {
            img: '',
            name: 'projeto teste'
        },
        {
            img: '',
            name: 'projeto teste2'
        },
        {
            img: '',
            name: 'projeto teste3'
        },
        {
            img: '',
            name: 'projeto teste3'
        },

    ]


    return (
        <div className="container-general pt-20">
            <p className="title-projects text-3xl font-bold pl-20 pb-5">Projetos</p>
            <div className="content-projects flex gap-5 pl-20 flex-wrap pr-20">
                {cards.map((card, ind) => {
                    return (
                        <button key={ind} className="card-project h-64 w-64 rounded-md outline outline-1 outline-slate-700">
                            <span>Em breve</span>

                        </button>
                    )
                })}
            </div>

        </div>
    )
}
import { useEffect } from "react"
import { api } from "../../services/api"



export function Projects() {

    const getRepos = async () => {
        const repos = await api.get('/repos').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        //getRepos();
    }, [])


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
    ]


    return (
        <div className="pt-10">
            <p className="text-3xl font-bold pl-20 pb-5">Projetos</p>
            <div className="flex gap-5 pl-20">
                {cards.map((card, ind) => {
                    return (
                        <button key={ind} className="h-64 w-64 rounded-md outline outline-1 outline-slate-700">
                            <span>Em breve</span>

                        </button>
                    )
                })}
            </div>

        </div>
    )
}
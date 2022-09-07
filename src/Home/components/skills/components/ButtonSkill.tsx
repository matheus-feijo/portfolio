import { ReactNode } from "react"


type ButtonSkillProps = {
    name: string | undefined,
    icon: ReactNode,
    ind: number,
    showDescription: (ind: number) => void,
    selected?: string | undefined

}

export function ButtonSkill(props: ButtonSkillProps) {

    return (
        <button
            className={`p-5 outline outline-1 outline-gray-800 rounded-md 
        hover:bg-slate-400 transition-colors duration-75 ${props.name === props.selected ? 'bg-slate-400' : 'none'}`
            }
            onMouseMove={() => {
                props.showDescription(props.ind);
            }}
        >
            {props.icon}
        </button>
    )
}
interface BotaoProps {
    cor?: 'green'|'blue'|'gray'
    className?: string
    children: any
    destino? : string
    onClick?: () => void
}


export default function Botao(props: BotaoProps){
    const dest = props.destino
    const cor = props.cor ?? 'gray'
    return(
        <div onClick={props.onClick} 
        className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-5 py-2 rounded-md 
            cursor-pointer
            flex justify-center items-center
             p-2 my-3 mx-1
            hover:bg-purple-50
            ${props.className}
        `}>
            {props.children}
        </div>
    )
}
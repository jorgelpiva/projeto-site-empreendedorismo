
import Titulo from "./Titulo"
import Cabecalho from "./Cabecalho"

interface LayoutProps{
    children: any
}


export default function Layout(props: LayoutProps){
    return(
        <div className={`
        flex flex-col my-7 mx-4 max-w-none min-w-min
        bg-white text-gray-800 rounded-md
        `}>
            <Titulo></Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}
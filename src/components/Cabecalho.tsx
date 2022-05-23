import Link from "next/link";
import { IconeLogin } from './Icones'
import Botao from '../components/Botao'
import Image from 'next/image'


interface CabecalhoProps{
    titulo: string
} 


export default function Cabecalho(props: CabecalhoProps){
    
    
    return (
        <header>
            <div className={`
                flex flex-wrap justify-between
                bg-color bg-gray-200`}>
                
                <div><h1 className={`
                    my-5 mx-3 py-2 px-2 font-medium text-slate-500
                `}>{props.titulo}</h1>
                </div>

                <div className={`
                flex flex-wrap justify-end
                `}>
                <Link href="/"><div className={`m-2`}> <Botao cor="gray" className= "mb-4">Home</Botao></div></Link>
                <Link href="/cursos"><div className={`m-2`}> <Botao cor="gray" className= "mb-4">Catálogo de Cursos</Botao></div></Link>
                <Link href="/dicas"><div className={`m-2`}> <Botao cor="gray" className= "mb-4">Dicas</Botao></div></Link>
                <Link href="/sobre"><div className={`m-2`}> <Botao cor="gray" className= "mb-4">Sobre</Botao></div></Link>
                <Link href="/login"><div className={`m-2
                    flex justify-center items-center
                    text- to-blue-700 rounded-full p-2 
                    hover:bg-purple-50
                `
                }> <button>{IconeLogin}</button></div></Link>
                </div>

            </div> 
        </header>
    )
}
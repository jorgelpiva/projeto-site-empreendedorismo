import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'
import Image from "next/image"


export default function Home() {
  return(
    <div className={`
    flex flex-col items-top h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}> 
         <Cabecalho titulo='Você Está na Página Inicial'></Cabecalho>
         <Layout>
           <div>olá</div>
         </Layout>
    </div>
  )
}
import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'


export default function Home() {
  return(
    <div className={`
    flex flex-col items-top h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
         <Cabecalho titulo='Este é o Catálogo de Nossos Cursos'></Cabecalho>
         <Layout>
           <div>olá</div>
         </Layout>

    </div>
  )
}
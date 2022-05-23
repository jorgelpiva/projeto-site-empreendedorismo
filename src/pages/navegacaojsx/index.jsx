import Layout from "../../components/Layout";
import Navegador from "../../components/Navegador";

export default function Navegacao(){
    return(<div>
    <Layout titulo="Exemplo de Navegação #01">
        <h1>Exemplo de Navegação #01</h1>
    <Navegador destino="/" label="Home"></Navegador>
    </Layout>
    </div>)
}
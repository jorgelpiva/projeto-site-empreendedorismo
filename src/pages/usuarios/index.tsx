import Layout from '../../components/Layout'
import Tabela from '../../components/Tabela'
import Botao from '../../components/Botao'
import Formulario from '../../components/Formulario'
import useClientes from '../../hooks/useClientes'
import Cabecalho from '../../components/Cabecalho'

export default function Usuarios() {

  const { cliente, 
      selecionarCliente, 
      excluirCliente, 
      salvarCliente, 
      incluirCliente, 
      clientes, 
      tabelaVisivel, 
      formularioVisivel,
      exibirTabela
    } = useClientes()
  return (
    
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout>

        {tabelaVisivel ? (
                 <>
        <div className="flex justify-end">
        <Botao cor="green" className= "mb-4" 
          onClick = {incluirCliente}>
            Novo Cliente
        </Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={selecionarCliente} 
        clienteExcluido={excluirCliente}
        />
      </> 
        ):(
      <Formulario 
        cliente={cliente} 
        clienteMudou={salvarCliente}
        cancelado={()=> exibirTabela()}
      />
    )}
      </Layout>
    </div>
  )
}

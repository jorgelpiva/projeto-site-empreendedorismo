import Cliente from "./Cliente"
import ColecaoCliente from "../backend/db/ColecaoCliente"

export default interface ClienteRepositorio {
    salvar(cliente: Cliente) : Promise<Cliente>
    excluir(cliente: Cliente) : Promise<void>
    obterTodos(): Promise<Cliente[]>
}
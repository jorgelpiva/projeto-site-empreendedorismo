import Curso from "./Curso"

export default interface ClienteRepositorio {
    salvar(cliente: Curso) : Promise<Curso>
    excluir(cliente: Curso) : Promise<void>
    obterTodos(): Promise<Curso[]>
}
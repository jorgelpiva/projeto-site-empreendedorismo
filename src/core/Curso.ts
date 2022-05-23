export default class Curso{
    #id: string
    #titulo: string
    #descricao: number
    #id_Categoria: string
    #imagem: string

    constructor(id: string, titulo: string, descricao: number, id_Categoria: string, imagem: string){
        this.#id = id
        this.#titulo = titulo
        this.#descricao = descricao
        this.#id_Categoria = id_Categoria
        this.#imagem = imagem
    }

    static vazio(){
        return new Curso("", "", null, "", "")
    }

    get id(){
        return this.#id
    }

    get titulo(){
        return this.#titulo
    }

    get descricao(){
        return this.#descricao
    }

    get id_Categoria(){
        return this.#id_Categoria
    }

    get imagem(){
        return this.#imagem
    }

}
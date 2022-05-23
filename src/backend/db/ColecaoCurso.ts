import CursoRepositorio from "../../core/CursoRepositorio";
import Curso from "../../core/Curso";
import firebase from "../config"

export default class ColecaoCurso implements CursoRepositorio {

    #conversor = {
        toFirestore(curso: Curso){
            return {
                id: curso.id,
                titulo: curso.titulo,
                descricao: curso.descricao,
                id_Categoria : curso.id_Categoria,
                imagem : curso.imagem,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Curso(dados.titulo, dados.descricao, dados.id_Categoria, dados.imagem, snapshot.id)
        }
    }

    async salvar(curso: Curso): Promise<Curso>{
        if(curso?.id){
            await this.colecao().doc(curso.id).set(curso)
            return curso
        } else {
            const docRef = await this.colecao().add(curso)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(curso: Curso): Promise<void>{
        return this.colecao().doc(curso.id).delete()
    }

    async obterTodos(): Promise<Curso[]>{
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore()
        .collection('cursos')
        .withConverter(this.#conversor)
    }
}
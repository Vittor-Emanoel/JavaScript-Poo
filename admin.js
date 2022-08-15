import User from "./User.js";


class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Vittor', 'Vittor@.com','21-021-25'); //criando noo 

console.log(novoAdmin); //

console.log(novoAdmin.criarCurso('JS','20'));
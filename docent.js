import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(Estudante, Curso) {
        return `Estudante ${Estudante} passou em ${Curso}.`
    }
}

const novoDocente =  new Docente('Vittor', 'Emanoel@gmail.com', '21/05/0552');

console.log(novoDocente)// criando novo docente
console.log(novoDocente.exibirInfos())//reultilizando o metodo exibirInfos
console.log(novoDocente.aprovaEstudante('Vittor', 'JavaScript'));
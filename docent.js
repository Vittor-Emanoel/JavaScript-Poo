import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(Estudante, Curso) {
        return `Estudante ${Estudante} passou em ${Curso}.`
    }
}

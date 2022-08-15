//CLASSE SUPER - MOLDE

export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'Estudante';
        this.ativo = ativo
    }
    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }

 }

/*
 const novoUser = new User('Vittor', 'Vittor@com', '21/05/52');
 console.log(novoUser)//cria o nome objeto.
 console.log(novoUser.exibirInfos()); //herda a função também.

 console.log(User.prototype.isPrototypeOf(novoUser))//testante.*/

 // FUNÇÃO DENTRO DE UMA CLASSE É CHAMADA DE METODO.
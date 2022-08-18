//CLASSE SUPER - MOLDE

export default class User {
    //# definir classe privada
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'Estudante';
        this.#ativo = ativo
    }
//privado!
    #montaObjUser() {
        return({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            avito: this.#ativo,
        })
    }
    /*metodo estático
    static exibirInfos(){
        return 'olá';
    }*/
    exibirInfos() {
        const objetoUser = this.#montaObjUser() //chamando objeto privado
        return `${objetoUser.nome}, ${objetoUser.email}, ${objetoUser.nascimento}. ${objetoUser.role}, ${objetoUser.avito} `
    }

 }

/*
 const novoUser = new User('Vittor', 'Vittor@com', '21/05/52');
 console.log(novoUser)//cria o nome objeto.
 console.log(novoUser.exibirInfos()); //herda a função também.

 console.log(User.prototype.isPrototypeOf(novoUser))//testante.*/

 // FUNÇÃO DENTRO DE UMA CLASSE É CHAMADA DE METODO.
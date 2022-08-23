//CLASSE SUPER - MOLDE

export default class User {
  //# definir classe privada
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "Estudante";
    this.#ativo = ativo;
  }
  //privado!
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      avito: this.#ativo,
    };
  }
  //estamos pegando apenas.
  // não recebe nenhum argumento nunca
  // pode ter condição
  // não se chama como um metodo
  get nome() {
    return this.#nome;
  }
  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }
  //aceita penas um parementro relativo a um unico dado
  //protege
  //encadeia açoes
  //modifica as propriedades.
    set nome(novoNome) {
    if (novoNome === "") {
      throw new console.error("Formato inválido!");
    }
    this.#nome = novoNome;
  }
  /*metodo estático
    static exibirInfos(){
        return 'olá';
    }*/
  exibirInfos() {
    //const objetoUser = this.#montaObjUser(); //chamando objeto privado
    return `${this.nome}, ${this.email}, ${this.nascimento}. ${this.role}, ${this.ativo} `;
  } 
}

/*
 const novoUser = new User('Vittor', 'Vittor@com', '21/05/52');
 console.log(novoUser)//cria o nome objeto.
 console.log(novoUser.exibirInfos()); //herda a função também.

 console.log(User.prototype.isPrototypeOf(novoUser))//testante.*/

// FUNÇÃO DENTRO DE UMA CLASSE É CHAMADA DE METODO.

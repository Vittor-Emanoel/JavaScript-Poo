const user =  {
    nome: 'Vittor',
    email:  'Vittor@.com',
    nascimento: '21/04/002',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Emanoel',
    email: 'emanoel@.com',
    role: 'admin',
    criarCurso: function() {
      console.log('Curso criado'); //metodo
    }
}

Object.setPrototypeOf(admin, user);// o contexto de this é o admin, embora seja um metodo que nn exista dentro de admin
admin.criarCurso();
admin.exibirInfos(); // herda
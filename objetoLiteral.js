const user =  {
    nome: 'Vittor',
    email:  'Vittor@.com',
    nascimento: '21/04/002',
    role: 'role',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}
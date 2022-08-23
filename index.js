import User from "./User.js";
import Docente from "./docent.js";
import Admin from "./admin.js";

const novoAdmin = new Admin("Vittor", "Vittor@gmail.com", "21/09/2002");


const novoDocente =  new Docente('Vittor', 'Vittor!', '21/32/43');
console.log(novoDocente.exibirInfos())
//console.log(docente.aprovaEstudante("Js", "20"));
//estou acessando um metodo privado atraves de uma classe.

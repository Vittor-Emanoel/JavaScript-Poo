import User from "./User.js";
import Docente from "./docent.js";
import Admin from "./admin.js";

const novoUser = new Admin("Vittor", "Vittor@gmail.com", "21/09/2002");
console.log(novoUser.nomeAdmin());

//console.log(docente.aprovaEstudante("Js", "20"));
//estou acessando um metodo privado atraves de uma classe.

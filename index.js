import User from "./User.js";
import Docente from "./docent.js";
import Admin from "./admin.js";


const novoUser = new User ('Vittor', 'Vittor@gmail.com', '21/09/2002');
const docente = new Docente('Emily', 'Emily@gmail.com', '21/12/2002');
novoUser.#nome = 'Antonio'
console.log(docente)
console.log(docente.aprovaEstudante('Js','20'))
console.log(novoUser);
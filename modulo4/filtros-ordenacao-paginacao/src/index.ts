import {app} from "./app";
import {getAllUsers} from "./endpoints/getAllUsersByName"
import {getUserByType} from "./endpoints/getUserByType"
import {getUserLimit5} from "./endpoints/getUserLimit5"
import {getAllUsersOrdem} from "./endpoints/getAllUsersOrdem"
import {getAllExercicio4} from "./endpoints/getAllExercicio4"


// Pegando usuarios por nome
app.get("/users" , getAllUsers)

//pegando usuarios por tipo
app.get("/users/:type" , getUserByType)

// ordernar por name ou type o email 
app.get("/ordem" , getAllUsersOrdem)

// Limite 5 da pagina com offset. 
app.get("/page" , getUserLimit5)

// Exercicio4 
app.get("/pageUser" , getAllExercicio4)





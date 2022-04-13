import {app} from "./app";
import {getAllUsers} from "./endpoints/getAllUsersByName"
import {getUserByType} from "./endpoints/getUserByType"
import {getUserLimit5} from "./endpoints/getUserLimit5"
import {getAllUsersOrdem} from "./endpoints/getAllUsersOrdem"


// Pegando usuarios por nome
app.get("/users" , getAllUsers)

//pegando usuarios por tipo
app.get("/users/:type" , getUserByType)

app.get("/page" , getUserLimit5)



app.get("/ordem" , getAllUsersOrdem)


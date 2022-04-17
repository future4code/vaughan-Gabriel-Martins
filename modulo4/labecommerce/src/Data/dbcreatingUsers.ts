import { connection } from "../connection";
import { users } from "../types";


// Data inicial para ir mais rapido.
// const usuarios: users[]  = [{"id": "001","name": "Gabriel", "email": "gabriel@gmail.com", "password" : "12345" },
// {"id": "002", "name": "jose", "email": "jose@gmail.com", "password" : "$@#DERWR@#" },
// {"id": "003", "name": "Velho", "email": "velho@gmail.com", "password" : "passwofgd" },
// {"id": "004", "name": "Jieun", "email": "jieun@gmail.com", "password" : "12ew3erwwe45" },
// {"id": "005", "name": "Feijo", "email": "feijo@gmail.com", "password" : "ewrewrew2345" },
// {"id": "006", "name": "Bere", "email": "bere@gmail.com", "password" : "1rewrewrew2345" },
// {"id": "007", "name": "Joao", "email": "joao@gmail.com", "password" : "897564564" },
// {"id": "008", "name": "Marcela", "email": "marcela@gmail.com", "password" : "f65dgdrew" },
// {"id": "009", "name": "Rodrigo", "email": "rodrigo@gmail.com", "password" : "#@$#@$@#$@#" }]

// Exemplo de como usar a funcao elas aceita um arry type user como abaixo e alimenta o DB.
// populateUser([{"id": "010", "name": "Rafael", "email": "rafael@gmail.com", "password" : "fdsfksDfdsfdsfERWR@#" }])

// entrada eh um array de objetos mesmo se fo um user so. 
const populateUser = async (usuarios:users[] ):Promise<number[]> => { 
    const result:number[] = 
         await connection(`labecommerce_users`)
         .insert(usuarios)
    return result;
}

export default populateUser;
import { connection } from "../connection";
import { users } from "../types";


// Exemplo de como usar a funcao elas aceita um arry type user como abaixo e alimenta o DB.
// populateUser([{"id": "010", "name": "Rafael", "email": "rafael@gmail.com", "password" : "fdsfksDfdsfdsfERWR@#" }])

// entrada eh um array de objetos mesmo se fo um user so. 
const populateUser = async (usuarios: users[]): Promise<number[]> => {
    const result: number[] =
        await connection(`labecommerce_users`)
            .insert(usuarios)
    return result;
}

export default populateUser;
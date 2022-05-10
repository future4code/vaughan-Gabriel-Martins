import { connection } from "../connection";



const teste = async () => { 

    const result = await connection("Actors")

     
    console.table(result)


}
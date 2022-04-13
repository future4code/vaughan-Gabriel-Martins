import {Request, Response } from "express"
import { type } from "os"
import { connection } from "../data/connection"
 

type user = {
    id: number,
    name: string,
    email: string,
    type: string
}

 async function selectUsers(input:string):Promise<user[]> {
    const result = await connection("aula48_exercicio")
                .select("*")
                .orderBy([ `${input}` , { column: 'email', order: 'desc' }])

    console.log(result)
    return result
 }

export const getAllUsersOrdem = async (req: Request , res: Response): Promise<void> => {
   
     try{
         let result;
         const input = req.query.input as string 
        if(input ==="name" || input === "type"){
          result  = await selectUsers(input);
        }else { 
           result  = await selectUsers("email");
        }
         if(result.length >0){
        res.status(200).send(result);
         }else throw new Error("Não existe a entrada!")
        
    }
     catch(e:any){
         switch(e.message){ 
             case "Tipo inexistente 1!":
             res.status(422).send(e.message); 
             break;
         default: 
             res.status(500).send(e.message);
         }
     }

}
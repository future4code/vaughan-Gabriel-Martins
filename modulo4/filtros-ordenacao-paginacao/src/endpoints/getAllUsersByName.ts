import {Request, Response } from "express"
import { connection } from "../data/connection"
 

type user = {
    id: number,
    name: string,
    email: string,
    type: string
}

 async function selectAllUsers(name:string):Promise<user[]> {
    const result = await connection("aula48_exercicio")
                .select("*")
                // coloquei para pegar por parte do nome e não somente o nome.
                // se nao colocar nada na entrada vai aparecer todos.
                .where("name","like",`%${name}%`)

    return result
 }



export const getAllUsers = async (req: Request , res: Response): Promise<void> => {
   
     try{
         const name = req.query.name as string 
         const result  = await selectAllUsers(name);
         if(result.length >0){
        res.status(200).send(result);
         }else throw new Error("Nome inexistente!")
        
    }
     catch(e:any){
         switch(e.message){ 
             case "Nome inexistente!":
             res.status(422).send(e.message); 
             break;
         default: 
             res.status(500).send(e.message);
         }
     }

}
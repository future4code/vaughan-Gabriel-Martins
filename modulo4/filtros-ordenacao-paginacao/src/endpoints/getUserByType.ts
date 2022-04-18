import {Request, Response } from "express"
import { type } from "os"
import { connection } from "../data/connection"
 

type user = {
    id: number,
    name: string,
    email: string,
    type: string
}

 async function selectAllUsers(type:string):Promise<user[]> {
    const result = await connection("aula48_exercicio")
                .select("*")
      
                .where("type","like",`%${type}%`)

    return result
 }



export const getUserByType = async (req: Request , res: Response): Promise<void> => {
   
     try{
         const type = req.params.type as string 
         const result  = await selectAllUsers(type);
         if(result.length >0){
        res.status(200).send(result);
         }else throw new Error("Tipo inexistente!")
        
    }
     catch(e:any){
         switch(e.message){ 
             case "Tipo inexistente!":
             res.status(422).send(e.message); 
             break;
         default: 
             res.status(500).send(e.message);
         }
     }

}
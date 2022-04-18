import {Request, Response } from "express"
import { connection } from "../data/connection"
 

type user = {
    id: number,
    name: string,
    email: string,
    type: string
}

  const limit = 5; 

 async function get5users(page:number):Promise<user[]> {
    const result = await connection("aula48_exercicio")
                .select("*")
                .limit(5)
                .offset(limit*(page-1))

    return result
 }



export const getUserLimit5 = async (req: Request , res: Response): Promise<void> => {
   
     try{
         const page = req.query.page; 
         const result  = await get5users(Number(page));
         if(result.length >0){
        res.status(200).send(result);
         }else throw new Error("Não existente usuario para mostrar!")
        
    }
     catch(e:any){
         switch(e.message){ 
             case "Não existente usuario para mostrar!":
             res.status(400).send(e.message); 
             break;
         default: 
             res.status(500).send(e.message);
         }
     }

}
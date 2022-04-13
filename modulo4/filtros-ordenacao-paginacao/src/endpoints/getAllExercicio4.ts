import {Request, Response } from "express"
import { connection } from "../data/connection"
 

type user = {
    id: number,
    name: string,
    email: string,
    type: string
}

 async function selectAllUsers(name:string, input:string , page:number ):Promise<user[]> {
    const limit =5;
    const result = await connection("aula48_exercicio")
                .select("*")
                // coloquei para pegar por parte do nome e não somente o nome.
                // se nao colocar nada na entrada vai aparecer todos.
                .where("name","like",`%${name}%`)
                .orderBy([ `${input}` , { column: 'name', order: 'asc' }])
                .limit(5)
                .offset(limit*(page-1))
                

    return result
 }



export const getAllExercicio4 = async (req: Request , res: Response): Promise<void> => {
   
     try{
         const name = req.query.name as string 
         let input = req.query.input as string
         let page = req.query.page;   
         if(!input) { input = "name"} 
         if (!page){page = "1" }
         const result  = await selectAllUsers(name , input , Number(page)  );
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
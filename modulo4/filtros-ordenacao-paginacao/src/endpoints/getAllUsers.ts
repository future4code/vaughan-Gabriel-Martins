import {Request, Response } from "express"
import { connection } from "../data/connection"
 



export default async function selectAllUsers():Promise<any> {
    const result = await connection("aula48_exercicio")
                .select("*"); 
    
                console.log(result)
    return result
 }



export const getAllUsers = async (req: Request , res: Response): Promise<void> => {

    //  try{
 
    //     const users = await 

    
        
    // }
    //  catch{}

}
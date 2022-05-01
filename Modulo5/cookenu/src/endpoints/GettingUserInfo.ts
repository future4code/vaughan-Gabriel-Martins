import { Request , Response} from "express";
import { UserDB } from "../data/userDB";
import {Authenticator} from "../services/Authenticator";



export const  GettingUserInfo = async (req: Request , res: Response)=> { 
   try{ 

    const token = req.headers.authorization as string;

    if(!token){ 

        throw new Error("Token ausente") //(404)  
    }

    const authenticator = new Authenticator();
    const tokenData   =  authenticator.getTokeData(token)

    const userDB = new UserDB();
    const user = await userDB.finderUserById(tokenData.id)
    if (!user) {
        throw new Error("Usuario nao encontrado!");
    }

    res.status(200).send({
        id: user.getId(),
        name: user.getNome(),
        email: user.getEmail()
    })

   } 
   catch(error: any ){ 
       res.status(400).send(error.message)
   }


   


  

}
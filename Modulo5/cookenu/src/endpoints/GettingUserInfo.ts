import { Request , Response} from "express";
import { UserDB } from "../data/userDB";
import {Authenticator} from "../services/Authenticator";



export const  GettingUserInfo = async (req: Request , res: Response)=> { 
   try{ 
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
   
    console.log(token)

    const tokenData   =  authenticator.getTokeData(token)

    console.log( tokenData.id)


    const userDB = new UserDB();
    const user = await userDB.finderUserById(tokenData.id)


    res.status(200).send({
        id: user.getId(),
        email: user.getEmail()
    })

   } 
   catch(error: any ){ 
       res.status(400).send(error.message)
   }


   


  

}
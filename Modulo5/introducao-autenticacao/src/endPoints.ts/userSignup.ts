import {Request , Response} from "express";
import { userCreating } from "../data/userCreating";
import { idGenerate } from "../services/idGenerate";
import { generateToken } from "../services/tokenGenerate";



export const userSignup = async (req: Request, res: Response ): Promise<void> => { 
    try{

     // validacao de email usando indexof em undefined 
     if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
    

       /// validacao da senha  tem que ser maior = a 6 usando length em da string ou undefined.
      if (!req.body.password || req.body.password.length <= 6) {
        throw new Error("Invalid password");
      }





   const {email , password}: { email: string , password : string } = req.body; 
   const id = idGenerate();

//    await userCreating( id , email , password) 


console.log(email , password )
   const token = generateToken({id})


   res.status(200).send({"token": token})

    } 
    catch(error: any) { 
        res.status(400).send(error.message || error.sqlmessage )
    }

}
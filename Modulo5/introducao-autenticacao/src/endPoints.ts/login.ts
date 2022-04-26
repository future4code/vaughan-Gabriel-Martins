import { Request , Response } from "express";
import { getUserByEmail } from "../data/userByEmail";
import { generateToken } from "../services/tokenGenerate";





const userLogin =async (req: Request, res:Response)=> { 
   try{
    const  email = req.body.email; 
    const  password =  req.body.password; 
 
    const userByEmail  = await getUserByEmail(email)



        
    const token = generateToken({
        id: userByEmail.id,
      });

      res.status(200).send({
        token,
      });
    }
    catch( error: any ){ 
        res.status(400).send(error.message)
        
}
}


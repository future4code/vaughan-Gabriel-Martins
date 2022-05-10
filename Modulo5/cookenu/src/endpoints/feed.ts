import {Request , Response} from "express"; 
import { feedDB } from "../data/feedDB";
import { UserDB } from "../data/userDB";
import { Authenticator } from "../services/Authenticator";





export const feed = async (req:Request , res: Response): Promise<void>  => { 
 try {
     const authenticator = new Authenticator(); 
     
     const token = req.headers.authorization as string;
     if(!token){ 
         res.statusCode = 401; 
         throw new Error("Token inexistente");
     }

     const tokenDate  = authenticator.getTokeData(token); 
     const id = tokenDate.id;

     const feedDb =  new feedDB()
     
     const userdb = new UserDB(); 
     const user = userdb.finderUserById(id)

     if(!user){ 
         throw new Error("Usuario não existe! ");    
     }

     const result = await feedDb.feedReceitasFollowed(id)

     if(![result] || result.length === 0) { 
         res.statusCode = 404;
         throw new Error("Não existem receitas no servidor");
     }

     res.send(result)
     
 }
 catch( error: any) { 
        
    if(res.statusCode === 200) { 
        res.status(500).send(error.message)
    } else { 
        res.send({message: error.message}|| error.sqlMessage)
    }
}    



}
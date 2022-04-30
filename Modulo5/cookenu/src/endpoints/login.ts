import e, {Request , Response } from "express"
import { UserByEmailDB } from "../data/userDB";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HarshManager } from "../services/HashManager";



export const login = async  (req: Request , res: Response):Promise<void>  => { 
    try {
        const { email, password } = req.body; 
        if( !email || !password) { 
            throw new Error("Uma ou mais entrada invalidas!"); 
        }
        const userDB = new UserByEmailDB()
        const user : User = await userDB.finderUserByEmail(email);
        if(!user) { 
            throw new Error("Usuario inexistente!");
        }
       
        const hashManager = new HarshManager();
        const authenticator = new Authenticator();

        const isPasswordRight  = await hashManager.compare(password , user.getPassword())
        if (!isPasswordRight){ 
            throw new Error("Senha invalida! ");
        }
        const token =  authenticator.generateToken({id: user.getId()})
        res.status(200).send({token})

        
    } catch (error: any) {

        res.status(400).send(error.message)
        
        
    }
}
import { Request, Response } from "express";
import { UserByEmailDB } from "../data/userDB";
import { User } from "../entities/User";
import { HarshManager } from "../services/HashManager";
import { GeneratorId } from "../services/idGenenator";
import { inputUserFront, ROLE } from "../types";



export async function signup  (req: Request, res: Response) {
  try{
    const { name, email, password }: inputUserFront = req.body;
    const idGenerate = new GeneratorId();

    if(! name || !email || !password ){ 
        throw new Error("Um ou mais entradas sao invalidas! ") // 404
    }
    const userbyEmail = new UserByEmailDB()
    const user = await userbyEmail.finderUserByEmail(email)

    if(user){
        throw new Error("Usuario já existe!"); // 409
    }

    const idGenenator = new GeneratorId();
    const id = idGenerate.generator()
    
    const harshManager = new HarshManager()
    const passwordHash = await  harshManager.hash(password)

    const newUser = new User( id , name, email , passwordHash , ROLE.ADMIN)





    
    }

    catch( error: any) { 

        res.status(400).send(error.message)
    }

}

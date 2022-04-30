import { Request, Response } from "express";
import { UserDB } from "../data/userDB";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HarshManager } from "../services/HashManager";
import { GeneratorId } from "../services/idGenenator";
import { inputUserFront, ROLE } from "../types";


export async function signup  (req: Request, res: Response) {
  try{
    // const { name, email, password , role }: inputUserFront = req.body;
    const { name, email, password }: inputUserFront = req.body;
    const idGenerate = new GeneratorId();

    // if(!name || !email || !password || !role){ 
    if(!name || !email || !password ){ 
        throw new Error("Um ou mais entradas sao invalidas! ") // 404
    }
    const id = idGenerate.generator()
    const userbyEmail = new UserDB()
    const user = await userbyEmail.finderUserByEmail(email)

    if(user  && user.getEmail() !== undefined ){
        throw new Error("Usuario já existe!"); // 409
    }
    
    const harshManager = new HarshManager()
    const passwordHash = await  harshManager.hash(password)

    // const newUser = new User( id , name, email , passwordHash , role)
    const newUser = new User( id , name, email , passwordHash)
    
    await userbyEmail.creatingUser(newUser);
    const authenticator = new Authenticator();
    // const token = authenticator.generateToken({id,role})
    const token = authenticator.generateToken({id})

    res.status(201).send({messagem:"Usuario Criado" , token  })
    }
    catch( error: any) { 

        res.status(404).send(error.message)
    }

}

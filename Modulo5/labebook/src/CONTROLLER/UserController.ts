import {Request, Response} from "express";
import { SignupInputUserDTO } from "../Types/signupInputUserDto";




export class UserController { 

    public  signup  = async (request :Request , response: Response): Promise<void> => { 
      try{ 
        
        const { name, email,  password } = request.body;

        const userInput :SignupInputUserDTO = { 
            name, 
            email, 
            password
        }



        response.send("token")

    }
    catch(error:any){ 
        response.status(400).send(error.message || "Unexepcted error!")
    }
    }
}
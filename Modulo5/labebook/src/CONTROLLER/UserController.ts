import {Request, Response} from "express";
import { UserBusiness } from "../BUSINESS/UserBusiness";
import { loginInputUserDto } from "../Types/loginInputUserDto";
import { SignupInputUserDTO } from "../Types/signupInputUserDto";




export class UserController { 

    public  static signup  = async (request :Request , response: Response): Promise<void> => { 
      try{ 
        
        const { name, email,  password } = request.body;

        const userInput :SignupInputUserDTO = { 
            name, 
            email, 
            password
        }
        const token = await UserBusiness.signup(userInput)
        response.send(token)
    }
    catch(error:any){ 
        response.status(400).send(error.message || "Unexepcted error!")
    }
    }

    public  static login  = async (request :Request , response: Response): Promise<void> => { 
      try{ 
        
        const {email,  password } = request.body;

        const userInput :loginInputUserDto = { 
            email, 
            password
        }
        const token = await UserBusiness.login(userInput)
        response.send(token)
    }
    catch(error:any){ 
        response.status(400).send(error.message || "Unexepcted error!")
    }
    }
}
import {Request, Response} from "express";
import { UserBusiness } from "../BUSINESS/UserBusiness";
import { LoginInputUserDto } from "../Types/loginInputUserDto";
import { SignupInputUserDTO } from "../Types/signupInputUserDto";

export class UserController { 

    constructor ( 
        private userBusiness : UserBusiness
        ){}
    public   signup  = async (request :Request , response: Response): Promise<void> => { 
      try{ 
        const { name, email,  password } = request.body;
        const userInput :SignupInputUserDTO = { 
            name, 
            email, 
            password
        }
        const token = await this.userBusiness.signup(userInput)
        response.status(201).send({message:"Success!", token})
    }
    catch(error:any){ 
        response.status(400).send(error.message || "Unexepcted error!")
    }
    }
    public   login  = async (request :Request , response: Response): Promise<void> => { 
      try{ 
        const {email,  password } = request.body;
        const userInput :LoginInputUserDto = { 
            email, 
            password
        }
        const token = await this.userBusiness.login(userInput)
        response.send({message: "Messagem logado!", token})
    }
    catch(error:any){ 
        response.status(400).send(error.message || "Unexepcted error!")
    }
    }
}
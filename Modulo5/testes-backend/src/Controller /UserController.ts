import { Request, Response } from "express";
import { GetUserByIdInputDTO } from "../models/user";
import { UserBusiness} from "../Business/UserBusiness"; 




export class UserController {
    constructor(
        private userBusiness : UserBusiness
    ) { }

    public getUserById = async (request: Request, response: Response) => {

        try {
            
            const id = request.params.id as string;
    
            const input: GetUserByIdInputDTO =
            {
                id
            }
    
            const result = await this.userBusiness.getUserById(input)

        } catch (error) {
            
        }



    }
}
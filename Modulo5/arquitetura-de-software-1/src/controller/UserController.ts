import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IdGenerator } from "../services/IdGenerator";
import { User, ROLE } from "../types/user";



const userBusiness = new UserBusiness();
const idGenerator  = new IdGenerator();


export class UserController {

    public signup(req: Request, res: Response) {
        try {

            const { name, email, role, password }:
                {
                    name: string, email: string, role: ROLE, password: string
                } = req.body;

            const user = new User(name, email, password, role)

            // userBusiness.createUser( name, email, role, password)
            userBusiness.createUser(user)


        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message)


        }

    }


}
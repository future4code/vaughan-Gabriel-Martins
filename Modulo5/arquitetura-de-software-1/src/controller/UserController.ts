import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User, ROLE, userLogin } from "../types/user";


const userBusiness = new UserBusiness();


export class UserController {

    public async signup(req: Request, res: Response) {
        try {
            const { name, email, role, password }:
                {
                    name: string, email: string, role: ROLE, password: string
                } = req.body;
            const user = new User(name, email, password, role)
            const token = await userBusiness.signup(user)
            res.status(201).send({message:"Usuario logado", token})

        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message)
        }
    }
    public async login(req: Request, res: Response) {
        try {
            const {email, password }: userLogin  = req.body 

            const userLogin = {email, password}

            const token = await userBusiness.login(userLogin)
            res.status(201).send({message:"Usuario logado", token})

        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message)
        }
    }
    public async getAllUsers(req: Request, res: Response) {
        try {
            const token : string | undefined  = req.headers.authorization;

            const allUsers = await userBusiness.getAllUser(token)

            res.status(200).send(allUsers)
       

        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message)
        }
    }
    public async deleteUser(req: Request, res: Response) {
        try {
            const token : string  = req.headers.authorization as string;
            const id: string = req.params.id;

            await userBusiness.deleteUser(id , token)

            res.status(200).send("Usuario deleted")
       

        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message)
        }
        
    }
}
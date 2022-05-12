import { request } from "express";
import { GetUserByIdDBDTO, User, UserOutputDTO } from "../models/user";
import { BaseDataBase } from "./BaseDataBase";


export class UserData extends BaseDataBase {

    public getUserById = async (input: GetUserByIdDBDTO): Promise<User> => {

        const id = input.id
        const [result]: UserOutputDTO[] = await BaseDataBase
            .connection("Table").where({ id })

        const user: User =
        {
            id: result.id,
            name: result.name,
            email: result.email,
            role: result.role
        }
        return user
    }
}
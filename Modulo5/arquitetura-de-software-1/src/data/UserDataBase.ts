import { User, UserDB } from "../types/user";
import { BaseDataBase } from "./BaseDataBase";



export class UserDataBase extends BaseDataBase {

    public async createUser(user: UserDB): Promise<void> {
        try {
            await BaseDataBase.connection("USER")
                .insert({
                    id: user.getId(), 
                    name: user.getname(), 
                    email: user.getEmail(), 
                    role: user.getRole(),
                    password: user.getPassword() 
                })
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    public async getUserByEmail(email: string ): Promise<UserDB[]> {
        try {
            return  BaseDataBase.connection("USER")
                 .where({email}).select()
                
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    public async getAllUsers (): Promise<UserDB[]> {
        try {
            return  BaseDataBase.connection("USER")
                    
                
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    public async deleteUser (id: string): Promise<void> {
        try {
            return  BaseDataBase.connection("USER").where({id}).del()
                    
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}
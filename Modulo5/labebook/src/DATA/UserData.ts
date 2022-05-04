import User from "../Model/user";
import { BaseDataBase } from "./BaseDateBase";



export class  UserData  extends BaseDataBase { 

    public  insertUser = async (user:User ): Promise<void> => { 
         try{ 
             await BaseDataBase.connetion("USER").insert(user)

            }catch(error:any){ 
             throw new Error(
                 error.sqlmessage || error.message || "Unexpected error at DB!"
             );
         }
    }
    public  userByEmail = async (email: string): Promise<User[]> => { 
        try {
             return BaseDataBase.connetion("USER").where({email})

            
        } catch (error: any) {
            throw new Error(
                error.sqlmessage || error.message || "Unexpected error at DB!"
            );
        }
    }
}
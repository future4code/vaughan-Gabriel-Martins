import { User } from "../Types/user";
import { BaseDataBase } from "./BaseDateBase";






export class  UserDataBase  extends BaseDataBase { 

    public insertUser = async (user:User ): Promise<void> => { 
         try{ 
             await BaseDataBase.connetion("USERS_lb").insert(user)

         }catch(error:any){ 
             throw new Error(
                 error.sqlmessage || error.message || "Unexpected error at DB!"
             );
             
         }

    }
}
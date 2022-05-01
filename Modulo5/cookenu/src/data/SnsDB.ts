import { followingUser } from "../entities/following";
import { BaseDataBase } from "./BaseDataBase";




export class SnsDB extends BaseDataBase {

    public async followingDB(followingUser: followingUser): Promise<void> {
   try {
           await BaseDataBase.connection("USER_SNS")
               .insert(followingUser) 
       
   } catch (error:any) {

     throw new Error(error.sqlmessage|| error.message );
    
   }
}
}
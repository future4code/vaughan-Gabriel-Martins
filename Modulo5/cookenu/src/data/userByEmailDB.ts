import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";



export class UserByEmailDB extends BaseDataBase { 
   public async finderUserByEmail(email: string ): Promise<User> { 
     try {

        
        const  user: User[] = await BaseDataBase.connection("USER")
                                .where({email})
                                .select()
        // console.log("UserDB", user[0])
        return User.toUserModel(user[0])


         
     } catch (error: any ) {
         

        throw new Error(error.sqlMessage || error.message );
        
     }
 }


}
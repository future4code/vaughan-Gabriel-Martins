import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";



export class UserByEmailDB extends BaseDataBase { 
   public async finderUserByEmail(email: string ): Promise<User> { 
     try {
        const  user: User[] = await BaseDataBase.connection("USER")
                                .where({email})
                                .select()
            return user[0] && User.toUserModel(user[0])
     } catch (error: any ) {
        throw new Error(error.sqlMessage || error.message );
     }
 }
   public async creatingUser(user:User): Promise<void> { 
      try {
           await BaseDataBase.connection("USER")
                .insert(user)
      } catch (error: any ) {
         throw new Error(error.sqlMessage || error.message);
      }
   }  
}
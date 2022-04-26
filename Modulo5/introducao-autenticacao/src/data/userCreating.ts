import { connection } from "../connection";

export const userCreating =
async(id:string, email: string, password: string):Promise<void> => 
{
   await connection("USER")
   .insert({id,password, email})
};

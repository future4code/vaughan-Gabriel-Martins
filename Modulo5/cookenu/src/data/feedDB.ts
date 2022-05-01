import { report, title } from "process";
import { BaseDataBase } from "./BaseDataBase";




export class feedDB extends BaseDataBase {

    public async feedReceitasFollowed(userID: string): Promise<any> {
       try {
           const response = await BaseDataBase.connection("USER_SNS")
           .join("RECEITAS" ,"RECEITAS.user_id" ,"USER_SNS.fed_id" )
           .where("RECEITAS.user_id", userID)
           .select();
        
   
               return response;
           
       } catch (error: any ) {
           throw new Error(error.sqlmessage || error.message);
           
       }
    }
}
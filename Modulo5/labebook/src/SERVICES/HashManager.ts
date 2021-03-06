import * as bcryptjs from "bcryptjs";
import { IdGenerator } from "./IdGenerator";



export class HashManager { 
 
    public  async hash  (text:string ){ 
        const rounds = Number(process.env.HASH_COST)
        const salt = await bcryptjs.genSalt(Number(rounds))
        return bcryptjs.hash(text, salt)
    }

    public  async compare(text:string, hashDB: string):Promise<boolean>  {
           return  bcryptjs.compare(text , hashDB )
    }    
}
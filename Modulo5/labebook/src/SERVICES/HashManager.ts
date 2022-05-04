import * as bcryptjs from "bcryptjs";










export class HashManager { 
 
    protected static async hash  (text:string ){ 
        const rounds = Number(process.env.HASH_COST)
        const salt = await bcryptjs.genSalt(Number(rounds))
        return bcryptjs.hash(text, salt)
    }

    protected static async compare(text:string, hashDB: string):Promise<boolean>  {
           return  bcryptjs.compare(text , hashDB )
    }   
    
}
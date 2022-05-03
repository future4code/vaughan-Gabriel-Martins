import * as bcryptjs from "bcryptjs";


export class HashManager{ 
    public async hash(text: string): Promise<string> { 
       const cost = await bcryptjs.genSalt(Number(process.env.BCRYPTJS_COST))
       return  bcryptjs.hash(text , cost)
    }
    public async compare(text: string , hashDB:string ): Promise<boolean>{ 
       return bcryptjs.compare(text, hashDB )
    }
}
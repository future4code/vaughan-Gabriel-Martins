import  * as bcryptsjs  from "bcryptjs";


export class HarshManager { 
    public async hash(text:string):Promise<string> { 
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcryptsjs.genSalt(rounds)
        return bcryptsjs.hash(text , salt)
    }

    public async compare(text:string, hashDB:string ): Promise<boolean> {
         return bcryptsjs.compare(text, hashDB)

    }

}
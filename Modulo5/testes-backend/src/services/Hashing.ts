import * as bcrypt from "bcryptjs"; 



class HashManager { 
    public hash = async (text: string ): Promise<string> => { 
        const rounds = Number(process.env.BCRY_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(text , salt)
    }
}


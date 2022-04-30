import { createSecretKey } from "crypto";
import * as jwt from "jsonwebtoken";
import { ROLE } from "../types";


export interface Authentication{ 
    id:string, 
    role:ROLE,
}

export class Authenticator { 
    public generate(input:Authentication):string{ 
        const token : string = jwt.sign(input, process.env.JWT_KEY as string,  {
            expiresIn: process.env.EXPIRE_IN,
        });
        return token;
    }

     
    public getTokeData( token: string ): Authentication {

    const data = jwt.verify(token , process.env.JWT_KEY as string )
    return data as Authentication
    }
}

 



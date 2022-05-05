import * as jwt from "jsonwebtoken"; 
import { AuthenticatorPayload } from "../Types/authenticator";
import dotenv from "dotenv";


export class Authenticator { 

    public generator (payload : AuthenticatorPayload){ 
       const token: string  =  jwt.sign(payload , process.env.JWT_KEY  as string, 
            { expiresIn: process.env.JWT_EXPIRES_IN}
         )
       return token; 
    }
    public tokenData (token : string){ 
        const  tokenData = jwt.verify(token , process.env.JWT_KEY as string )
        return tokenData as AuthenticatorPayload;
    }
}

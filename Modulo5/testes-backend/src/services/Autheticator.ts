import * as jwt from "jsonwebtoken";  
import { Authentication } from "../types";



export class Authenticator  { 
    public  tokenGenerator = (payload : string ): string => { 
        const token  = jwt.sign(payload ,  process.env.JWT_KEY as string , { 
            expiresIn: process.env.EXPIRES_IN,
        })
        return token;
    }
    public tokenData = (token : string ):Authentication => { 
        const tokenData  = jwt.verify(token , process.env.JWT_KEY as string  ) 
        return tokenData as Authentication;
    }
}
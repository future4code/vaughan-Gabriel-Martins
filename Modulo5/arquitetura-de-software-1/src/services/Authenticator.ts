import * as jwt from "jsonwebtoken"
import { authenticator } from "../types/autenticatorTypes";



export class Authenticator {

    public generateToken = (input: authenticator): string => {

        const generateToken = jwt.sign(
            input, process.env.JWT_SECRET as string, {
            expiresIn: process.env.JWT_EXPIRESIN
        }
        );
        return generateToken;
    }
    public retrieveDataToken(token: string): authenticator {
        return jwt.verify(token, process.env.JWT_KEY as string) as authenticator
    }
}
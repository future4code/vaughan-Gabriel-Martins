import { UserData } from "../DATA/UserData";
import User from "../Model/user";
import { Authenticator } from "../SERVICES/Authenticator";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";
import { AuthenticatorPayload } from "../Types/authenticator";
import { SignupInputUserDTO } from "../Types/signupInputUserDto";
 

const userData = new UserData()

export class UserBusiness   { 
    public static signup = async (user: SignupInputUserDTO):Promise<string> => { 

        if(!user.email || !user.name || !user.password){
            throw new Error("Uma ou mais entradas não são validas!");
        }
    
        // Checking if email has been used before.
        const [userByEmail] = await userData.userByEmail(user.email)
        if(userByEmail){
            throw new Error("Email já cadastrado!");
         }
        
         // Creating id 
        const id = IdGenerator.generate()
       
        // Hashing password 
        const hash = await HashManager.hash(user.password)

        const payload: AuthenticatorPayload = {id} 
        
        const userDB = new User(
            id,
            user.name,
            user.email,
            hash
            )
            userData.insertUser(userDB)
            
        
            
            const token = Authenticator.generator(payload)
            return token
        }
}
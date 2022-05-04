import { UserData } from "../DATA/UserData";
import User from "../Model/user";
import { Authenticator } from "../SERVICES/Authenticator";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";
import { AuthenticatorPayload } from "../Types/authenticator";
import { loginInputUserDto } from "../Types/loginInputUserDto";
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
        
   
        
            const token = Authenticator.generator(payload)
            return token
        }

    public static login = async (user: loginInputUserDto):Promise<string> => { 

        if(!user.email || !user.password){
            throw new Error("Uma ou mais entradas não são validas!");
        }
    
         // getting user from DB 
        const [userByEmail] = await userData.userByEmail(user.email)

        if(!userByEmail){ 
            throw new Error("Usuario não existe!");
        }
        
        // Comparing password  
        const isPasswordRight  = await HashManager.compare(user.password, userByEmail.password )
        if(!isPasswordRight){ 
        throw new Error("Senha ou usuario estão errados!");
        
        }

        const payload: AuthenticatorPayload = {id: userByEmail.id} 
        
            const token = Authenticator.generator(payload)
            return token
        }
}
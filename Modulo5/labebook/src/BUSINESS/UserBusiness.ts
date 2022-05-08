import { UserData } from "../DATA/UserData";
import UserDBDTO from "../Model/User";
import { Authenticator } from "../SERVICES/Authenticator";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";
import { AuthenticatorPayload } from "../Types/authenticator";
import { LoginInputUserDto } from "../Types/loginInputUserDto";
import { SignupInputUserDTO } from "../Types/signupInputUserDto";
 

export class UserBusiness   { 
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator, 
        private hashManager : HashManager, 
        private authenticator: Authenticator
    ){ }

    public  signup = async (user: SignupInputUserDTO):Promise<string> => { 

        if(!user.email || !user.name || !user.password){
            throw new Error("Uma ou mais entradas não são validas!");
        }
    
        // Checking if email has been used before.
        const [userByEmail] = await this.userData.userByEmail(user.email)
        if(userByEmail){
            throw new Error("Email já cadastrado!");
         }
        
         // Creating id 
        const id = this.idGenerator.generate()
       
        // Hashing password 
        const hash = await this.hashManager.hash(user.password)

        const userDB : UserDBDTO = { 
            id,
            name: user.name,
            email: user.email, 
            password: hash
          }

        await this.userData.insertUser(userDB)
        const payload: AuthenticatorPayload = {id} 
        
            const token = this.authenticator.generator(payload)
            return token
    }
    public  login = async (user: LoginInputUserDto):Promise<string> => { 

        if(!user.email || !user.password){
            throw new Error("Uma ou mais entradas não são validas!");
        }
    
         // getting user from DB 
        const [userByEmail] = await this.userData.userByEmail(user.email)

        if(!userByEmail){ 
            throw new Error("Usuario não existe!");
        }
        
        // Comparing password  
        const isPasswordRight  = await this.hashManager.compare(user.password, userByEmail.password )
        if(!isPasswordRight){ 
        throw new Error("Senha ou usuario estão errados!");
        
        }
        const payload: AuthenticatorPayload = {id: userByEmail.id} 
            const token = this.authenticator.generator(payload)
            return token
    }
}
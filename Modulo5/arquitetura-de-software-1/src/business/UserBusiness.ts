import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticator } from "../types/autenticatorTypes";
import { ROLE, User, UserDB } from "../types/user";


const userDataBase = new UserDataBase();
const idGenerator  = new IdGenerator();
const hashManager = new HashManager();
const authenticator = new Authenticator();

export class UserBusiness { 

    public async signup(user: User): Promise<string>{ 
        
        if(!user.getEmail() || !user.getRole() || !user.getPassword()|| !user.getname()){
            throw new Error("Uma ou mais entradas não é valida");
        }
        
        const hash:string = await hashManager.hash(user.getPassword())
        const id = idGenerator.generator()
        const userDB = new  UserDB(
            id,
            user.getname(),
            user.getEmail(), 
            hash,
            user.getRole()            
        )
        await userDataBase.createUser(userDB)
        
        const input: authenticator = {id , role: user.getRole()} 
        const token = authenticator.generateToken(input)
        return token;

    }
}
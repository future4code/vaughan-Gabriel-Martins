import { hash } from "bcryptjs";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticator } from "../types/autenticatorTypes";
import { ROLE, User, UserDB, userLogin } from "../types/user";


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
    public async login(userLogin : userLogin): Promise<string>{ 
        
        if(!userLogin.email|| !userLogin.password){
            throw new Error("Uma ou mais entradas não é valida");
        }
              
        const [user] = await userDataBase.getUserByEmail(userLogin.email)

        const isValid :boolean = await hashManager.compare(userLogin.password, user.password )
  
        if(!isValid){ 
            throw new Error("Senha invalida!");
            
        }
        const input: authenticator = {id: user.id as string , role: user.role }  
        const token = authenticator.generateToken(input)
        return token;

    }
    public async getAllUser (tokenUser: string | undefined){ 
        
         if(!tokenUser){    
             throw new Error("Token inexistente! ");
             
        }
        authenticator.retrieveDataToken(tokenUser as string)

        const usersDb = await userDataBase.getAllUsers()

        return usersDb;
       

    }

    public async deleteUser( id: string  , token : string ) { 

        const tokenData = authenticator.retrieveDataToken(token)

        if (tokenData.role === "ADMIN"){ 
            throw new Error("Só adminstradores podem deletar users");
            
        }
         
        await userDataBase.deleteUser(id);
        

    }
}
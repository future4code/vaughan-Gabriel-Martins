import { UserDataBase } from "../data/UserDataBase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User, UserDB } from "../types/user";


const userDataBase = new UserDataBase();
const idGenerator  = new IdGenerator();
const hashManager = new HashManager();

export class UserBusiness { 

    public async createUser(user: User){ 
        
        if(!user.getEmail() || !user.getRole() || user.getPassword()|| user.getname()){
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
     const newUserDB = await userDataBase.createUser(userDB)
    }
}
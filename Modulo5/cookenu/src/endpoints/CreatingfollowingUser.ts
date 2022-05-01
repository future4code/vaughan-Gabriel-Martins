import { Request , Response} from "express"
import { SnsDB } from "../data/SnsDB"
import { followingUser } from "../entities/following";
import { Authenticator } from "../services/Authenticator";
import { GeneratorId } from "../services/idGenenator";


export const  CreatingFollowingUser  = async (req : Request , res:Response ):  Promise<void>=> { 
    try {
 
        const followedUserId = req.params.id as string; 
        const token = req.headers.authorization as string; 

        if(!followedUserId || !token) {  
            throw new Error("Entradas invalidas");  // 422
        }
        const authenticator  = new Authenticator(); 
        const tokenData = authenticator.getTokeData(token)
        const fingId = tokenData.id;

    

        const generatorId =  new GeneratorId(); 
        const id = generatorId.generator();
       
        const following = new followingUser(id, fingId, followedUserId)
        const  snsDB = new SnsDB(); 
        await snsDB.followingDB(following)
        res.status(200).send("Seguindo!")
        
    } catch (error:any ) {
        res.status(400).send(error.message)
    }
}

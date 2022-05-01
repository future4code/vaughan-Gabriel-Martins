import { Request , Response} from "express"
import { SnsDB } from "../data/SnsDB"
import { Authenticator } from "../services/Authenticator";



export const  unFollowingUser  = async (req : Request , res:Response ):  Promise<void>=> { 
    try {
        const followedUserId = req.body.followedUserId as string; 
        const token = req.headers.authorization as string; 

        if(!followedUserId || !token) {  
            throw new Error("Entradas invalidas");  // 422
        }
        const authenticator  = new Authenticator(); 
        const tokenData = authenticator.getTokeData(token)
        const followingId = tokenData.id;

        const  snsDB = new SnsDB(); 
        console.log(followedUserId, followingId)
        await snsDB.unfollowingDB( followedUserId, followingId)
        res.status(200).send("Não esta mais seguindo!")
        
    } catch (error:any ) {
        res.status(400).send(error.message)
    }
}

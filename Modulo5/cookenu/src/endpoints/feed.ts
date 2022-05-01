import {Request , Response} from "express"; 
import { feedDB } from "../data/feedDb";
import { Authenticator } from "../services/Authenticator";





export const feed = async (req:Request , res: Response): Promise<void>  => { 
 try {
     const authenticator = new Authenticator(); 
     const token = req.headers.authorization as string;
     const tokenDate  = authenticator.getTokeData(token); 
     const id = tokenDate.id;

     console.log("id", id)


     const feedDb =  new feedDB()
     const result = await feedDb.feedReceitasFollowed(id)
     console.log(result)

     res.send(result)
     
 } catch (error:any) {

    res.status(400).send(error.message)
     
 }






}
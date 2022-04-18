import { Response, Request } from "express";
import dbHistoricoUser from "../Data/dbHistoricoUser";
import { historicoUser } from "../types";




const historicoUser = async(req:Request , res: Response) :Promise<void> =>{
    try{ 
        const userId = req.params.userId as string;
        const result = await dbHistoricoUser(userId)
        if(userId && result.length>0){
             res.status(200).send(result) 
        }else throw new Error("Usuario invalido!")
    }
    catch(e:any){ 
        switch(e.message){ 
          case "Usuario invalido!":
            res.status(400).send(e.message)
            break;
          default: 
            res.status(500).send(e.message)
        }
        
    }

}

export default historicoUser;
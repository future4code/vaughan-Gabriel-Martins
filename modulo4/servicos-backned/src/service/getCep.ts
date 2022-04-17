import { Response, Request } from "express";
import getAddress from "../endpoints/getAddress"





export const getCep =async(req: Request , res:Response): Promise<void> => { 
    try{
    const cep  = req.query.cep as string
    const numero  = req.query.numero as string
    const complemento  = req.query.complemento as string | null
   
    console.log( numero , complemento , cep)
    const result = await getAddress(cep, numero , complemento)
    if(result ){
        res.status(201).send(result)

    } else throw new Error("Cep inexistente");
    }
    catch(e: any){ 
         res.status(422).send(e.message)
    }

}
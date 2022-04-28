import { Request, Response } from "express";
import { GeneratorId } from "../services/idGenenator";
import { inputUserFront } from "../types";



const signup = async (req: Request, res: Response): Promise<void> => {

    const { name, email, password }: inputUserFront = req.body;
    const idGenerate = new GeneratorId();
    const id = idGenerate.generator();
    if(! name || !email || !password ){ 
        res.status(422).send("Um ou mais entradas sao invalidas! ")
    }

}
import { timeLog } from "console";
import { Request, Response } from "express";
import { send } from "process";
import { RecipesDB } from "../data/RecipesDB";
import { Recipes } from "../entities/Recipes";
import { Authenticator } from "../services/Authenticator";
import { GeneratorId } from "../services/idGenenator";


export const creatingRecipes = async (req: Request, res: Response): Promise<void> => {
   try {
       // Creating recipes' id. 
       const idGenenator = new GeneratorId()
       const id = idGenenator.generator()
       
       // Getting front end infomation that includes token 

       const {title, description }:
       {title: string, description: string } = req.body
       const token = req.headers.authorization as string;
       
       if(!token) {
           res.statusCode = 422;
           throw new Error("Token inexistente");  // 422 

       }
        
    // Retrieving information from token. 

     const authenticator = new Authenticator();

    const tokenData = authenticator.getTokeData(token)

    const {id: userId} = tokenData


    // Created Date 
    const createdAt = new Date(Date.now()).toISOString().split("T")[0]

       if (!title || !description) {
           res.statusCode = 422;
           throw new Error("Uma ou mais entradas não são validas");  //422
        }
        
        const creted_at = createdAt;
        const recipe = new Recipes(id, title, description, creted_at , userId  );        
        const recipesDB = new RecipesDB();
        await recipesDB.createRecipe(recipe)

        res.status(201).send("Criado")
        
    } 
    
    catch( error: any) { 
        
        if(res.statusCode === 200) { 
            res.status(500).send(error.message)
        } else { 
            res.send({message: error.message}|| error.sqlMessage)
        }
    }    
        
    }
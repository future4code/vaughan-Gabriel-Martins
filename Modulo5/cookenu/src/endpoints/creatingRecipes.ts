import { timeLog } from "console";
import { Request, Response } from "express";
import { RecipesDB } from "../data/RecipesDB";
import { Recipes } from "../entities/Recipes";
import { GeneratorId } from "../services/idGenenator";


export const creatingRecipes = async (req: Request, res: Response): Promise<void> => {
   try {
       
       const idGenenator = new GeneratorId()
       const id = idGenenator.generator()
       
       const {title, description }:
       {title: string, description: string } = req.body
       const token = req.headers.authorization as string;

       
       if (!title || !description) {
           throw new Error("Uma ou mais entradas não são validas");  //422
        }
        
    
        const recipe = new Recipes(id, user_id, title, description);
        
        const recipesDB = new RecipesDB();
        await recipesDB.createRecipe(recipe)

        res.status(201).send("Criado")
        
    } catch (error:any) {

        res.status(400).send(error.message)
        
    }
        
    }
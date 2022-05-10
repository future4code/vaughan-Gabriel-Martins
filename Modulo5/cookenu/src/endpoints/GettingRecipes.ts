import { Response , Request  } from "express";
import { RecipesDB } from "../data/RecipesDB";


export const gettingRecipeById  =async (req:Request , res:Response ): Promise<void> => { 


    try {
        
        const id = req.params.id; 
        if(!id) { 
            throw new Error("Entrada não valida"); // 422/
        }
        const RecipeDB = new RecipesDB();
        const [recipe] =  await RecipeDB.gettingRecipeById(id)
        if(!recipe){ 
            throw new Error("Esta receita não existe!"); // 422/
        }
        

        res.status(200).send(recipe)  
    } catch (error: any ) {
        
        res.status(400).send(error.message)
    }
    

    

  

}
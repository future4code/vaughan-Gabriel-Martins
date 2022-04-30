import { Recipes } from "../entities/Recipes";
import { BaseDataBase } from "./BaseDataBase";





export class RecipesDB extends BaseDataBase{ 

    public async createRecipe (recipe : Recipes):Promise<void> { 

       try {
          await BaseDataBase.connection("RECEITAS")
                                    .insert(recipe)


           
       } catch (error : any) {

        throw new Error(error.sqlMessage || error.message);
    
           
       }

    }



}
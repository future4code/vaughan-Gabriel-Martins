import { Recipes } from "../entities/Recipes";
import { BaseDataBase } from "./BaseDataBase";



export class RecipesDB extends BaseDataBase {

   public async createRecipe(recipe: Recipes): Promise<void> {
      try {
         await BaseDataBase.connection("RECEITAS")
            .insert(recipe)
      } catch (error: any) {

         throw new Error(error.sqlMessage || error.message);
      }
   }

   public async gettingRecipeById(id: string): Promise<Recipes[]> {
      try {
         const result: Recipes[] = await BaseDataBase.connection("RECEITAS").where({ id }).select()
         return result

      } catch (error: any) {

         throw new Error(error.sqlMessage || error.message);

      }

   }


}
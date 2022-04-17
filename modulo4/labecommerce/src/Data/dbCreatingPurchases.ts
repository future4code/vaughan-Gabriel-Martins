import { connection } from "../connection";
import { purchasesDB } from "../types";



export const dbCreatingPurchases = async (purchases :purchasesDB) :Promise<void> =>{ 
    try{

        const result = 
        await connection("labecommerce_purchases")
        .insert(purchases)
    }
    catch(e:any){ 
        console.log(e.message)
    }
}




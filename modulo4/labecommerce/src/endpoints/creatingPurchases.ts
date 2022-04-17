import { profileEnd } from "console";
import {Request, Response} from "express"; 
import {dbCreatingPurchases} from "../Data/dbCreatingPurchases";
import { dbGetingAllProducts } from "../Data/dbgetingAllProducts";
import { purchasesDB , purchases } from "../types";
import creatingProducts from "./creatingProducts";
import { creatingUser } from "./creatingUser";



const creatingPurchases = async (req: Request , res: Response): Promise<void> =>{ 
    try{

        const{userId , productId, quantity } = req.body
        
        console.log(productId, userId , quantity)
        
        let  getPrices = await dbGetingAllProducts()
        
        let totalPrice = (getPrices.filter(item => {if(item.id === productId) return true}).map(item => item.price * Number(quantity)))[0]
        
        const id = Date.now().toString();
        const purchasesDB: purchasesDB =
        {id ,user_id : userId, product_id: productId, quantity , total_price: totalPrice }
        
        const result = await dbCreatingPurchases(purchasesDB);
        
        res.status(201).end()
        
    }catch(e: any){ 
        res.status(400).send(e.message)
    }
    

}

 export default creatingPurchases;
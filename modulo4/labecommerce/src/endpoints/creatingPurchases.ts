import { profileEnd } from "console";
import { Request, Response } from "express";
import { dbCreatingPurchases } from "../Data/dbCreatingPurchases";
import { dbGetingAllProducts } from "../Data/dbgetingAllProducts";
import { purchasesDB, purchases } from "../types";
import creatingProducts from "./creatingProducts";
import { creatingUser } from "./creatingUser";



const creatingPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, productId, quantity } :
         { userId : string , productId : string , quantity : number } 
           = req.body  

        console.log(userId, productId, quantity)
        if (userId && productId && quantity) {
            console.log(productId, userId, quantity)
            // pegando o preco  do banco de dados da tabela de produtos 
            let getPrices = await dbGetingAllProducts()
            let totalPrice = (getPrices
                .filter(item => { if (item.id === productId) return true })
                .map(item => item.price * Number(quantity)))[0]

            // fazendo o id 
            const id = Date.now().toString();
            // populando a tabela 
            const purchasesDB: purchasesDB =
                { id, user_id: userId, product_id: productId, quantity, total_price: totalPrice }
            const result = await dbCreatingPurchases(purchasesDB);
            res.status(201).end()
        } else throw new Error("Uma ou mais entradas invalidas!")
    } catch (e: any) {
        switch (e.message) {
            case "Uma ou mais entradas invalidas!":
                res.status(400).send(e.message)
                break;
            default:
                res.status(500).send(e.message)
        }
    }


}

export default creatingPurchases;
import { Request, Response } from "express";
import dbInsertProducts from "../Data/dbinsertingProducts";
import { product } from "../types";






const creatingProducts = (req: Request, res: Response) => {

    try {
        const { name, price, imageUrl }:
            { name: string, price: number, imageUrl: string } = req.body
        if (name && price && imageUrl && typeof price === "number" && typeof imageUrl === "string" && typeof name === "string") {
            const id = Date.now().toString()
            const product: product = { id, name, price, imageUrl }
            const result = dbInsertProducts(product);
            res.status(201).end("criado")
        }
    }
    catch (error: any) {
        res.status(400).send(error.message);
    }




}

export default creatingProducts
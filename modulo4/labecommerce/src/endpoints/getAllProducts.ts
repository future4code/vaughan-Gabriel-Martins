import { Request, Response } from "express"
import { dbGetingAllProducts } from "../Data/dbgetingAllProducts";


export async function getgetingAllProducts(req: Request, res: Response): Promise<void> {

  const response = await dbGetingAllProducts()
  res.send(response)
}


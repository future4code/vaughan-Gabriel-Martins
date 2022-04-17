
import { product, productDB } from "../types";
import { connection } from "../connection"

export const dbGetingAllProducts = async (): Promise<productDB[]> => {
    const response =
        await connection(`labecommerce_products`)
            .select("*")
    console.log(response)
    return response
}



import { connection } from "../connection";
import { product, productDB } from "../types";



const dbInsertProducts = async (product: product): Promise<number[] | undefined> => {
    try {
        let productDB: productDB = {
            id: product.id,
            name: product.name,
            price: product.price,
            image_url: product.imageUrl
        }

        console.table(productDB)
        const result = await connection("labecommerce_products")
            .insert(productDB);
        return result
    }
    catch (e: any) {
        console.log(e.message)
    }
}

export default dbInsertProducts;
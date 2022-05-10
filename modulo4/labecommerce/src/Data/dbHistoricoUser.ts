import { connection } from "../connection";
import { dbHistoricoUser, historicoUser } from "../types";




const dbHistoricoUser =async (id:string) =>  {

    //  const resultDb: dbHistoricoUser[] = 
     const resultDb = 
        await connection("labecommerce_purchases")
        .join("labecommerce_users" ,`user_id`,`labecommerce_users.id`)
        .join("labecommerce_products","product_id","labecommerce_products.id")
        .where(`labecommerce_users.id`,`${id}`)
        .select(`labecommerce_users.id as  user_id` , `product_id`, `quantity`, 
        `labecommerce_users.name as user_name`, 
        `labecommerce_products.name as products_name`, `email`, `image_url`,
        `price` , `password`

        )


        // console.table(resultDb)

        const result
            // historicoUser[] =  resultDb.map(item => {
             =  resultDb.map(item => {

               return { 
                    userId :item.user_id ,
                    productId:item.product_id ,
                    quantity : item.quantity,
                    userName: item.user_name,
                    productsName: item.products_name,
                    email: item.email,
                    password: item.password , 
                    price: item.price ,
                    imageUrl: item.image_url
                }
                    
                })

        // console.table(result)
   
   return(result)
 }


export default dbHistoricoUser;
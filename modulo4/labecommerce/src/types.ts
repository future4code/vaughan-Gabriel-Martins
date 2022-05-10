
export type users = {
    id: string,
    name: string,
    email: string,
    password: string,
}
export type product = {
    id: string,
    name: string,
    price: number,
    imageUrl: string
}
export type productDB = {
    id: string,
    name: string,
    price: number,
    image_url: string
}
export type purchases = {
    id: string,
    userId: string,
    productId: string,
    quantity: number, 
    totalPrice: number 
}
export type purchasesDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number, 
    total_price: number 
}
export type dbHistoricoUser  = { 
    id:string,
    user_id:string,
    product_id:string,
    quantity:number,
    name: string,
    email: string,
    password: string, 
    price: number,
    image_url: string
}
export type historicoUser  = { 
    id:string,
    userId:string,
    productId:string,
    quantity:number,
    name: string,
    email: string,
    password: string, 
    price: number,
    imageUrl: string
}

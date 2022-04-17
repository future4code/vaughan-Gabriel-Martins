
import { users } from "../types";
import { connection } from "../connection"

export const allUser = async (): Promise<users[]> => {
    const response =
        await connection(`labecommerce_users`)
            .select("*")
    console.log(response)
    return response
}



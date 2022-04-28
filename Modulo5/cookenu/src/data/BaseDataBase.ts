import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase {  
    
    connection: Knex = knex({
     client: "mysql",
    connection: {

        host: process.env.DB_HOST,
        port: 3006,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATA,
        multipleStatements: true,

    }
})
}
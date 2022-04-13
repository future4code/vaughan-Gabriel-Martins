console.log("teste1");
import express ,{Response , Request} from "express"; 
import cors from "cors"; 
import knex from "knex";
import dotenv from 'dotenv';


const app = express(); 
app.use(express.json());
app.use(cors());

dotenv.config();



export const connection = knex({
    client:"mysql",
    connection:{
        host:process.env.DB_HOST,
        port: 3306,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME,
        multipleStatements: true
    }
});


const server = app.listen(3003, ()=>{
    console.log("server is running")
})
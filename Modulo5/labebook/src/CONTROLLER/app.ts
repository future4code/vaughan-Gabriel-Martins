import express, { Express } from "express";
import cors from "cors";
import { Router } from "express";



export const app: Express = express();


app.use(express.json());
app.use(cors());


app.listen(3003 , ()=> { 
    console.log("Server is runnning at 3003")
})
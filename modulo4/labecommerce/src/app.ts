import express, { Express, Response, Request } from "express";
import cors from "cors";


const app: Express = express();



app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    console.log("Server is running")
})
export default app;


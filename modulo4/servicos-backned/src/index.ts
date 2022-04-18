import express , {Express} from "express"; 
import cors from "cors";
import dotenv, { config } from "dotenv";
import {getCep} from "./service/getCep";
import {AddressInfo} from "net";
import getAddress from "./endpoints/getAddress";



dotenv.config()


const app:Express = express()

app.use(express.json());
app.use(cors());



app.get("/address" ,getCep)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});



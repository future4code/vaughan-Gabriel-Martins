import express , { Express} from "express"; 
import cors from "cors"; 



const app = express();


app.use(express.json())
app.use(cors());

app.listen(3003 , ()=> { 
    console.log("Server is running at port 3003")
})




import express , {Response, Request, response }from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import knex from "knex";
import { getImpliedNodeFormatForFile } from "typescript";


dotenv.config();

const app = express()

app.use(express.json()); 
app.use(cors());


const connection =knex({
client: "mysql", 
connection:{
    host:process.env.DB_HOST, 
    port: 3306,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    database: process.env.DB_SCHEMA,
}
})


// const getActorById = async (name: string) =>{ 
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
// `)
// return result [0][0]
// }


// getActorById("Gabriel Martins")
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
//     console.log(err)
// });



console.log("teste1")

// CREATE USER 
app.post("/user", (req: Request , res:Response)=>{
    const {name , nickname , email} = req.body;
    const id = (Date.now().toString())
    console.log( id)

    res.status(200).send({ "id":id, name, email ,nickname})
})

// GETTING USER BY ID 

app.get("/user/:id", (req:Request, res:Response)=> { 
    const id = req.params.id; 

    res.status(200).send(id);
})

// Editting user 

app.put("/user/edit/:id", (req: Request  , res:Response )=> { 
    const id = req.params.id;
    const name = "Astro"; 
    const nickname = "SuperAstro"
    res.send({name , nickname})
})


// Creating task 
type task ={title:String , description:String, limitDate:String, creatorUserId:String }

app.post("/task"  , (req: Request, res:Response) =>{
const {title , description, limitDate, creatorUserId}: task= req.body
  res.status(201).send({title, description, limitDate, creatorUserId})
})

const server  = app.listen(3003 , ()=> { 
    console.log("server is running")
})

// Getting task by Id 

app.get("/task/:id" ,(req: Request , res:Response)=>{ 
    const id = req.params.id;
    res.send(id);

})
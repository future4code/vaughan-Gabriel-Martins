
import express, { Response, Request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";
import { getImpliedNodeFormatForFile } from "typescript";


dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());


const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    }
});


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



//1  CREATTING AN USER 
type body1 = { name: string, nickname: string, email: string }

app.post("/user", (req: Request, res: Response) => {
    try {
        const { name, nickname, email }: body1 = req.body;
        if (!name || !nickname || !email) {
            throw new Error("Um ou mais entradas está vazia")
        }
        if (typeof name === "string" || typeof email === "string" || typeof nickname === "string") {
            throw new Error("Um ou mais entradas não são validas")
        }
        const id: string = (Date.now().toString())
        res.status(200).send({ "id": id, name, email, nickname })
    }
    catch (e: any) {
        switch (e.message) {
            case "Um ou mais entradas está vazia":
                res.status(422).send(e.message);
                break;
            case "Um ou mais entradas não são validas":
                res.status(406).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        }
    }
})

//2 GETTING USER BY ID 

const getUserById = async (id: string): Promise<any> => {
    const result = await connection("TodoListUser")
        .select("*")
        .where({ id })

    return result;
}

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await getUserById(id)
        console.log("result", result)
        if (result.length > 0) {
            res.status(200).send(result);
        } else throw new Error("Este usuario não existe!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Este usuario não existe!":
                res.status(400).send(e.message)
                break;
            default:
                res.status(500).send(e.message);
        }
    }
}
)



//3 Editting user 
const changeUserNameNickName = async (id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection("TodoListUser")
        .where("id", '=', id)
        .update({
            "name": name,
            "nickname": nickname
        })
    return result;
}

type body2 = { name: string, nickname: string }

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { name, nickname }: body2 = req.body;
        // const nickname = "SuperAstro"
        const result = await changeUserNameNickName(id, name, nickname)
        if (result === 0) {
            throw new Error("It didn't update it")
        } else res.status(201).send("Changed")
    } catch (e: any) {
        switch(e.message){ 
            case "It didn't update it":
                res.status(201).send(e.message);
                break;
            default: 
                res.status(500).send(e.message)
                
        }


    }
}
)





// Creating task 
type task = { title: String, description: String, limitDate: String, creatorUserId: String }

app.post("/task", (req: Request, res: Response) => {
    const { title, description, limitDate, creatorUserId }: task = req.body
    res.status(201).send({ title, description, limitDate, creatorUserId })
})

const server = app.listen(3003, () => {
    console.log("****server is running *****")
    console.log("****** to do list ******")
})

// Getting task by Id 

console.log("teste2")

const getuserbyid = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from("TodoListUser")
        .where({ id: id })

    return result;
}
const ver = async () => {
    const result = await getuserbyid("001")
    console.log(result)
}

app.get("/task/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(id);
})


import express, { Response, Request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";
import { idText, isTemplateExpression } from "typescript";

// post man https://documenter.getpostman.com/view/19294726/UVyysssD  

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

// https://documenter.getpostman.com/view/19294726/UVyysssD

//1  CREATING AN USER 
type body1 = { name: string, nickname: string, email: string }

const creatingUser = async (id: string, name: string, nickname: string, email: string): Promise<any> => {
    const result = await connection("TodoListUser")
        .insert({ id, name, nickname, email })

    return result;

}

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email }: body1 = req.body;
        if (!name || !nickname || !email) {
            throw new Error("Um ou mais entradas está vazia")
        }
        if (typeof name !== "string" || typeof email !== "string" || typeof nickname !== "string") {
            throw new Error("Um ou mais entradas não são validas")
        }
        const id: string = (Date.now().toString())
        const resultCreating = await creatingUser(id, name, nickname, email)
        const resultUserId = await getUserById(id);
        // res.status(200).send({ "id": id, name, email, nickname })
        res.status(200).send(resultUserId)
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
        const { name, nickname }: body2 = req.body;
        const id = req.params.id;
        if (name && nickname) {
            const result = await changeUserNameNickName(id, name, nickname)
            if (result === 0) {
                throw new Error("It didn't update it, id not found!")
            } else res.status(201).send("Changed")
        } else throw new Error("Uma das entradas não é valida!")

    } catch (e: any) {
        switch (e.message) {
            case "It didn't update it, id not found!":
                res.status(400).send(e.message);
                break;
            case "It didn't update it":
                res.status(422).send(e.message);
                break;
            default:
                res.status(500).send(e.message)
        }
    }
}
)


//4  Creating task 
type task = { title: string, description: string, limitDate: string, creatorUserId: string }

// Funcao de criação de task no Banco de dados. 
const creatingTask = async (id: string, title: string, description: string, limitDate: string, creatorUserId: string)
    : Promise<any> => {
    const result =
        await connection("TodoListTask")
            .insert({
                id: id,
                "Title": title,
                "Description": description,
                "Limit_date": limitDate,
                "Creator_user_id": creatorUserId
            })
    return result;
}

app.post("/task", async (req: Request, res: Response) => {

    try {
        const { title, description, limitDate, creatorUserId }: task = req.body;
        if (title && description && limitDate && creatorUserId) {

            //Convertendo a data para o banco de dados.
            const limiteDateFormated = limitDate.split("/").reverse().join("-");

            // Criando um id unica a partir da data atual e transformando em string por causa do "type" do id. 
            const id: string = Date.now().toString();

            // Criado a task no banco de dados usando a funcao creatingTask  
            const result1 = await creatingTask(id, title, description, limiteDateFormated, creatorUserId);

            // Chamei a funcao d getting task by id para mandar a nova task de volta na API.
            // Sei que nao foi pedido mas so mandando para comecar a ter uma maior overview. 
            const result2 = await getTaskbyId(id)

            res.status(201).send(result2[0])
        } else throw new Error("Uma ou mais entradas não são validas");

    }
    catch (e: any) {
        switch (e.message) {
            case "Uma ou mais entradas não são validas":
                res.status(422).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        }

    }
})

// 5 Getting task by Id 
const getTaskbyId = async (id: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from("TodoListTask")
        .where({ id: id })
    return result;
}

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await getTaskbyId(id);

        if (id && result.length > 0) {
            res.status(200).send(result[0]);
        } else throw new Error("Esta id não foi encontada!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Esta id não foi encontada!":
                res.status(400).send(e.message)
                break;
            default:
                res.status(500).send(e.message)
        }
    }
})


//  *** Desafios 

/// Exercicio 6   lembre de comentar o exercicio 2 pois o url eh users/:id  
// este app.get teria que vir antes dele mas coloquei aqui para seguir a ordem 
// cronologica da lista. 

// Pegandando todos os usuarios 
const getAllUser = async (): Promise<any> => {
    const result = await connection("TodoListUserEmptyForTest")
        .select("id", "nickname")
    return result;
}

//

app.get("/user/all", async (req: Request, res: Response) => {
    const result = await getAllUser();

    if (result.length > 0) {
        res.send({ users: result })
        // Pelo que eu entendi quer um array  []   e se fosse so {users : []} 
        // eu nao colocaria o if.   assim fica so o "[]" 
    } else res.send([]);
})



//  7 Pegar todas a tarefas criadas por um usuario 

// Pegando os dados do Banco de dados  da tabela de usuario  "TodoListerUser"
const getAllTaskbyUser = async (id: string): Promise<any> => {
    const result =
        await connection("TodoListTask")
            .select(
                "TodoListUser.id",  // Colocando a tabela pos tem  id na outra tabela que juntamos
                "title",
                "description",
                "status",
                "limit_date",
                "creator_user_id",
                { "creatorUserNickname": "nickname" }
            ).join("TodoListUser", "creator_user_id", "TodoListUser.id")
            .where("creator_user_id", "=", id)

    return result;
}

// Usuarios cadastrados 
// 1649570635804 nickname :dev  
// 1649570763679 zeze
//001 d


type arrayOut = {
    id: string
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: string
    creatorUserNickname: string
}

app.get("/task", async (req: Request, res: Response) => {
    try {
        const id = req.query.creatorUserId as string;

        const result: arrayOut[] = await getAllTaskbyUser(id);
        if (result.length > 0) {
            const arrayOut: arrayOut[] =
                result.map(item => {
                    return { ...item, "limit_date": new Date(item.limit_date).toLocaleDateString() }
                })
            res.status(200).send(arrayOut);
        } else throw new Error("Usuario não encontrado!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Usuario não encontrado!":
                res.status(400).send(e.message);
                break;
            default:
                res.status(500).send(e.message)
        }
    }
})


//  8 Pesquisar usuário 


const getNicknameEmailbyQuery = async (query: string): Promise<any> => {
    const result
        = await connection("TodoListUser")
            .select(
                "id",
                "nickname"
            )
            .where("nickname", "like", `%${query}%`)
            .orWhereLike("email", `%${query}%`);
    return result;

}

app.get(("/user"), async (req: Request, res: Response) => {
    try {
        const tester = req.query.query;
        if (tester && typeof tester === "string") {

            const query = req.query.query as string;
            const result = await getNicknameEmailbyQuery(query)
            res.status(200).send(result);
        } else throw new Error("Entrada invalida!")

    }
    catch (e: any) {
        switch (e.message) {
            case "Entrada invalida!":
                res.status(400).send(e.message)
                break;
            default:
                res.status(500).send(e.message);
        }
    }
})

// 9 Atribuir um usuario responsavel a um tarefa. 


// Populei o banco de dados com  a tablela TodoListResponsibleUserIdTaskId 
// Tabela para ajudar na  M:N 
//  User id ***  Task id 
// ('001','1649560975482'  ),
// ('001','1649576952156' ),
// ('1649584141492','1649560243173' ),
// ('1649584141492','1649576952156' ),
// ('1649584041374','1649560243173' ),
// ('1649584041374','1649560975482' ), 
// ('1649570635804','1649576952156' ),
// (1649570635804, 1649561592504);

// Na verdade nao preciso mto deste retorno já q é somente [0] ou nada
// mas colocando para treinar o use de async e await e acho que tb vou usar o 
// retorno na api somente pra mostrar um ok ou algo do genero.
const signTaskByUserId = async (taskId: string, userId: string): Promise<any> => {
    const result = await connection("TodoListResponsibleUserIdTaskId")
        .insert([{ "task_id": taskId, "responsible_user_id": userId }])

    return result
}


type ex9type = { taskId: string, userId: string }

app.post("/task/responsible", async (req: Request, res: Response): Promise<void> => {
    try {
        const { taskId, userId }: ex9type = req.body;

        if (taskId && userId) {
            // a variavel result for um [0] significa que foi alterado no banco de dados 
            // const result = await signTaskByUserId( taskId  , userId ) 
            await signTaskByUserId(taskId, userId)
            res.status(201).send("Criado")
        } else throw new Error("Uma ou mais entradas não são validas!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Uma ou mais entradas não são validas!":
                res.status(400).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        }
    }
})


// 10. Pegar usuários responsáveis por uma tarefa

const getSignedUserToTaskById = async (taskId: string): Promise<any> => {
    const result =
        await connection("TodoListResponsibleUserIdTaskId")
            .join("TodoListUser", "TodoListUser.id", "responsible_user_id")
            .select("id", "nickname")
            .where("task_id", "=", taskId)

    return result;

}


app.get("/task/:id/responsible", async (req: Request, res: Response) => {
    try {// Não preciso testar para vazio pois daria erro 404 e endereço nao existente.
        const tester = req.params.id
        if (tester !== "" && tester) {
            const taskId = req.params.id as string;
            const result = await getSignedUserToTaskById(taskId);
            if (result.length > 0) {
                res.status(200).send({ users: result })
            } else throw new Error("Task não encontrada!")
        } else throw new Error("Entrada vazia!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Entrada vazia!":
                res.status(400).send(e.message);
                break;
            case "Task não encontrada!":
                res.status(422).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        }
    }
})

// 11. Pegar tarefa pelo id



const getTaskbyId11 = async (id: string): Promise<any> => {
    const result = await connection("TodoListResponsibleUserIdTaskId")
        .join("TodoListUser", "responsible_user_id", "TodoListUser.id")
        .join("TodoListTask", "TodoListTask.id", "task_id")
        .where("task_id", "=", id)

    return result;
}

// Get endpoint do numero 5  commentar para o exercicio 5
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        let result: any[] = await getTaskbyId11(id);
        if (id && result.length > 0) {
            const resultado = result.map(item => {
                return {
                    ...item, limit_date: item.limit_date.toLocaleDateString()
                    , responsible_user_id: [{ id: item.id, nickname: item.nickname }]
                }
            })
            res.status(200).send(resultado);
        } else throw new Error("Esta id não foi encontada!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Esta id não foi encontada!":
                res.status(400).send(e.message)
                break;
            default:
                res.status(500).send(e.message)
        }
    }
})


// 12. Atualizar o status da tarefa pelo id 

// mdoficando o status 
const chagingTaskStatusbyId = async (taskId: string, status: string): Promise<void> => {
    const result =
        await connection("TodoListTask")
            .where("id", taskId)
            .update("status", status)
            .select("id", "status")


}


app.put("/task/status/:id/", async (req: Request, res: Response): Promise<void> => {
    try {

        const id: string = req.params.id;
        const status: string = req.body.status;
        if (id && status && id != "" && status != "") {
            // chamando a funcao entrando com id da task e o status desejado. 
            const result = chagingTaskStatusbyId(id, status)
            res.status(201).end();
        } else throw new Error("Uma ou mais entradas não são validas!")
    }
    catch (e: any) {
        switch (e.message) {
            case "Uma ou mais entradas não são validas!":
                res.status(400).send(e.message)
                break;
            default:
                res.status(500).send(e.message)
        }
    }
})

// 13. Pegar todas as tarefas por status 
// commentar exercicio 7 

const getAllTaskbyStatus = async (status: string): Promise<any> => {
    const result = await connection("TodoListResponsibleUserIdTaskId")
        .join("TodoListUser", "responsible_user_id", "TodoListUser.id")
        .join("TodoListTask", "TodoListTask.id", "task_id")
        .where("status", "=", status)
        .select(
            "task_id as  taskId",
            "title",
            "description",
            "limit_date as limitDate",
            "creator_user_id as creatorUserId",
            "nickname as creatorUserNickname"
        )

    return result;


}

// commentar o exercicio 7  pois tem o mesmo endpoint 

app.get(("/task"), async (req: Request, res: Response): Promise<any> => {
    try {

        const status = req.query.status as string;
        if (status) {

            let result: any[] = await getAllTaskbyStatus(status)
            result = result.map(item => { return ({ ...item, limitDate: item.limitDate.toLocaleDateString() }) })
            res.send({ tasks: result });
        } else throw new Error("Não é um status valido!");
    }
    catch (e: any) {
        switch (e.message) {
            case "Não é um status valido!":
                res.status(422).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        }
    }
})






// Server 
const server = app.listen(3003, () => {
    console.log("****server is running *****")
    console.log("****** to do list ******")
})
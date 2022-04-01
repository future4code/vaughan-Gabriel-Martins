// -Exercício 1
//     Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
//     - Lista de usuários




import express, { Request, Response } from "express";
import cors from "cors";
import { send } from "process";
const port = 3003;


const app = express();

app.use(express.json())
app.use(cors())


// a). Qual método HTTP você deve utilizar para isso? 

//   ****  CRUD   *****
// b). Como você indicaria a entidade que está sendo manipulada?

//*****  "/users " 


// - **Exercício 2**

//     Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade 
//     `type` específica, recebendo apenas um `type` por vez. Após isso, responda:

enum uType { ADMIN = "ADMIN", NORMAL = "NORMAL" }

type users = {
    id: number,
    name: string,
    email: string,
    type: uType,
    age: number
}


let users: users[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: uType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: uType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: uType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: uType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: uType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: uType.ADMIN,
        age: 60
    }
]


//     a. Como você passou os parâmetros de type para a requisição? Por quê?

//  Passei usando o query para pequisar se tinha normal ou admin.

//     b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

// usei try e catch alem de um if comprando as entrada com a string .toLowerCase() . 

app.get(("/users"), (req: Request, res: Response) => {

    try {
        let type: string = req.query.type as string
        type = type.toLowerCase().trim()

        // if(type==="admin" || type ==="normal"  ){
        if (type === "normal" || type === "admin") {
            // Usei o query para pesquisar se existia ou nao e devolver 
            res.status(200).send(users.filter(item => {
                console.log(item.type, req.query.type)
                return item.type.toLowerCase() === type
            }))
        }
        throw new Error("type invalido")
    }
    catch (error: any) {
        switch (error.message) {
            case "type invalido":
                res.status(400).send(error.message)
                break;
            default:
                res.status(500).send(error.message)
        }
    }
})

// - **Exercício 3**

//     Vamos agora praticar o uso de buscas mais variáveis. 
//     Faça agora um endpoint de busca que encontre um usuário buscando por nome

//     a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?

// Eu queria fazer de novo pelo query posi eh um pesquisa mas nao da pois ja foi usado no exercicio2
// entào vou usar o params name 

//     b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum 
//     usuário tenha sido encontrado.

app.get("/users/:name", (req: Request, res: Response) => {
    try {
        const name = req.params.name as string
        const namefiltered = users.filter(item => item.name.toLowerCase() === name.toLowerCase())
        if (namefiltered.length <= 0) {
            throw new Error("Usuario não existe")
        }
        res.status(200).send(users.filter(item => item.name.toLowerCase() === name.toLowerCase()))

    }

    catch (e: any) {

        res.status(400).send(e.message)

    }
})



// - **Exercício 4**

//  Fizemos algumas buscas no nosso conjunto de itens, agora é hora de
//  **adicionar** coisas. 

//  Comecemos criando um usuário na nossa lista.
//  Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.


app.post("/users", (req: Request, res: Response) => {
try { 

    const { name , type, email , age } = req.body  
    if(!name|| !type|| !email || !age  ){
        throw new Error("Olhar os inputs!")
    }
    const newUsers: users[] =  ([...users ,{  id: Date.now() , ...req.body   }])
    res.status(201).send(newUsers)
}
catch(e:any ){ 

    switch(e.message){ 
        case "Olhe os inputs!" : 
            res.status(400).send(e.message)
            break;
        default: 
            res.status(500).send(e.message)
    }

}
 

//    res.status(201).send( users.push(body))

})

//     a. Mude o método do endpoint para `PUT`. O que mudou?


// Nada parece ter mudado. 

app.put( "/users" , ( req:Request , res:Response) => { 
  try{ 
    const { name , type, email , age } = req.body  
    console.log("exercicio 5")
   
    if(!name|| !type|| !email || !age  ){
        throw new Error("Olhar  inputs!")
    }

    const newUsers1: users[] =  ([...users ,{  id: Date.now() , ...req.body   }])
    res.status(201).send(newUsers1)

  }
  catch(e:any){ 

  }

}

)



//     b. Você considera o método `PUT` apropriado para esta transação? Por quê?

// Pois estamos fazendo uma alteração em um array existente.  por isso eh mais apropriado. 



app.listen(port, () => {
    console.log("The server is running at :", port)
})
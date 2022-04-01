// -Exercício 1
//     Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
//     - Lista de usuários



        
        import express , { Request , Response} from "express";
        import cors from "cors";
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

enum uType  { ADMIN = "ADMIN", NORMAL = "NORMAL"   }

type users  =  {
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

app.get(("/users"), (req : Request , res: Response)=>{
    try{
        let type:string = req.query.type as string 
        type =type.toLowerCase().trim()
    
        // if(type==="admin" || type ==="normal"  ){
        if(type ==="normal"  || type === "admin"){
            // Usei o query para pesquisar se existia ou nao e devolver 
            res.send( users.filter(item => {
                console.log(item.type ,req.query.type )
                return  item.type.toLowerCase() === type
            }))
        }
        throw new Error("type invalido")

    } 
    catch(error: any){
        switch(error.message){
            case "type invalido": 
                res.status(400).send(error.message)
                break; 
            default:
                res.status(500).send(error.message)
        }

    }



})
    
    






app.listen(port, () => {
    console.log( "The server is running at :", port)
})
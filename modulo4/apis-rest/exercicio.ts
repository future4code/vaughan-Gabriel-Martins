// -Exercício 1
//     Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
//     - Lista de usuários
        let users = [
            {
                id: 1,
                name: "Alice",
                email: "alice@email.com",
                type: "ADMIN",
                age: 12
            },
            {
                id: 2,
                name: "Bob",
                email: "bob@email.com",
                type: "NORMAL",
                age: 36
            },
            {
                id: 3,
                name: "Coragem",
                email: "coragem@email.com",
                type: "NORMAL",
                age: 21
            },
            {
                id: 4,
                name: "Dory",
                email: "dory@email.com",
                type: "NORMAL",
                age: 17
            },
            {
                id: 5,
                name: "Elsa",
                email: "elsa@email.com",
                type: "ADMIN",
                age: 17
            },
            {
                id: 6,
                name: "Fred",
                email: "fred@email.com",
                type: "ADMIN",
                age: 60
            }
        ]
// a). Qual método HTTP você deve utilizar para isso? 

//   ****  CRUD   *****
// b). Como você indicaria a **entidade** que está sendo manipulada?

//*****    */  " /users   " 

// - **Exercício 2**
    
//     Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade 
//     `type` específica, recebendo apenas um `type` por vez. Após isso, responda:
    
//     a. Como você passou os parâmetros de type para a requisição? Por quê?
    
//     b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

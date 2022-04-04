import express from "express";

//Exercício 2   
// Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
// Popule manualmente o array com pelo menos 3 produtos.
import { data } from "./data"
import { exec } from "child_process";
import { error } from "console";


const app = express();
app.use(express.json());
const gate = 3003;




// Exercício 1
// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint 
// de teste com método `**GET`** no path **`“/test”`** que retorna uma mensagem genérica 
// avisando que a API está funcional.

app.get(("/test"), (req, res) => {
    res.send(`A api ta funcionando`)
})

//Exercicio2 

// app.get(("/products"), (req , res )=>{
//     res.status(200).send(data)
// })

// - Exercício 3

// Desenvolva um endpoint que **cria um novo produto** e 
// retorna a lista de produtos atualizada.
// A id do produto deve ser gerada automaticamente pela API.


app.post(("/products"), (req, res) => {
    const arrayData = [...data, { id: Date.now(), ...req.body }]
    res.status(201).send(arrayData)
})


// - Exercício 4

//     Crie um endpoint que **retorna todos os produtos**.

app.get(("/products"), (req, res) => {
    res.status(200).send(data)

})

// - Exercício 5


// Crie um endpoint que **edita** **o preço de** 
// **um determinado produto** e retorna a lista de produtos atualizada.

app.put(("/products"), (req, res) => {

    const dataPriceChanges = data.map(item => {
        if (Number(item.id) === req.body.id) {
            return { ...item, price: req.body.price }
        } else return item

    })

    res.send(dataPriceChanges)
})


// Exercicos 6
app.delete(("/products"), (req, res) => {
    const datafiltered = data.filter(item => !(Number(item.id) === req.body.id))

    res.status(201).send(datafiltered)
})



// - Exercício 7

//     Refatore o endpoint do exercício 3 (criar produto) para que sejam 
// implementados fluxos de validação dos dados recebidos (`name` e `price`)

app.post(("/produtos"), (req, res) => {
    try {
        //  erro caso um ou nenhum deles forem recebidos
        if (req.body.price === '' || req.body.name === '') {
            console.log(req.body.price, req.body.name)
            throw Error("Não recebi preço ou/e nome do produto")
        }
        //   erro caso `name` seja diferente de `string`
        if (typeof req.body.name !== "string") {
            throw Error("Não esta é um formato valido 'não é string' ")
        }
        //     - erro caso `price` seja diferente de `number`
        if (typeof req.body.price !== "number") {
            throw Error("Não esta é um formato valido 'não é um numero' ")
        }
        //     - erro caso `price` seja igual ou menor que `0`
        if (req.body.price <= 0) {
            throw Error("Preço invalido")
        }
    }

    //     - erro caso algo inesperado aconteça  
    // O catch vai pegar outros erros. 
    catch (error: any) {
        switch (error.message) {
            case "Não esta é um formato valido 'não é string' ":
            case "Não esta é um formato valido 'não é um numero' ":
            case "Não recebi preço ou/e nome do produto":
            case "Preço invalido":
                res.status(422).send(error.message)
                break;
            default:
                res.status(500).send(error.message)

        }

    }


    const arrayData = [...data, { id: Date.now(), ...req.body }]
    res.status(201).send(arrayData)
})

// - Exercício 8

// Refatore o endpoint do exercício 5 (editar produto) 
// para que sejam implementados fluxos de validação dos dados recebidos (`price`)

// { para nao ter conflito com a questao 5 mudei o url para produtos }

app.put(("/produtos"), (req, res) => {
    // - erro caso algo inesperado aconteça

    try {
        // - erro caso `price` não seja recebido
        if (!req.body.price) {
            throw Error("Preço inexistente")
        }
        // - erro caso `price` seja diferente de `number`
        if (typeof req.body.price !== "number") {
            throw Error("Preço não é um numero")
        }
        // - erro caso `price` seja igual ou menor que `0`
        if (req.body.price <= 0) {
            throw Error("Preço menor ou igual a 0. ")
        }
        // - erro caso o produto a ser editado não seja encontrado       
        const id = ((req.body.id).toString())

        if (data.filter(item => item.id === id).length === 0) {
            throw Error("Produto não encontrado")
        }

        const dataPriceChanges = data.map(item => {
            if (Number(item.id) === req.body.id) {
                return { ...item, price: req.body.price }
            } else return item
        })



        res.send(dataPriceChanges)
    }
    catch (error: any) {
        switch (error.message) {
            case "Preço inexistente":
                res.status(409).send(error.message)
                break;
            case "Preço não é um numero":
                res.status(400).send(error.message)
                break;
            case "Produto não encontrado":
                res.status(400).send(error.message)
                break;
            case "Preço menor ou igual a 0. ":
                res.status(42).send(error.message)
                break;
            default:
                res.send(error.message)

        }


    }


})




// app.delete(("/products"), (req, res) => {
//     const datafiltered = data.filter(item => !(Number(item.id) === req.body.id))

//     res.status(201).send(datafiltered)
// })


// - Exercício 9
    
// Refatore o endpoint do exercício 6 (deletar produto) para que sejam implementados 
// fluxos de validação dos dados recebidos
    
// - erro caso o produto escolhido não seja encontrado
//  - erro caso algo inesperado aconteça




app.delete(("/produtos"), (req, res) => {
    
    const datafiltered = data.filter(item => (Number(item.id) === req.body.id)) 
    try{  
    if(datafiltered.length <=0 ){ 
        throw Error("Produto não encontrado")
    }
    res.status(201).send(datafiltered)
    
} catch(error: any){
    switch(error.message){
        case "Produto não encontrado" : 
           res.status(400).send(error.message)
           break;
        default: 
           res.status(500).send(error.messge)
         
        }

     }

})


const server = app.listen(gate, () => {
    console.log("The server is running at:", gate)
})
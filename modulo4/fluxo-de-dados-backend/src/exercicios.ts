import express from "express";
import cors from "cors"; 

//Exercício 2   
// Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
// Popule manualmente o array com pelo menos 3 produtos.
import {data} from "./data"
import { exec } from "child_process";


const app = express();
app.use(express.json());
const gate = 3003;




// Exercício 1
// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint 
// de teste com método `**GET`** no path **`“/test”`** que retorna uma mensagem genérica 
// avisando que a API está funcional.

app.get(("/test"), (req , res )=>{
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


app.post(("/products"), (req,res)=> {
    const arrayData = [...data,{id:Date.now(), ...req.body}]
    res.status(201).send(arrayData)
})


// - Exercício 4

//     Crie um endpoint que **retorna todos os produtos**.

app.get(("/products"), (req , res )=>{
    res.status(200).send(data)

})

// - Exercício 5


// Crie um endpoint que **edita** **o preço de** 
// **um determinado produto** e retorna a lista de produtos atualizada.

app.put(("/products"),(req,res)=> { 
    
  const dataPriceChanges = data.map(item => {
       if(Number(item.id) === req.body.id){ 
           return {...item, price: req.body.price }
       }else return item 
  
  })
    
 res.send(dataPriceChanges)
})

app.delete(("/products"),(req,res) => {
    const datafiltered = data.filter(item =>  !(Number(item.id )=== req.body.id ))
   
    res.status(201).send(datafiltered)
})



// - Exercício 7
    
//     Refatore o endpoint do exercício 3 (criar produto) para que sejam 
// implementados fluxos de validação dos dados recebidos (`name` e `price`)

app.post(("/produtos"), (req,res)=> {
//  erro caso um ou nenhum deles forem recebidos
    
    if(req.body.price || req.body.name){ 
        console.log("recebi os dois")
    }
     
    const arrayData = [...data,{id:Date.now(), ...req.body}]
    res.status(201).send(arrayData)
})
//     - erro caso `name` seja diferente de `string`
//     - erro caso `price` seja diferente de `number`
//     - erro caso `price` seja igual ou menor que `0`
//     - erro caso algo inesperado aconteça





const server = app.listen(gate, ()=> { 
   console.log( "The server is running at:", gate)
})
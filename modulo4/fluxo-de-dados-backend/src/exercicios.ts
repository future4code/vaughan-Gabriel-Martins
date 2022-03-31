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

app.get(("/products"), (req , res )=>{
    res.status(200).send(data)
})

// - Exercício 3
    
// Desenvolva um endpoint que **cria um novo produto** e 
// retorna a lista de produtos atualizada.
// A id do produto deve ser gerada automaticamente pela API.


app.post(("/products"), (req,res)=> {
    const arrayData = [...data,{id:Date.now(), ...req.body}]
    res.status(201).send(arrayData)
})

const server = app.listen(gate, ()=> { 
   console.log( "The server is running at:", gate)
})

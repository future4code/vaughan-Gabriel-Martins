import express , {Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";


const port = 3003;
const app: Express = express();
app.use(express.json);


console.log("*********  LabBANK - the best bank ever -  LabBANK   *********** ")

// 1) Criar Conta 

type extrato = {valor: number , data: Date , descricao: string  } 

type user = { 
    nome: string,
    cpf: number, 
    dob: Date, 
    saldo: number, 
    extrato: extrato[],
}

// 2) Criar array global 

let usuarios :  user[] = [{ 
    cpf: 11111111111, 
    nome: "Gabriel",
    dob:new Date("1983-04-13"), 
    saldo: 0,
    extrato:[ {valor: 101 , data: new Date("2022-01-01") , descricao: "Deposito inicial"  } ],
}]

const usuarioTeste = { 
    nome: "Outro usuario",
    cpf: 22222222222, 
    dob:new Date("2000-01-01"), 
    saldo: 0,
    extrato:[ {valor: 100 , data: new Date("2022-01-01") , descricao: "Deposito inicial"  } ]
}

console.log("usuarios push ", usuarios.push(usuarioTeste))


console.log("newUsers", usuarios)
// console.log(usuarios[0].extrato)




app.listen(port, ()=> { 
    console.log("Server is running :", port)

})
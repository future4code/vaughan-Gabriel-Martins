import express, { Request, Response } from "express";
import cors from "cors";
import { isNotEmittedStatement, visitFunctionBody } from "typescript";
import { NOMEM } from "dns";

console.log("teste")

const app = express()
app.use(express.json())
app.use(cors())

console.log("*********  LabBANK - the best bank ever -  LabBANK   *********** ")

// 1) Criar Conta 

// type extrato = {valor: number , data: Date , descricao: string  } 

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

let usuario = { 
    nome: "Joe Doe usuario",
    cpf: 22222222222, 
    dob:new Date("2000-01-01"), 
    saldo: 0,
    extrato:[ {valor: 100 , data: new Date("2022-01-01") , descricao: "Deposito inicial"  } ]
}
 usuarios.push(usuario)
 
// console.log("newUsers", usuarios)



// 3 Crie um tipo: para representar as transacoes 


type extrato = {valor: number , data: Date , descricao: string  } 


// 4 Dentro da definicao do usuario crie um array que armazene as transaçoes de um cliente 

type contaPagar = { valor: number , descricao:string , datapagamento: Date }

 const transacoes : contaPagar[] = [{valor: 100 ,descricao: "escola" , datapagamento: new Date("2022-04-10") }]
 

const newUser  = {...usuario, transacoes}
// console.log(newUser)
// {
//     nome: 'Joe Doe usuario',
//     cpf: 22222222222,
//     dob: 2000-01-01T00:00:00.000Z,
//     saldo: 0,
//     extrato: [
//       {
//         valor: 100,
//         data: 2022-01-01T00:00:00.000Z,
//         descricao: 'Deposito inicial'
//       }
//     ],
//     transacoes: [
//       {
//         valor: 100,
//         descricao: 'escola',
//         datapagamento: 2022-04-10T00:00:00.000Z
//       }
//     ]
//   }

//5 Crie um endpoint  que utilize o método POST da entidade users 
// que será responsável 
// por cadastrar um usuário em um array de usuários. 
// Neste momento, não se preocupe, com as validações 
// descritas nas funcionalidades.



let UsuariosContas = [
    {
    nome: 'Joe Doe usuario',
    cpf: 22222222222,
    dob: "2000-01-01",
    saldo: 0,
    extrato: [
      {
        valor: 100,
        data: new Date("2022-01-01"),
        descricao: 'Deposito inicial',
      }
    ],
    transacoes: [
      {
        valor: 100,
        descricao: 'escola',
        datapagamento: "2022-04-10",
      }
    ]
  },
    {
    nome: 'Maria ',
    cpf: 11111111111,
    dob: "2000-10-10",
    saldo: 0,
    extrato: [
      {
        valor: 100,
        data: new Date("2023-11-11"),
        descricao: 'Deposito salario',
      }
    ],
    transacoes: [
      {
        valor: 1166,
        descricao: 'labenu',
        datapagamento: "2022-04-10",
      },
      {
        valor: 10,
        descricao: 'lojas americanas',
        datapagamento: "2022-10-13",
      }
    ]
  }


]


app.post("/users" , (req , res)=>{ 

   UsuariosContas.push(req.body)
  
   res.status(201).send(UsuariosContas)
  
}) 


6 // Crie um método GET na entidade users função que será 
// responsável por pegar todos os usuários existentes no array de usuários.

app.get("/users" , (req:Request , res: Response)=> { 
    res.send(UsuariosContas)
})

7// Adicione, uma validação no item 1 (Criar conta): 
// o usuário deve possuir mais do que 18 anos para conseguir 
// se cadastrar. Caso não possua, exiba uma mensagem de erro.


// console.log((Date.now()))

// console.log((new Date(Date.now())).toDateString())

// console.log(Date.parse((new Date(Date.now())).toDateString()))

app.put("/users",  ( req:Request , res:Response)=> { 
    // Entrar com ano mes e dia  aaaa-mm-dd  
    // 18 anos em ms   567993600000 pelo calculo abaixo  18years  coverted in  ms => 568036800000
    
    
  //*** Desafios 1 Adicione mais uma validação na função do item 1 (Criar conta): 
    // verifiquem se o CPF passado já não está atrelado a alguma conta existente.
     
    try{
       //cpf  
       let  {cpf , dob }  = req.body 
       if(usuarios.filter(item => item.cpf === cpf).length > 0){ 
        throw new Error("cpf ja cadastrado")
       }

      // idade 
        dob = Date.parse(dob)
        const today = (Date.parse((new Date(Date.now())).toDateString()))
        // const isOver18 = (today - dob) >=  567993600000
        const isOver18 = (today - dob) >=  568036800000
        if(isOver18){ 
            usuarios.push(req.body)
          // return res.status(200).send(req.body )
          return res.status(200).send(usuarios )
        }
         throw new Error("Não tem a idade minima para abrir conta")
       // idade end 


    }   
    catch(error:any) { 
      switch(error.message) { 
        case "Não tem a idade minima para abrir conta":
             res.status(400).send(error.message)
             break;
        case "cpf ja cadastrado":
             res.status(403).send(error.message)
             break;
        default: 
              res.status(500).send(error.message);
             break;
    }         
    }
           
    
} )  

// **** DESAFIOS o 1 esta acima 

// Crie um endpoint get que receba um CPF como parâmetro 
// e retorne o saldo da conta do usuário dono daquele CPF. 
// A informação deve ser igual ao que estiver salvo no sistema. 
// Se for diferente, exiba uma mensagem de erro.


let desafiosArray = [
  {
    nome: 'Joe Doe usuario',
    cpf: 22222222222,
    dob:"2000-01-01",
    saldo: 10,
    extrato: [
      {
        valor: 100,
        data: "2022-01-01",
        descricao: 'Deposito inicial'
      }
    ],
    transacoes: [
      {
        valor: 100,
        descricao: 'escola',
        datapagamento: "2022-04-10"
      }
    ]
  },
  {
    nome: 'Seila',
    cpf: 11111111111,
    dob:"2000-01-02",
    saldo: 20,
    extrato: [
      {
        valor: 100,
        data: "2022-01-01",
        descricao: 'Deposito inicial'
      }
    ],
    transacoes: [
      {
        valor: 100,
        descricao: 'escola',
        datapagamento: "2022-04-10"
      }
    ]
  }
]



app.get("/users/:cpf" , (req:Request, res:Response)=> { 
    const saldo  = desafiosArray
    .filter(item => item.cpf === Number(req.params.cpf))
    .map(item =>{ return {saldo:  item.saldo}})

    res.status(200).send(saldo)
})
  
// 3) Crie um endpoint put que receba um nome, um CPF e um valor. 
// Ele deve adicionar o valor ao saldo do usuário. O nome e o CPF 
// devem ser iguais ao que estiver salvo no sistema Se algum dos dados 
// for diferente, exiba uma mensagem de erro.


app.put("/user/saldo", ( req: Request , res: Response)=>{

  try{
    const {nome, cpf, saldo} = req.body;
    console.log( nome,cpf,saldo)

   const  isNomeCpfRight = desafiosArray.filter(item => (item.nome === nome && item.cpf === cpf))
    if(isNomeCpfRight.length > 0){
     desafiosArray =  desafiosArray.map( item => { 
    //  const NewdesafiosArray =  desafiosArray.map( item => { 
       if(item.cpf === cpf) { 
         return { ...item , "saldo" : item.saldo + saldo}
       }else return item  })
      res.status(201).send(desafiosArray)
    } else throw new Error("Esta conta  não existe")
  
  }
  catch(e:any){
    switch(e.message){ 
      case "Esta conta  não existe": 
           res.status(422).send(e.message)
      default: 
           res.status(500).send(e.message)
           
    }

   }
   

})



app.listen(3003 , () => { 
    console.log("Server is running in http://localhost:3003");
});
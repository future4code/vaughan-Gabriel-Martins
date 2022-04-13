import axios from "axios";
import  express , {Request, Response}   from "express";
import { isTemplateExpression } from "typescript";


const app = express();

app.use(express.json());


// - Exercício 1
    
//     Vamos começar fazendo uma função nomeada simples que retorne todos os 
//     assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza 
//     o `async` para fazer a comunicação com o banco de dados. Além disso, 
//     por ora, indique que ela vai retornar um array de "qualquer coisa".

// a )  Qual endpoint você deve utilizar para isso?

// *** get / subscribers 


// b. Como indicamos o tipo de uma função assíncrona que 
// retorna um "array de qualquer coisa"?

 //  Promise<any>[]

const URL_BASE = "https://labenews.herokuapp.com/";

 async function exercicio1(): Promise<any[]> {
     const result = await axios.get(`${URL_BASE}subscribers`)
     return result.data;
 };

 
 // main()
 
 
 // - Exercício 2
 
 //     Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando *arrow function*. 
 
 //     *a.* Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma 
 //    arrow function assíncrona
 
 //     b. Implemente a função solicitada, usando arrow function
 
  
 const exercicio2  = async( ): Promise<any[]> => { 

        const result = await axios.get(`${URL_BASE}subscribers`)

        return result.data;

    }

// - Exercício 3

// Agora, vamos melhorar um pouco a nossa função, criando uma tipagem 
// que represente os assinantes da nossa aplicação. No nosso caso, eles
//  possuem um `id`, `name` e `email`, como indicado abaixo:


// a) nao . 
// b) deixar a promisse <any> é basicamente falar para o typescript ignorar 
// a formatação do retorno. Quando tipamos o retorno ajudamos a preminir possiveis erros
// que pode ocorrer no codigo evitando a previnit possiveis bugs no futuro. 

 
 type user ={ id: string , name: string , email:string}

 const exercicio3  = async( ): Promise<user[]> => { 

    const result = await axios.get(`${URL_BASE}subscribers`)

    return result.data;

}
 

// c. Reimplemente a função, corretamente.

const exercicio3c = async (): Promise<user[]> => {

    const result = await axios.get(`${URL_BASE}subscribers`)
    return result.data.map((res:user):user => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };
 

//   - Exercício 4
    
//   Vamos continuar as nossas funcionalidades da API. 
// Crie uma função que permita criar uma nova notícia.

 const exercicio4 =  (title:string , content:string , date:number ) => { 

    const body = {
        "title":title,
        "content": content,
        "date": date
    }
  axios.put(`${URL_BASE}news`, body)
 }



//  - Exercício 5
    
//  Agora, implemente uma função que receba um array de usuários e uma 
//  mensagem e envie essa mensagem como notificação para todos os usuários. 
//  A princípio, não utilize o `Promise.all`

type user5 = {id: string }

const exercicio5 = async (users: user5[] , message : string  ):Promise<void> => {  
  const sending =  users.map(user  =>{ 
       return  axios.post(`${URL_BASE}notifications`,  {"subscriberId": user.id, "message": message} )
    }
    )

}

// 6 Vamos reescrever a função anterior utilizando o `Promise.all`. Antes disso, responda as perguntas abaixo:

// a. O que o `Promise.all` faz?      

//  

// b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?

// c. Reimplemente a função utilizando `Promise.all`



type user6 = {id: string }

const exercicio6 = async (users: user6[] , message : string  ):Promise<void> => { 
    try{

        const sending =  users.map(user  =>{ 
            return  axios.post(`${URL_BASE}notifications`,  {"subscriberId": user.id, "message": message} )
        }
        )
        await Promise.all(sending )
    }catch{ 
        console.log( "Algo deu errado ")
    }

}



//Main 

 const main = async () => {
     const exe1 = await exercicio1()
     const exe2 = await exercicio2()
     const exe3 = await exercicio3c()
     const exe4 = exercicio4("Dino da Silva Sauro morreu de velho", "O dinosauto robô mais famoso" , 21321332213)
     const ex5 = exercicio5( exe3, "oi gente")
     const ex6 = exercicio5( exe3, "oi gente")
     console.log("exe1", exe1 )
     console.log("exe2", exe2 )
     console.log("exe3", exe3 )

 }

 main();
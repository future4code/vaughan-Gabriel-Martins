// - Exercício 1
// Crie um função que receba uma `string` com o nome e outra `string` 
// com uma data de nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

import { argv } from "process";
import { stringify } from "querystring";

type nomedata = { nome : string, data: string }


const exercicio1 =(nome: string , data:string ) :string =>  { 
    // const arrayData1 : string[] = [...data ];
    // const arrayData2 : Array<string> = Array.from(data);
    const arrayData3 : Array<string> = data.split("/");
   
    return (`Exercicio 1 : Olá me chamo ${nome}, nasci no dia ${arrayData3[0]} 
    do mês de ${arrayData3[1]} do ano de ${arrayData3[2]}`)
 
}


if (process.argv[2] === "1"){

console.log(exercicio1(process.argv[3], process.argv[4]))

}


// exercicio2 
// Crie uma função que receba um parâmetro qualquer 
//  que imprima no console o tipo da variável

const exercicio2ReturnString = (varivelqualquer: any ): string  =>{ 
  
    const tipo = typeof(varivelqualquer)

  return `Exercicio 2 : Esta varivel é do tipo : ${tipo} `
}
 
// Eu sei que o exercicio pediu pra retonar um console.log 
// input: várias possibilidades
// output: nenhuma 
// Entao posso fazer assim: 

const exercicio2ReturnVoid = (varivelqualquer: any ): void  =>{ 
  
    const tipo = typeof(varivelqualquer)

 console.log( `Exercicio 2 retorno void : Esta varivel é do tipo : ${tipo} `)
}
 

if (process.argv[2] === "2"){
console.log(exercicio2ReturnString(10))
console.log(exercicio2ReturnString("Gabriel"))
console.log(exercicio2ReturnString({objeto: "objeto" }))
console.log(exercicio2ReturnString([1,2,3,4]))

console.log(exercicio2ReturnVoid(10))
console.log(exercicio2ReturnVoid("Gabriel"))
console.log(exercicio2ReturnVoid({objeto: "objeto" }))
console.log(exercicio2ReturnVoid([1,2,3,4]))
}


// - Exercício 3
    
//     Você foi contratado por um serviço de streaming para organizar o 
//     sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 
//1. nome do filme; 
// 2. ano de lançamento e 
// 3. gênero do filme. 
// Os gêneros da plataforma se limitam
// aqueles encontrados no seguinte `ENUM` de gêneros:


// Além dessas informações presentes em todos os filmes, 
// alguns deles possuem uma informação opcional: 
// 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

// Considerando todas estas informações, crie uma função que receba todas 
// essas informações como parâmetros( 3 essenciais + 1 opcional) 
// e retorne todas informações organizadas em um `type`


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type exercicio3OutPut = {nome: string , anoLancamento: number , genero : GENERO , pontuacao? : number}

const exercicio3 =
( nome: string , anoLancamento: number , genero : GENERO , pontuacao? : number):exercicio3OutPut => { 

if( pontuacao === undefined){
return  {"nome" : nome , "anoLancamento" : anoLancamento , "genero" :genero }
}else 
return  {"nome" : nome , "anoLancamento" : anoLancamento , "genero" :genero , "pontuacao": pontuacao }

}

if(process.argv[2]==="3"){
console.log( "exercicio3" , exercicio3( "Duna", 2021, GENERO.ACAO, 74))
console.log( "oi exercicio3 sem pontuacao" , exercicio3( "Duna", 2021, GENERO.ACAO))
}


// - Exercício 4
    
//     O seguinte `array` traz as pessoas colaboradoras de uma empresa, 
//     com seus salários, setores e se trabalham presencialmente ou por home office:
// Considerando o arrayacima, crie um ENUM para os setores e um type para 
// as pessoas colaboradoras. Em seguida, crie uma função que receba este 
// arraycomo parâmetro e retorne apenas as pessoas do setor de marketing 
// que trabalham presencialmente. 

enum setor { 'marketing', 'vendas' , 'financeiro' }

const arrayEx4 = [
	{ nome: "Marcos", salario: 2500, setor: setor.marketing, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: setor.vendas, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: setor.financeiro, presencial: true},
	{ nome: "João" ,salario: 2800, setor: setor.marketing, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: setor.financeiro, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: setor.vendas, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: setor.marketing, presencial: true }
]

type objetoEx4 ={ nome:string, salario: number , setor: setor , presencial: boolean}


const exercicio4 = (obj: objetoEx4[] ): objetoEx4[]  => {

    
    const empregadoMarkingPresencial =  obj.filter((empregado) =>   {
        if( empregado.presencial === true  && empregado.setor === setor.marketing  ){ 
            return true }
        else {return false}
    
    })
    return empregadoMarkingPresencial

  
}



if(process.argv[2]==="4"){ 

    console.table(exercicio4(arrayEx4))

    
}
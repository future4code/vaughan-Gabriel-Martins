// - Exercício 1
// Crie um função que receba uma `string` com o nome e outra `string` 
// com uma data de nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

import { argv } from "process";
import { stringify } from "querystring";
import { updateLanguageServiceSourceFile } from "typescript";

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

enum setor { marketing = 'marketing', vendas ='vendas' , financeiro ='financeiro' }

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



// - Exercício 5
    
//Considerando o `array` de usuários abaixo, crie uma função que receba este `array` 
//como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

enum role { user= "user" , admin ="admin" }

const arrayEx5 = [
	{name: "Rogério", email: "roger@email.com", role: role.user},
	{name: "Ademir", email: "ademir@email.com", role: role.admin},
	{name: "Aline", email: "aline@email.com", role: role.user},
	{name: "Jéssica", email: "jessica@email.com", role: role.user},  
	{name: "Adilson", email: "adilson@email.com", role: role.user},  
	{name: "Carina", email: "carina@email.com", role: role.admin}      
] 


type ex5  = { name: string , email: string , role: role }

const exercicio5 = (usuarios: ex5[]) :string[]   => { 

 const array5 = usuarios.filter((item )=>  {
      if(item.role === role.admin) {
       return true
	}
}).map(item => item.email)
   return array5
}


if(process.argv[2]==="5"){ 
 console.table(exercicio5(arrayEx5))
 
}


// - Exercício 6
    
//     Agora, pediram para você ajudar a fazer uma funcionalidade de 
// 	um banco digital. Antes de explicar a sua tarefa, você precisa 
// 	entender como eles guardam as contas dos clientes. 
// 	Basicamente, eles salvam o nome do clientes, o saldo total e 
// 	uma lista contendo todas os débitos realizados pelo cliente. 
// Pensando em aumentar seu lucros, o banco quer identificar possíveis 
// clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar 
// uma função que receba este array como parâmetro, atualize o saldo total 
// descontando todos os débitos e retorne apenas os clientes com saldo negativo.
	
// 	Exemplo:

const entradaEx6 = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
type  input  = 	{ cliente: string , saldoTotal: number, debitos: number [] }

const exercicio6 = (entrada : input[] ): input[] => {  
    return entrada
	
	.filter((usuario )=> {  
		if (usuario.saldoTotal -  usuario.debitos.reduce((sum, cur)=> sum+cur , 0) >= 0 ) { 
			return false 
		}else return true 	
	}) 
	
	
	.map((usuario)=> ( { 

	  cliente :	usuario.cliente, 
	  saldoTotal: usuario.saldoTotal - usuario.debitos.reduce((sum, cur)=> sum+cur , 0) ,
	  debitos : []
		
	} 
		))


}

if(process.argv[2]==="6"){ 
	console.table(exercicio6(entradaEx6))
   }

//    - Exercício 7
    
//    Você acabou de conseguir um emprego em uma importadora e precisa continuar 
//    a desenvolver o sistema de organização de estoque da empresa. 
//    A pessoa desenvolvedora anterior a você chegou a criar uma função que 
//    ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:


const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

// xO seguinte array traz o estoque atual da empresa:

const entradaEx7 = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]


type precoAnterior = { nome: string, quantidade: number, valorUnitario: number}

const exercicio7  = (arrayprecoEx7 : precoAnterior[])  =>  {  

	console.table(arrayprecoEx7.map((item)=> ( 
		{quatidade : item.quantidade    , 
		 nome : item.nome,	
		 
	    valorUnitario : ajustaPreco(item.valorUnitario)
		}) 
		)
		.sort((a,b) => a.quatidade - b.quatidade)
	)

}

if(process.argv[2]==="7"){ 
	console.table(exercicio7(entradaEx7))
   }
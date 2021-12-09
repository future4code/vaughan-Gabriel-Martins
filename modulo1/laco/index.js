/* Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)

    // soma de  1+2+3+4 = 10 
    
2. Leia o código abaixo:
    

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }

    

    
    a) O que vai ser impresso no console?

//    19  21  21  23  25 27 30 
    
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 

    
    
    é suficiente? Se sim, o que poderia ser usado para fazer isso?
    
    // Sim poderiamos colocar um cotador dentro do loop inicializado em 0 e incrimentado de 1 para casa execucao antes do if.


     ou adicionar a propriedade de array . indexOf() 

     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    let i =0;
   let guardaIndex = null;
   for (let numero of lista) {
   i++;
    guardaIndex =lista.indexOf(numero)
   if (numero > 18) {
       
  
		console.log(numero , 'index =',i , guardaIndex )
	}
    
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }
  

    vai imprimir 4 linhas  em forma de triangulo usando asterisco.    
*/


////////////////////////////////// Exercicios de escrita de codigo \\\\\\\\\\\\\\\\\\\\
/*

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
  
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
     um por um, e guarde esses nomes em um array

    
    c) Por fim, imprima o array com os nomes dos bichinhos no console 
*/

let nomeDosPets='';
let  nomeDosPet='';

const numeroDePets = Number(prompt('Quantos animais de estimação você tem ?'))

if (!numeroDePets) {
    console.log("Que pena! Você pode adotar um pet!");

} else for( let i = 0; i < numeroDePets ; i++ ){ 
    nomeDosPet = prompt('Qual o nome do pet'); 
    nomeDosPets = [ ... nomeDosPets, nomeDosPet ]
}


console.log(nomeDosPets)



/////////////// 2 
/*
2) Considere que você tenha acesso a um array  (chamado de 'array original') que é composto 
somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
realizando as operações pedidas:



a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array
 original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
"O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

*/


const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];


//a )  program imprime cada valor do array 

  for ( let item of arrayOriginal ){
      console.log(item);
  }

  
  //b ) program imprime cada valor do array  / 10 
  
  for ( let item of arrayOriginal ){
      console.log(item/10);
  }

  //c)  crie array numeros pares a apartir do orginal 
  let numeroPar;
  let arrayPar= [];
  for ( let item of arrayOriginal) { 
       if ( item % 2 === 0 )   { 
           numeroPar = item 
           arrayPar = [...arrayPar ,numeroPar];
       }
    
 }

  console.log(arrayPar);


//   // d) ) Escreva um programa que crie um novo array contendo strings, 
//   //da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

 
  let arrayIndex =[];

   for ( let item of arrayOriginal) { 
       arrayIndex = [...arrayIndex , `O elemento do index é ${arrayOriginal.indexOf(item)} é ${item}`]

   }

    console.log(arrayIndex);

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.

// /////   Ja esta declarado acima simplemente para auxilio visual 
///////*****     const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

 
  let maiorNumero= arrayOriginal[0];
  let menorNumero= arrayOriginal[0];


    for (let i = 0 ; i < arrayOriginal.length; i++ ) {
     
        if( maiorNumero < arrayOriginal[i])
            maiorNumero = arrayOriginal[i];         
        else if( menorNumero > arrayOriginal[i]) 
           menorNumero = arrayOriginal[i];
    

    }



  console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero} ` );

//     ////////// Desafio   \\\\\\\\


//      /* Neste exercício vocês vão implementar uma brincadeira muito simples:
//       "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 

//             Vamos jogar!
//             O número chutado foi: 3
//             Errrrrrrrou, é maior
//             O número chutado foi: 18
//             Errrrrrrrou, é menor
//             O número chutado foi: 15
//             Errrrrrrrou, é menor
//             O número chutado foi: 11
//             Acertou!!
//             O número de tentativas foi: 4 

//          Um resumo das funcionalidades são:

// a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, 
// deve-se imprimir no console a mensagem `Vamos jogar!`

// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar,
//  através do `prompt`. A cada chute, deve ser informado no console:

// - O número chutado, com a mensagem: `O número chutado foi: <número>`
// - Uma mensagem dizendo se o número escolhido é maior ou menor do que 
// o número chutado: `Errou. O número escolhido é maior/menor`

// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, 
// deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi :
//  <quantos chutes o usuário deu>`   
// */

//a) 
const numberParaAcertar  = Number(prompt('Escolha um numero')); 
console.log("Vamos jogar");


//b) Segundo jogador 
let i = 1;
let numeroChutado;  
while(true) { 
    numeroChutado = Number(prompt('Chute um numero'));
    if (numeroChutado === numberParaAcertar) { 
        console.log(`Acertou  
O numero de tentativas foi: ${i}`);
    break;
    }else  if (numeroChutado > numberParaAcertar) { 
        i++;
        console.log(`O numero chutado foi ${numeroChutado}
Errrrrrrrou, é menor`);


    }else  {
        i++;
        console.log(`O numero chutado foi ${numeroChutado}
Errrrrrrrou, é maior`);
}
}


// // 2  
// /* Uma das principais características de uma boa pessoa programadora é conseguir 
// resolver seus problemas independentemente.

// Queremos que você comece a treinar isso a partir de hoje!

//  Então, vamos pedir para que você faça uma alteração no código acima. 
 
//  Agora, ao invés de ter 2 jogadores, 
//  haverá um só; e o seu adversário será o computador. 

//  A ideia é: ao iniciar o jogo, você deve sortear um número 
//  aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar.
// Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior. */ 



// const numberParaAcertar  = Number(prompt('Escolha um numero')); 

const numberParaAcertar1 =Math.trunc( Math.random()*100)
console.log(numberParaAcertar1);
console.log("Vamos jogar");


let j = 1;
let numeroChutado1;  
while(true) { 
    numeroChutado1 = Number(prompt('Chute um numero'));
    if (numeroChutado1 === numberParaAcertar1) { 
        console.log(`Acertou  
O numero de tentativas foi: ${j}`);
    break;
    }else  if (numeroChutado1 > numberParaAcertar1) { 
        j++;
        console.log(`O numero chutado foi ${numeroChutado1}
Errrrrrrrou, é menor`);


    }else  {
        j++;
        console.log(`O numero chutado foi ${numeroChutado1}
Errrrrrrrou, é maior`);
}
}

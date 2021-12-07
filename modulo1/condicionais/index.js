/*  Leia o codigo abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}


a) Explique o que o código faz. Qual o teste que ele realiza? 

O teste testa se o numero é par ou nao. Se o numero que foi entrado pelo usuario transformado de string 
para numero e depois divido por 2 e testa se existe 0 ou nao. 

b) Para que tipos de números ele imprime no console "Passou no teste"? 

numeros pares. 

c) Para que tipos de números a mensagem é "Não passou no teste"?

impares e 0. 


//.////// 2   O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

/////   entra uma fruta e da o preco da fruta escolhida. 

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

/////// O preço da fruta  maça  é , R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`,
qual seria a mensagem impressa no console se retirássemos o `break` 
que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?


O preço da fruta  Pêra  é , R$ 5.

preço será rescrito e o valor 5 será ultimo na variavel. 


*/ ///////////////////////////// Exercícios de escrita de código  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/* 1 ) Faça um programa que pergunta ao usuário qual a idade dele e 
imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
*/

// const idadeParaDirigir = Number(prompt('Entre com a sua idade'));

/*
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
 imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

// usando ternary operator e funcao 
 function legalDirigir(idade) { 
     const retorno  =  idade >=18 ? `Você pode dirigir"` : `Você não pode dirigir.`; 
     return retorno; 
 }
 
//  console.log(legalDirigir(idadeParaDirigir));


 // 2) Agora faça um programa que verifica que turno do dia um aluno estuda. 
 //Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem 
 //"Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloc


  
//  const turnoM = prompt('Entre com o seu tunro M (matutino) ou V (Vespertino) ou N (Noturno)').trim(); 
    

//  const turno = turnoM.toLocaleUpperCase();
//  console.log(turno);
 
//     if (turno === 'M') { console.log('Bom Dia! ')
//         }else if ( turno === "V"){ console.log('Boa Tarde!');
//             }else if ( turno ==='N') { console.log('Boa Noite!')}
  
    

   //3) Using switch         

   // mostrando que foi capitlizada e trimmed  na questao anterior 

//   console.log(turno);

//    let menssagem;
//    switch(turno){ 
//        case 'M':
//            menssagem = 'Bom dia!'
//             break;
//         case 'V':
//             menssagem = "Boa Tarde!" 
//             break;
//         case 'N':
//             menssagem ="Boa Noite"
//             break;
//         default: 
//             menssagem= "Entrada errada"
//             break;               
//    }
//     console.log(menssagem);
   

//////// 4) Considere 


//  const genero = prompt("Qual genero de filme vão assistir? ").trim().toLowerCase();
//  const preco = Number(prompt('Qual custa o ingresso?'));


// console.log(( genero == 'fantasia' && preco < 15 ) ?  `Bom Filme!`  : `Escolha outro filme :( ` );




////////////////*************** Desafio  ***********\\\\\\\\\\\\\\\\\\\\\\\\

/*Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem 
"Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar 
(pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" 
e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.*/




// const genero = prompt("Qual genero de filme vão assistir? ").trim().toLowerCase();
// const preco = Number(prompt('Qual custa o ingresso?'));

//  if (genero === 'fantasia' && preco < 15 ) {
//     const comida = prompt('O que vai comprar para comer?');
//     console.log( "Bom Filme!")
//     console.log("Aproveita a sua" ,comida);
// } else console.log(`Escolha outro filme :( ` );


///4)  

/* 
nome completo 
tipo de jogo   IN    or DO 

Etapa do jogo   SF    DT   FI 

Cat 1 , 2 ,3 ou 4

quantidad de ingressos 



// */

 const nomeCompleto = prompt('Entre com seu nome completo');
//  const tipoDeJogo = prompt('IN indica internacional e DO indica doméstico').trim().toUpperCase();
//  const  categoria = "categoria" +prompt("Entre com a categoria de 1-4.");
 const etapaDoJogo = prompt( 'SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final').trim().toUpperCase();
//  const quantidadeIngressos= Number(prompt("Entre com o numero de inrgressos, "));





 const jogo ={ 
    //  jogo: [ 'SF' , 'DT', 'FI'],
     categoria1 : [ 1320.00 , 660.00 , 1980.00],
     categoria2 : [ 880.00 , 440.00 , 1320.00],
     categoria3 : [ 550.00 , 330.00 , 880.00],
     categoria4 : [ 220.00 , 170.00 , 330.00],
 }
   

   // SF = 0    DT = 1  FT =2 


 
     let nomeJogo;
     let numero;

     switch (etapaDoJogo){
              case'SF':
                     numero = 0 ;
                     nomeJogo = "Semifinais";
                 break;   
              case'DT':
                 
                  numero = 1 ;
                  nomeJogo = "Decisao de 3 lugar";
                 break;
              case'SF':
                  numero = 2 ;
                  nomeJogo = "Semifinais";
                  break;
              default: 
                  nomeJogo ="Entrou errrado";
                  break;
        
     } 


 console.log(numero,nomeJogo);


 console.log ( `---Dados da compra--- 
 Nome do cliente: ${nomeCompleto} 
 Tipo do jogo:  ${etapaDoJogo ==="DO" ? 'Nacional'  : 'Internacional' }
//  Etapa do jogo:  Final  
 Categoria: {categoria}
 Quantidade de Ingressos: {quantidadeIngressos}
 ---Valores--- 
 Valor do ingresso:  R$ {jogo['categoria'][jogo]}
 Valor total:  R$ 19800   {    quantidadeIngressos} `);
 
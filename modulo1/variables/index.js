/* Exercicio 1 

Construa um programa, seguindo os seguintes passos:
a) Construa um programa, seguindo os seguintes passos:*/

let nome;

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade;

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando

console.log(typeof nome, typeof idade);

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//** Resposta
// **Duas undefined
// **Porque hora nenhuma foi atribuido valor ou type de que as variaveis seriam.

// e) Pergunte ao usuário seu nome e sua idade,
//atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt("Entre com seu nome").trim();
idade = prompt("Entre com a sua idade");

//  f) Novamente, imprima na tela o tipo dessas variáveis.
//O que você notou? Escreva em um comentário de código.

console.log(typeof nome, typeof idade);

//** A as variaveis mudaram de tipo para string e number respectivamente.

/*g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos".
 Onde nome e idade são os valores que o usuário inseriu*/

console.log(`Olá, ${nome}, você tem ${idade} anos `);
console.log("Olá, " + nome + " você tem " + idade + " anos ");

/* 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:  */

const pergunta1 = "Você dormiu bem";
const pergunta2 = "Trabalhou durante o final de semana?";
const pergunta3 = "Trocou de carro no ultimo ano?";

const resposta1 = prompt(pergunta1).toUpperCase();
const resposta2 = prompt(pergunta2).toUpperCase();
const resposta3 = prompt(pergunta3).toUpperCase();

console.log(pergunta1, " - " + resposta1);
console.log(pergunta2, " - " + resposta2);
console.log(pergunta3, " - " + resposta3);

// 3 Suponha que temos duas variaveis a e b ,cada uma com um valor inicial

let a = 10;
let b = 25;

let variableSpare = 0;

variableSpare = a;
a = b;
b = variableSpare;

console.log("O novo valro de a eh =", a);
console.log("O novo valro de b eh =", b);

/* Desafio  Faça um programa que receba dois números do usuário e 
faça as seguintes operações,
 imprimindo os resultados no console da seguinte forma: */

const number1 = Number(prompt("Entre com um numero"));
const number2 = Number(prompt("Entre com um numero"));

const x = number1 + number2;
const y = number1 * number2;

console.log(`A soma(x) é ${x}`);
console.log(`A multiplicação(y) é ${y}`);

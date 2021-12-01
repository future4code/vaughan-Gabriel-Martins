/*  1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

let array
console.log('a. ', array)

//a.  undefine 


array = null
console.log('b. ', array)

//b. null  

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

// c. 11

let i = 0
console.log('d. ', array[i])

// d.  3

array[i+1] = 19
console.log('e. ', array)

//e. array = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) 

// f. 9 
*/

/*2. Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

*/

//  SUBI NUM ÔNIBUS EM MIRROCOS   27
//

// ////*********   Exercicios de escrito  ***************************/

// // Faça um programa que pergunte ao usuário seu nome e seu e-mail.
// // Em seguida, Imprima no console a seguinte mensagem:

// const nomeDoUsuario = prompt("Entre como o seu nome").trim();
// const emailDoUsuario = prompt("Entre como o seu e-mail").trim();

// console.log(`${emailDoUsuario} foi cadastrado com sucesso. `);
// console.log(`Seja bem-vindo(a), ${nomeDoUsuario}`);

// /// 2 Faça um programa que contenha um array com 5 das suas
// //comidas preferidas,
// //armazenado em uma variável. Em seguida, siga os passos:

// const comidasPreferidas = ["feijoada", "beef", "churrasco", "curry", "feijão"];

// //a) Imprima no console o array completo

// comidasPreferidas.forEach((comida) => {
//   console.log(comida);
// });

// //b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
// // seguida por cada uma das comidas,uma embaixo da outra.

// comidasPreferidas.forEach((comida) => {
//   console.log(`Esta é minha comida favorita: ${comida}.`);
// });

// //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
// //Troque a segunda comida da sua lista pela inserida pelo usuário.
// //Imprima no consolea nova lista

// comidasPreferidas[1] = prompt("Entre com a sua comida favorita");

// comidasPreferidas.forEach((comida) => {
//   console.log(`Esta é minha comida favorita: ${comida}.`);
// });

// ///////////
// //3. Faça um programa, seguindo os passos:

// //a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// const arrayTarefas = [];

// //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// arrayTarefas[0] = prompt("Entre com a primeira tarefa do dia ");
// arrayTarefas[1] = prompt("Entre com a segunda tarefa do dia ");
// arrayTarefas[2] = prompt("Entre com a terceira tarefa do dia ");

// //c) Imprima o array no console

// arrayTarefas.forEach((tarefa) => {
//   console.log(tarefa);
// });
// //ou

// console.log(arrayTarefas);

// //d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
// //e) Remova da lista o item de índice que o usuário escolheu.

// const indice = prompt("Entre com um indice 1, 2, 3");

// console.log("tarefa removida", arrayTarefas.splice(indice - 1, 1));

// //f) Imprima o array no consoleImprima no console

// console.log("Tarefas remanescentes :", arrayTarefas);

// /****************************** DESAFIO  *****************************/

/* 
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras 
da frase, ignorando os espaços*/

// funcao remove os  espacos em branco

const removeZero = (item) => {
  return item !== "";
};

//input user
const fraseRecebida = prompt("Digite um frase");

// removendo espacos em branco antes de
//depois da frase e diviindo por palavras e espaços

const frasetransformed = fraseRecebida.trim().split(" ");

// Chamando a funcao removes os espacos em branco
const arrayFiltered = frasetransformed.filter(removeZero);

console.log(arrayFiltered);

// console.log(arrayFiltered);

/*2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o 
índice quanto o tamanho do array */

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(
  `o numero index do Abacaxi é = ${frutas.findIndex(
    (item) => item === "Abacaxi"
  )}  ele é a ${
    frutas.findIndex((item) => item === "Abacaxi") + 1
  } frutas da lista  `,
  ` O numero  total de frutas é = ${frutas.length + 1}`
);

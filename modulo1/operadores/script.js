/// 1
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

////2

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

// *** exercicio 3

// No exercicio 2 o meu colega de turma esta esquecendo que
// qualquer forma de interação do DOM ou input é vem como type string.
// Então ele tem que converter as strings para numeros antes da soma.
// sugestão é o uso da função "Number" que aceita a string como parametro.

///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Exercicio escrito
// 1  a)  Pergunte a idade do usuário

const ageUser = Number(prompt("Entre com a sua idade"));

//  b)  idade do amigo

const ageFriend = Number(prompt("Entre com a idade do seu melhor amigo"));

// c) imprimir console

console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  ageUser > ageFriend
);

// d) Diferença de idade

console.log(
  `A diferença de idade é ${
    ageUser - ageFriend <= 0 ? ageFriend - ageUser : ageUser - ageFriend
  }`
);

////// 2
//a) numero par

const evenNumber = Number(prompt("Entre como um numero par1"));

//b)

console.log(`O resto divisão por 2 : ${evenNumber % 2}`);

//c)  Padrao     =>   resto sempre === 0

//d)  O resto será 1 ou podemos escrever como resto  !== 0;

////3
const ageUserInYears = Number(prompt("Entre com a sua idade em anos"));

//         //a Age in meses

console.log(`Sua edade em meses é ${ageUserInYears * 12}`);
//b) Age in days

console.log(`Sua idade em dias é ${ageUserInYears * 12 * 365}`);
//const ageUserInDays = ageUserInYears * 12 *365

//c))  Age in hours

console.log(`Sua idade é de  : ${ageUserInYears * 12 * 365 * 24} horas`);
//const ageUserInHours = ageUserInYears * 12 * 365 * 24

////////4. Faça um programa que pergunte ao usuário dois números.
//Em seguida, faça as operações e imprima no console as seguintes
//mensagens seguidas pelo `true` ou `false`:

const anyNumber1 = Number(prompt("Entre com um numero"));
const anyNumber2 = Number(prompt("Entre com outro numero"));

console.log(
  ` O primeiro numero é maior que segundo? ${anyNumber1 > anyNumber2}`
);

console.log(
  `O primeiro numero é igual ao segundo? ${anyNumber1 === anyNumber2} `
);

console.log(
  `O primeiro numero é divisível pelo segundo? ${anyNumber1 % anyNumber2 === 0}`
);

console.log(
  `O segundo numero é divisível pelo primeiro? ${anyNumber2 % anyNumber1 === 0}`
);

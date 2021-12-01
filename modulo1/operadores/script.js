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

/////////////    ******* DESAFIO ********  \\\\\\\\\\\\\\\\\\\

/*1. Para este exercício, será necessário o conhecimento das fórmulas para mudar
a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K).

Abaixo estão duas delas:

    - Graus Fahrenheit(°F) para Kelvin(K)

        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
        ```

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
        ```

    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter */

// Entra Fah e sai em Kelvin.

const kelvin = (tempeFah) => {
  tempeFahTemp = Number(tempeFah);
  console.log(`${(tempeFahTemp - 32) * (5 / 9) + 273.15} K`);
  return (tempeFahTemp - 32) * (5 / 9) + 273.15;
};

const fahrenheit = (tempeCelsius) => {
  tempeCelsiusTemp = Number(tempeCelsius);
  console.log(`${tempeCelsiusTemp * (9 / 5) + 32} °F`);
  return tempeCelsiusTemp * (9 / 5) + 32;
};

//a)
kelvin(77);

//b)
kelvin(80);

//c)   30 Celsius em F and K
fahrenheit(30);

kelvin(fahrenheit(30));

//d ))

const celsiusUser = Number(
  prompt("Entre com a temperatura desejada em Celsius")
);

fahrenheit(celsiusUser);

kelvin(fahrenheit(celsiusUser));

/* Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar
o consumo de energia elétrica em residências.
Sabe-se que o quilowatt-hora de energia custa R$0.05.
Faça um programa que receba a quantidade de quilowatts consumida por uma residência. */

const quilowattHora = 0.05;

//a)  Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora.

const potenciaConsumida = 280;

console.log(`Valor a ser pago R$: ${potenciaConsumida * quilowattHora}`);

//b)  Altere o programa para receber mais um valor: a porcentagem de desconto.
//Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

const descontoPorcetagem = 0.15;

console.log(
  `Valor a ser pago R$: ${
    potenciaConsumida * quilowattHora * (1 - descontoPorcetagem)
  }`
);

/* Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem
 para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos 
 usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem 
 metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal), 
  xícaras (xic). Dada essa introdução, faça o que se pede: */

/*a) Procure uma forma de converter libra (lb) para quilograma (kg)
e escreva um programa que converta 20lb para kg. 
Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg`*/

const peso = 20;

const kilo1 = peso / 2.2046;

console.log(`${peso}lb equivalem a ${kilo1}kg`);

/*b) Procure uma forma de converter onça (oz) para quilograma (kg) 
e escreva um programa que converta 10.5oz para kg. Imprima  a 
resposta no console da seguinte forma: 
`10.5oz equivalem a X kg`*/

const oz = 10.5;

const kilo = oz * 0.02835;

console.log(`${oz} são ${kilo}`);

/*
c) Procure uma forma de converter milha (mi) para metro (m) e escreva 
um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
`100mi equivalem a X m`*/

// 1 milha = 1760 metros

console.log(`100mi equivalem a ${1760 * 100}m`);

/*
d) Procure uma forma de converter pés (ft) para metro (m) e escreva um 
programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
`50ft equivalem a X m` */

// 1 pe = 0,3048 metros

console.log(`50ft equivalem a ${(0, 3048 * 50)}`);

/*
e) Procure uma forma de converter galão (gal) para litro (l) e escreva um
 programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l` */

//1 US gallon = 3.78541178 litres

console.log(`103.56 gal equivalem a ${3.78541178 * 103.56}l`);

/*
f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um 
programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
`450 xic equivalem a X l` */

// 1 xc = 0,24l

console.log(`450 xic equivalem a ${0.24 * 450}l`);

/*
g) Escolha ao menos **um** dos itens anteriores e modifique o programa para 
que ele peça ao usuário o valor da unidade original antes de converter */

const numeroDeXicaras = Number(
  prompt("Entre como o numero de xicaras que deseja converter em litros.")
);

console.log(`${numeroDeXicaras} xic equivalem a ${0.24 * numeroDeXicaras}l`);

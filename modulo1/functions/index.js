/// Exercicios de interpretacao de codigo 


/* 1. Leia o código abaixo

    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```
    
    a) O que vai ser impresso no console?
    
    10  e  50 


    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função 
    `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

     nao iria aparcer nada. 

    

/*
    
2. Leia o código abaixo
    

    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    
    a. Explique o que essa função faz e qual é sua utilidade

    A funcao recebe umas string transforma em lowerCase e se se a string cenoura esta presente. 
    retorna true ou false. 
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`

         true 


         ii.  `CENOURA é bom pra vista`

         true 

         iii. `Cenouras crescem na terra` 

         true 
*/


////////////********************** Exercicio de escrita de codigo *************************************//////////////////////

/* a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
falando algumas informações sobre você, como: 

"Eu sou Gabriel, tenho 38 anos, moro em Perth - Australia e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/



const informacoesArrrow = () => console.log('informacoesArrrowFu ',
    "Eu sou Gabriel, tenho 38 anos, moro em Perth - Australia e sou estudante.");
    
    // ou 
    
    function informacoesName()  { 
        console.log(' ', "Eu sou Gabriel, tenho 38 anos, moro em Perth - Australia e sou estudante.");
        
    }
    
    const informacoesAnName = function () {
        console.log(' ', "Eu sou Gabriel, tenho 38 anos, moro em Perth - Australia e sou estudante.");
     
}

informacoesArrrow ();
informacoesAnName();
informacoesName();

 

/*
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações 
de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão 
(`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma
 só mensagem com o template:


Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/


function personalDataName (nome, idade, endereco, profissao ){
    console.log(' Function ' ,`Eu sou ${nome}, tenho${idade} anos, moro em ${endereco}e sou ${profissao}.`);
    
  }
const personalDataArrow =(nome, idade, endereco, profissao ) =>
  console.log(' ArrowF',`Eu sou ${nome}, tenho${idade} anos, moro em ${endereco}e sou ${profissao}.`);

  
const personalDataAnonima  = function  (nome, idade, endereco, profissao ){
    console.log(' Anonima' ,`Eu sou ${nome}, tenho${idade} anos, moro em ${endereco}e sou ${profissao}.`);
}



personalDataName( 'Gabriel', 38 , ' 1 Coolgardie st. Perth ', ' Engenheiro  Eletrico');
personalDataArrow( 'Gabriel', 38 , ' 1 Coolgardie st. Perth ', ' Engenheiro  Eletrico');
personalDataAnonima('Gabriel', 38 , ' 1 Coolgardie st. Perth ', ' Engenheiro  Eletrico');

/* 
2 Escreve as funcoes explicadas abaixo: 

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. 
Invoque a função e imprima no console o resultado.*/


function somaNome (number1,number2) {
    return number1 + number2 ; 
}
 somaAnonimina = function (number1,number2) {
    return number1 + number2 ; 
}
 const somaArrow =  (number1,number2) =>  number1 + number2 ; 


 console.log( somaNome(2,3) );
 console.log( somaNome(10,22));
 console.log(somaAnonimina(2,3));
 console.log(somaAnonimina(10,22));
 console.log(somaArrow(2,3));
 console.log(somaArrow(10,22));

/*
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
primeiro número é maior ou igual ao segundo.*/

// funcao  normal 
function maiorIgualnome (number1,number2) {
    return number1 >= number2 ; 
}
// funcao anonima 
 maiorIgualAnonimina = function (number1,number2) {
    return number1 >= number2 ; 
}

// funcao arrow 
 const maiorIgualArrow =  (number1,number2) =>  number1 >= number2 ; 


 /// imprimindo 
// funcao 
 console.log( maiorIgualnome(2,3)) ;
 console.log( maiorIgualnome(3,2));
 console.log( maiorIgualnome(2,2));
// funcao anonima 
 console.log(maiorIgualAnonimina(2,3));
 console.log(maiorIgualAnonimina(3,2));
 console.log(maiorIgualAnonimina(2,2));
 // funcao arrow 
 console.log(maiorIgualArrow(2,3));
 console.log(maiorIgualArrow(3,2));
 console.log(maiorIgualArrow(2,2));


/*
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/


function parNome (number) {
    return number%2 ===0 
}

// imprimindo  se eh par ou impar    
console.log(`${parNome(2) ? `Par`   : `Impar`  }`);
console.log(`${parNome(3) ? `Par`   : `Impar`  }`);


/// outra forma de fazer  

parAnonimina = function (number) {
    return number%2 ===0 
}

// imprimindo  se eh par ou impar    
console.log(`${parAnonimina(2) ? `Par`   : `Impar`  }`);
console.log(`${parAnonimina(3) ? `Par`   : `Impar`  }`);

// outra forma de fazer 

const parArrow =  (number) =>    number%2 ===0 ;

// imprimindo  se eh par ou impar    

console.log(`${parArrow(2) ? `Par`   : `Impar`  }`);
console.log(`${parArrow(3) ? `Par`   : `Impar`  }`);





/*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o 
tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/

const mesagem = ' mensagem qualquer aqui ';

// fazendo na estrutura de funcao normal 

function letrasMaiusculaFunction (mensagem) { 
    // imprimindo o tamanho e a mensagem em letra maiuscula
    console.log( mensagem.length, mensagem.toUpperCase()  ); 
}

// chamando a funcao 

letrasMaiusculaFunction(mesagem);


// outra forma de fazer 

//const mesagem = ' mensagem qualquer aqui ';

// fazendo na estrutura de funcao Anonimas 

const letrasMaiusculaFunctionAnomima  = function  (mensagem) { 
    // imprimindo o tamanho e a mensagem em letra maiuscula
    console.log( mensagem.length, mensagem.toUpperCase()  ); 
}

// chamando a funcao 

letrasMaiusculaFunctionAnomima(mesagem);

////////
// outra forma de fazer    usando funcao  Arrow 

//const mesagem = ' mensagem qualquer aqui ';

// fazendo na estrutura de funcao normal 

const letrasMaiusculaFunctionArrow =  (mensagem) => { 
    // imprimindo o tamanho e a mensagem em letra maiuscula
    console.log( mensagem.length, mensagem.toUpperCase()  ); 
}

// chamando a funcao 

letrasMaiusculaFunctionArrow(mesagem);



////////////// Desafios  //////// 

/* 1 Funções são trechos de códigos como quaisquer outros mas que 
podemos acessá-los mais de uma vez ao longo do código através de 
invocações/chamadas. Então, funções podem chamar/invocar outras funções 
também. Sua tarefa é escrever duas funções */

/* a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console
 esse parâmetro */
 

 const arrowImprime = (parametro) =>{ 
     console.log(parametro);
 }

 arrowImprime(' oi tudo bem ?')

/*
b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas 
**nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função 
mandando este resultado da soma como entrada para imprimi-lo*/



const somaArrowFunction = (num1 , num2 ) =>  {
    soma = num1 + num2; 

    arrowImprime(soma);
}


somaArrowFunction(2,3);

 /* 2 Faça uma função que execute o teorema de Pitágoras, recebendo dois
  catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a 
  função e imprima o resultado no console.*/

   
    //   c^2 = b^2 + a^2 ; 

   const pitagoras =(hip1,hip2) =>  Math.hypot(hip1,hip2);

console.log(pitagoras(3,4));
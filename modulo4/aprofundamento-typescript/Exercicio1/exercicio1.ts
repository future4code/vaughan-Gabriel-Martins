// a)
// const minhaString : string = 10; ERRO
const minhaString: string = "10";

// b)  Crie uma variável meuNumero do tipo number e atribua
// um valor numérico. Como fazer para que essa
// variável também aceite strings? Ou seja, como criamos no
// typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = "10";
const meuNumero1: number | string = 10;


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Cr

//ie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const Gabriel : pessoa = { 
    nome : "Gabriel", 
    idade: 19, 
    corFavorita :"preta",
}

const Jieun : pessoa ={
    nome: "Jieun",
    idade: 35,
    corFavorita: "Vermelho",
}

const Velho :pessoa ={
    nome: "Andre",
    idade: 40,
    corFavorita: "Cinza"
}

// d) Modifique a propriedade corFavorita para que apenas seja possível 
// escolher entre as cores do arco-íris. Utilize um enum para isso.

enum corFavorita  {  vermelha = "vemelha" , 
    laranja ="Laranja", 
    amarela = " Amarela", 
    verde = "Verde",
     azul = "Azul", 
     azulEscuro = "azulEscuro",
    violeta = "violeta"
     
}

type pessoaD = {
    nome: string,
    idade: number,
    corFavorita: corFavorita
}

const JoaoD : pessoaD =  {
    nome: "Joao",
    idade: 0,
    corFavorita: corFavorita.azul
}
const Joao : pessoa =  {
    nome: "Joao",
    idade: 0,
    corFavorita: "azul"
}

console.log("Joao",Joao )
console.log("JoaoD", JoaoD)
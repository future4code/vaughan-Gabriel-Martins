"use strict";
// a)
// const minhaString : string = 10; ERRO
const minhaString = "10";
// b)  Crie uma variável meuNumero do tipo number e atribua
// um valor numérico. Como fazer para que essa
// variável também aceite strings? Ou seja, como criamos no
// typescript uma variável que aceite mais de um tipo de valor?
const meuNumero = "10";
const meuNumero1 = 10;
const Gabriel = {
    nome: "Gabriel",
    idade: 19,
    corFavorita: "preta",
};
const Jieun = {
    nome: "Jieun",
    idade: 35,
    corFavorita: "Vermelho",
};
const Velho = {
    nome: "Andre",
    idade: 40,
    corFavorita: "Cinza"
};
// d) Modifique a propriedade corFavorita para que apenas seja possível 
// escolher entre as cores do arco-íris. Utilize um enum para isso.
var corFavorita;
(function (corFavorita) {
    corFavorita["vermelha"] = "vemelha";
    corFavorita["laranja"] = "Laranja";
    corFavorita["amarela"] = " Amarela";
    corFavorita["verde"] = "Verde";
    corFavorita["azul"] = "Azul";
    corFavorita["azulEscuro"] = "azulEscuro";
    corFavorita["violeta"] = "violeta";
})(corFavorita || (corFavorita = {}));
const JoaoD = {
    nome: "Joao",
    idade: 0,
    corFavorita: corFavorita.azul
};
const Joao = {
    nome: "Joao",
    idade: 0,
    corFavorita: "azul"
};
console.log("Joao", Joao);
console.log("JoaoD", JoaoD);

"use strict";
const minhaString = "10";
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
//# sourceMappingURL=exercicio1.js.map
// a) usamos o process.argv[] como input 

//b) 
const nome = process.argv[2]
const age = process.argv[3]

console.log(nome , age)

 if (age||nome ){
 return console.log("Esperava 2 parâmetros só recebi um.")
}
console.table(`Ola ${nome}! Você tem  ${age} anos!`)

// // c)Altere o programa acima para que mostre tambem a sua idade daqui a sete anos. 

// const novaIdade = Number(age)+7;
// console.table(`Ola ${nome}! Você tem  ${age} anos. Em sete anos você terá ${novaIdade} anos`)
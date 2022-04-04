

const operador = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

// if (numero1||numero2 ){
//   return console.log("Esperava 2 parâmetros só recebi um.")
//  }

let operacao ;
switch(operador){ 
    case "+": 
    operacao = numero1 + numero2
      break; 
    case "-": 
    operacao =  numero1 - numero2
      break; 
    case "x": 
    operacao =  numero1 * numero2
      break; 
    case "/": 
    operacao =  numero1 / numero2
      break; 
    default: 
    operacao = ("Algo deu errado!") 
      
}

console.log('\x1b[33m  Estou amarelo \x1b[0m');
console.log(operacao)

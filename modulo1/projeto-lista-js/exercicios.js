// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura  = Number(prompt(' altura'));
  const largura  =Number(prompt(' largura'));
  
  console.log( altura * largura);
  // return altura * largura;
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano de nascimento'))
  const anoDeNascimento = Number(prompt('Ano de nascimento'))
  console.log(anoAtual - anoDeNascimento);
  
}



// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui
 return (peso /( altura * altura));
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Nome');
  const idade = prompt('idade');
  const email = prompt('email');
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
   const corFav = [];

   corFav[0] = prompt('cor');
   corFav[1] = prompt('cor');
   corFav[2] = prompt('cor');
    
   console.log(corFav);
   
}   

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   return custo/ valorIngresso ;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length ; 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
   return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1 ];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    const auxiliar =  array[array.length -1]  
    array[array.length -1]  = array[0]; 
    array[0] = auxiliar;

    return array; 

}

// // EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui

//      string1 = string1.toUpperCase(); 
//      string2 = string2.toUpperCase(); 
     
//     //  const tamanho = string2.length === string1.length;
//      const letra0 = string1[0] ===string2[0];
//      const letra1 = string1[1] ===string2[1];
    
//      if( string1 == string2  && letra0 && letra1)
//      return true;
//      return false;


// }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    
     string1 =string1.toUpperCase() ;
     string2 =string2.toUpperCase() ;
 
    let stringArray1 = string1.split('');
    let stringArray2 = string2.split('');
    let i=0;
    let iguais =0;
     
   console.log(stringArray2.length)
    
    while( i < stringArray2.length) { 

      if(stringArray2[i]==stringArray1[i])
      iguais++;
      i++;
    }
       console.log(iguais, i );
       if (iguais === i )
       return true; 
       return false;

    }


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
   
  const anoAtual1 = Number(prompt("Entre com o ano Atual") );
  const anoDeNascimento1 = Number(prompt("Entre com o ano Nascimento") );
  const anoEmissaId = Number(prompt("Entre com o ano que carteira de identidade emitida") );

   const idade = anoAtual1 - anoDeNascimento1 ; 
   const idadeEmissaoId = anoAtual1 - anoEmissaId; 

    if (idade <= 20 && idadeEmissaoId >= 5) { 
      console.log(true)
      return; 
    }
    if (idade <= 50 && idadeEmissaoId >= 10) {
         console.log(true) 
        return; 
      }
    if( idade >50 && idadeEmissaoId >= 15){
         console.log(true)
        return; 
      } else console.log(false);


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

    if (ano % 400 === 0) return true; 
    if (ano % 4 === 0  && ano % 400 !==0 && ano % 100) return true; 
    return false;
  

    
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

   const serMaior  = prompt('Voce tem mais que 18 anos ?')
   const ensinMedioCompleto = prompt('Voce possui o ensino medio completo?')
   const disponibilidade = prompt('Vc tem disponibilidade de horario ?')

   if (serMaior==="sim" && ensinMedioCompleto ==="sim" && disponibilidade ==="sim") {

     console.log(true)
     return; 
    };
    console.log(false);

  
}
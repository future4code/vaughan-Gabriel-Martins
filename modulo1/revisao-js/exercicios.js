// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 
  
        return array.reverse();
    
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b);
}   

// EXERCÍCIO 04
function retornaNumerosPares(array) {

  return  array.filter( (numero) => numero %2 ===0 )
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return  retornaNumerosPares(array).map( numero=> numero **2 );

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior=-Infinity;
    for( numero of array){ 
      if (maior < numero){ 
          maior = numero;
      }

    }
  return maior; 

  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

  let numero = [];
  for(let i = 0; i < n ; i++ ){ 
       numero =[ ...numero ,i * 2 ];
  }
 return numero;
  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoA === ladoC) return  "Equilátero";
    if (ladoA !==ladoB && ladoA !== ladoC && ladoB !== ladoC) return "Escaleno";
    return "Isósceles";
  
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  const segundomenor = retornaArrayOrdenado(array);

    

  return [ segundomenor[segundomenor.length - 2 ], segundomenor[1]]  ;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const array  = filme.atores.join(', ');

 
 return ( `Venha assistir ao filme ${ filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${ array }.`)
   

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novaPessoa = {...pessoa, nome : "ANÔNIMO"}
  return novaPessoa;

 
}

/*  13 - Ter, no mínimo, 1.5m de altura;  
   const alturar >= 1.50 m
   const idade < 14 anos
   const idade > 60  anos */

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

  const permissao = pessoas.filter((pessoa) => {
    return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5 ) ? true : false })
 
return permissao;
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const permissao = pessoas.filter((pessoa) => {
    return (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura <= 1.5 ) ? true : false })
 
return permissao;

 }
 
  


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {



 
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  


 


}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
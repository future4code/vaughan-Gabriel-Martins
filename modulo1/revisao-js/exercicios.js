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
  const obj = {};
  let maiorObjeto = {};

  let maior=0;
  // numero menor dividido por maior da sempre o proprio numero de resto   5 % 10 = 5 e etc... mas vou usar ternary operator 
  // usando ternary quando os numeros forem iguais serao armazenados na condicao false;
  ( num1 > num2 ? maiorObjeto = {maior: num1, menor:num2  }: maiorObjeto = {maior : num2, menor: num1});
  console.log(maiorObjeto);
  console.log(maior);
   
  
  obj.maiorNumero = maiorObjeto.maior;
  obj.maiorDivisivelPorMenor =  maiorObjeto.maior % maiorObjeto.menor === 0;
  obj.diferenca = maiorObjeto.maior - maiorObjeto.menor;

   return obj;


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
    return (pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura <= 1.5 ) ? true : false })
 
return permissao;

 }
 
  


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

  let soma =0;


  return  contas.map(item => {

   let soma =0;
   for ( numero of item.compras){ 
       soma +=numero;
   }

  return  {...item, saldoTotal : item.saldoTotal - soma, compras:[]  } })

 
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  // fiz um array apartir do objeto e depois no arry usei sort para organizar alfeticamente pelos nomes e retornei os objectos dentro de um array usando map.
 const nomesAlfabeticamente = consultas.map( (item, index) =>  [item.nome, item.dataDaConsulta]).sort().map(item => { return {nome: item[0], dataDaConsulta: item[1]}})

 
return nomesAlfabeticamente;

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
    const consultasDatas = consultas.map(item =>  [new Date(item.dataDaConsulta) , item.nome  , item.dataDaConsulta   ]).sort().map(item => { return {nome: item[1], dataDaConsulta: item[2] }})
     return consultasDatas;
    
    }
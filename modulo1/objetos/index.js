/*1.  Leia o código abaixo
    
  
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }
    
    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
   
    
    a) O que vai ser impresso no console?  */

   //console.log(filme.elenco[0]) 
    
   // Matheus Nachtergaele
///////////

    //console.log(filme.elenco[filme.elenco.length - 1])

    // Virginia Cavendish

/////////////////

   //  console.log(filme.transmissoesHoje[2])
   
   //canal: "Globo", horario: "14h"


    /*
    
2. Leia o código abaixo
    
   
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
    */


    // a) O que vai ser impresso no console?

  //  console.log(cachorro)

  // objeto cachorro com as tres propriedade nome, idade, raca
  // nome : Juca  , idade: 3  raca: SRD
  

  //  console.log(gato)

  // tem um spread operator  entao vai imprimir o objeto que antes estava no cachorro 
  // substituido o por  nome: Juba; 
 
  //  nome: Juba , idade : 3  raca: SRD

  
  
  
  
  //  console.log(tartaruga)
  
  // vai imprimir gato  e mudar o nome de Juba para Jubo e o resto igia idade 3 e raca SRD 
    
   // b) O que faz a sintaxe dos três pontos antes do nome de um objeto? 

    
    // Os tres pontos dentro de um objeto ante de um objeto é o spread operator.  
    // O spread operator basicamente  desencapisula o objeto. 





   /*
    
3. Leia o código abaixo
    
   
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))



    console.log(minhaFuncao(pessoa, "altura"))

   
    
    // a) O que vai ser impresso no console?
    
    
    console.log(minhaFuncao(pessoa, "backender"))
    
    imprime  ====>  false 
    
    console.log(minhaFuncao(pessoa, "altura"))
    
    imprime ===> undefined  pois nao existe altura no objeto pessoa 
    
    
    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
   
    imprime  ====>  false     // pois eh o valor do    pessoa.backender   or pessoa[backender]
   


    imprime ===> undefined  pois nao existe altura no objeto pessoa

    a como o parametro nao existe no scopo do objeto. Ele nao foi declarado e nem iniciado  
    undefined é o valor atribuido automaticamente pelo java script.  

    */


//  //////////////*************************** Escrita de codigo  *************///////////////////////////////////

//  //a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre 
//  //terá exatamente três apelidos). 
//  //Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

//    const apelidos = { 
//        nome : 'Gabriel',
//        apelidos: ['Gaga' , 'Biel', 'Ga']
//    }

   
// const imprimiApelidos = objetoEntrada  => { 
//    return  console.log(`Eu sou ${objetoEntrada.nome}, mas pode me chamar de: ${objetoEntrada.apelidos[0]},
// ${objetoEntrada.apelidos[1]} ou ${objetoEntrada.apelidos[2]} ` );
// }

    
// // imprimiApelidos(apelidos);


// // b)  Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// //mas com uma nova lista de três apelidos. 
// //Depois, chame a função feita no item anterior passando como argumento o novo objeto


// const maisApelidos ={ 
//     ...apelidos, 
//     apelidos: ['Jose', 'Ze', 'Zeca']
// }

// // imprimiApelidos(maisApelidos);

//////////////
// 2 Resolva os passos a seguir: 
/////a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 



 const usuarios = { 
     nome: 'Jose', 
     idade: 32,
     profissao: 'Engenheiro Eletricista '

 }


 const admin = { 
     nome: 'Gabriel',
     idade: 38 ,
     profissao: 'Developer'

 }



  const contadorDeCaracter = (objectoPessoas) =>  [ objectoPessoas.nome ,objectoPessoas.nome.length, objectoPessoas.idade , objectoPessoas.profissao.length ];
  

// ou 
 

console.log(contadorDeCaracter(usuarios));
console.log(contadorDeCaracter(admin));

// outra forma de fazer usando destructur 



const destructur = (objetoDestructurer) => {
    const {nome , idade , profissao}  = {...objetoDestructurer}

    return [ nome , nome.length, idade, profissao.length]
}

console.log(destructur(usuarios));
console.log(destructur(admin));


///// 3 Resolve os passo a seguir 

/*  a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
 Invoque essa função passando os três objetos criados. 


d) Imprima a variável `carrinho` e garanta que ela agora seja um array preenchido com três objetos.

*/

//a)

let carrinho = [];


// b) crie tres novos objetos frutas 

const frutasObjeto = (nome, disponibilidade , ) =>{ 
    const fruta = { 
        nome,
        disponibilidade
    }
    return fruta; 
}


console.log(frutasObjeto('morango', true));
console.log(frutasObjeto('maça', false));
console.log(frutasObjeto('uva', false));


//c ) 



const frutaMorango = (frutasObjeto('morango', true));
const frutaMaca = (frutasObjeto('maça', false));
const frutaUva = (frutasObjeto('uva', false));


carrinho = [ { frutaMaca}, 
    { frutaMorango}, 
    { frutaUva}
]


console.log(carrinho);



////////////////////////************** Desafio *******/////////////////////////

 //1 ) 

//   function imprimirObjetoTipo () { 

//      const nome = prompt("Entre com o nome").trim(); 
//      const idade = Number(prompt("Entre com o idade")); 
//      const profissao = prompt("Entre com a profissao").trim(); 

//      const user = { 
//          nome, 
//          idade, 
//          profissao, 
//      }
//     console.log(user)
//     console.log("Este é um", typeof(user) )


     
//   }


//   imprimirObjetoTipo()



  //2) 
    const objetofilme1 = { 
        'ano de lançamento': 2010,
        nome: 'Homem de Ferro'
    }

    const objetofilme2 = { 
        'ano de lançamento': 2009,
        nome: 'Jupiter'
    }

    const functionCompara = (filme1, filme2 ) => { 
        
       console.log(`O primeiro filme foi lançado antes do segundo? ${filme1['ano de lançamento'] < filme2['ano de lançamento'] } ` );
       console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1['ano de lançamento'] == filme2['ano de lançamento']}` );
   
    }
    

    functionCompara(objetofilme2 , objetofilme1);


    ///  3  


    const frutaMorangoInver = { 
        nome: 'Morango',
        disponibilidade : true
    }

    function frutaInvertida (fruta) { 
        fruta.disponibilidade = !fruta.disponibilidade
        return fruta;
    }

  console.log(frutaInvertida(frutaMorangoInver))
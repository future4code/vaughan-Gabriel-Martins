/* 


Exercícios de interpretação de código
Tente responder os exercícios dessa seção sem executar o código. Se ficar 
muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

 Leia o código abaixo
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O que vai ser impresso no console?

Vai  imprimo o objeto composto pelo nome e apelida , 
depois o index que eh 0 no primeiro e 2 no ultimo  e o array inteiro com os 3 objetos para cara 
interacao. A vale lembrar que .maps sempre retorna um array do mesmo tamanho do original. 

/////////////////////////////// 

2 
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

Vai imprimir os nomes de cada objeto em um array com 3 nomes no total/ 

///////////////////////  



3. Leia o código abaixo
  
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)
    ```
    
    a) O que vai ser impresso no console?


    array.filter sempre retona um array igual ou menor que o de origem. 
    como estamos filtando pelos objetos que tem propriedade apelido diferente 
    de Chijo. E esta retornando true and false para o  item.apelido 
    o noveoArrayC vai ser um array de 2 objetos =>  [  { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" }, ]

*/


//////////////////////  Exercícios de escrita de código \\\\\\\\\\\\\\\\


/* 




1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
  */
    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]

 
        
    /*
    a) Crie um novo array que contenha apenas o nome dos doguinhos
    
    b) Crie um novo array apenas com os [cachorros salsicha]
    
    c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
    A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

    */
    
// a ) 
     const arrayPetNomes = pets.map(clientes=> clientes.nome );

     console.log(arrayPetNomes);


// b) 

    const arrayRacaSalsicha = pets.filter((pet)=> pet.raca === 'Salsicha' )
    console.log(arrayRacaSalsicha);


// c) 
    const arrayDescontoPoodles = pets.filter(pet=> pet.raca === "Poodle" ).map((pet) =>
    `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`);
    console.log(arrayDescontoPoodles);


// /*
// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as 
// funções de array **map** e **filter:**/
    

    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    
    //a) Crie um novo array que contenha apenas o nome de cada item

     const nomeProdutos = produtos.map((produto) => produto.nome )

     console.log(nomeProdutos);

    
//     //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
//     //aplicando 5% de desconto em todos eles


    const produtosDesconto5 = produtos.map((produto) =>   ({ nome: produto.nome, preco:( 0.95*produto.preco).toFixed(2) }));
    console.log(produtosDesconto5);

    
//     //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas


    const bebidasArray = produtos.filter((produto) => {
         if(produto.categoria === 'Bebidas' ){
        return produto
    }});
    

     console.log(bebidasArray);
    //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

    const ypeArray = produtos.filter((produto) => {
        if(produto.nome.includes('Ypê') )
        return produto
   });
   
    console.log(ypeArray);

    
 
//     //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".

  
     const stringCompre = ypeArray.map( (item) => ` Compre ${item.nome}  por ${(item.preco).toFixed(2)}`);


    console.log(stringCompre);
   

//     // Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    
   



//        /////////////      ////  Desafios \\\\\\ \\\\\\



//     //    Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

   //  const pokemons = [
   //      { nome: "Bulbasaur", tipo: "grama" },
     
   //      { nome: "Squirtle", tipo: "água" },
   //      { nome: "Charmander", tipo: "fogo" },
   //         { nome: "Bellsprout", tipo: "grama" },
   //      { nome: "Vulpix", tipo: "fogo" },
      
   //      { nome: "Psyduck", tipo: "água" },
   //   ]
     
     
     //      //a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
     
          const nomePokemons = (pokemons.map((pokemon) => pokemon.nome ).sort());
          console.log(nomePokemons);
     
     
     
     
     //   b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
     


  
     const pokemons = [
      { nome: "Bulbasaur", tipo: "grama" },
      { nome: "Squirtle", tipo: "água" },
      { nome: "Charmander", tipo: "fogo" },
      { nome: "Bellsprout", tipo: "grama" },
      { nome: "Vulpix", tipo: "fogo" },
      { nome: "Psyduck", tipo: "água" },
      { nome: "Bulbasaur", tipo: "grama" },
   ]
   let arrayFinal=[];

   let resultado = pokemons;

   for ( let i =0 ; i < pokemons.length ; i++){
    resultado = resultado.filter((item) =>  item.tipo !== pokemons[i].tipo);
    arrayFinal = [...arrayFinal, pokemons[i]];
    if(!resultado.length) break;
  
   }

   console.log(arrayFinal);
   
   
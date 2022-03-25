// Na aula de ontem, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` 
// passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. 
// Este processo é chamado de **transpilação**. 

// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. 
// O `tsc` é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. 

// a) Crie um arquivo chamado `exercicio-4.ts` , 
// cole o código abaixo e use comentários para responder as questões.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}



// b) Como você faria, já com a extensão instalada, para transpilar(converter)
//  esse arquivo typescript em um arquivo javascript?

//O processo seria quase o mesmo so teriamos que nos preocupar com onde esta packason  
//e fazer o caminho relativo de la ate onde sera pego o .ts e guardado e executado o .js


// Eh possivel fiz no exercicio 3   "scripts": {
    // "start": "tsc && node ../build/exercicio3.js  &&  node ../../build/exercicio1.js "

// function obterEstatisticas(numeros : number []) {
    
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//         )
        
//         let soma = 0
        
//         for (let num of numeros) {
//             soma += num
//         }
        
//         const estatisticas: {maior: number , menor : number , media: number } =  {
//             maior: numerosOrdenados[numeros.length - 1],
//             menor: numerosOrdenados[0],
//             media: soma / numeros.length
//         }
        
//         return estatisticas 
//     }
    
    
    // a) Quais são as entradas e saídas dessa função?  numeros: 
    // Copie a função para um arquivo .ts e faça a tipagem desses parâmetros 

    //  Array <number>     //  estaticas : {maior: number , menor : number , media: number }

    // b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
    // a , b , soma , num  e são todas numbers por causa da entrada. 

    // c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as
    //  propriedades **numeros** e **obterEstatisticas**.
    //  Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:



    type amostra = { 
        numeros : number[] , 
        obterEstatisticas: {maior: number , menor : number , media: number }   
    }

    // type amostra = (numeros:Array<number>) => {obj :  {maior: number , menor : number , media: number }}

 

function obterEstatisticas(numeros:number []) {
    
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
        )
        
        let soma = 0
        
        for (let num of numeros) {
            soma += num
        }
        
        const estatisticas:{maior: number , menor : number , media: number }  =  {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        } 
        
        return  estatisticas
    }



 
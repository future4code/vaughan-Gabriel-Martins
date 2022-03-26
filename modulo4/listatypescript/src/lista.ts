// - Exercício 1
// Crie um função que receba uma `string` com o nome e outra `string` 
// com uma data de nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 


const exercicio1 =(nome: string , data ) => { 
    const arrayData = Array.from(data) 

     
    `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
}
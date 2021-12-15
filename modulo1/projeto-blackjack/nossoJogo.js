/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

  const Game = ( ) => {

     console.log('Boas vindas ao jogo de BlackJack!');

     let anotherRound = prompt("Do you want start a new round , 'Cancel' or 'Ok' ;  ?").toLocaleLowerCase().trim();
      let  play =   anotherRound === 'ok' ?   true : console.log("Game Over") ; 

     const sum = (card1, card2) => soma = card1 +card2;
   


     while(play){ 
         
        
      
         const userCard1 = comprarCarta();
         const userCard2 = comprarCarta();
         const computerCard1 = comprarCarta();
         const computerCard2 = comprarCarta();
 
         // callin sum fucntio 
         
     
         const computerTotal = sum(computerCard1.valor,computerCard2.valor);
         const userTotal = sum(userCard1.valor,userCard2.valor);

   ;
        

         console.log( `Usuário - cartas: ${userCard1.texto}  ${userCard2.texto}  - pontuação ${ userTotal };
Computador - cartas: ${ computerCard1.texto}  ${ computerCard2.texto}  - pontuação ${computerTotal }`);
     

           // Who win the Game 

                 
                 if (userTotal === computerTotal) 
                     console.log("Empate!")
                 if ( userTotal > computerTotal ) 
                   console.log("O usuário ganhou!")
                 if ( userTotal < computerTotal ) 
                  console.log("O computador ganhou!")


    

         // Another round or not asking the user for it.  
      
        anotherRound = prompt("Do you want start a new round , 'Cancel' or 'Ok' ;  ?").toLocaleLowerCase().trim();
        play = anotherRound == 'ok' ?  true : false ; 
        console.log(anotherRound);
       
       // Stopping the game if cancelled by player.
        if(!play) {
           console.log('Game Over');
          break;
         }
      }

   }

   // calling the function game

    Game();
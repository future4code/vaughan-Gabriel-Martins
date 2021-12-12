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



   //  const Game = ( ) => {

      // console.log('Boas vindas ao jogo de BlackJack!'); 
      // let anotherRound = prompt("Do you want start a new round , 'Cancel' or 'Ok' ;  ?").toLocaleLowerCase().trim();
      //  let  play =   anotherRound === 'ok' ?   true : console.log("Game Over") ; 
      // const sum = (card1, card2) => soma = card1 +card2;
      
   
 ////////////////////
  //Question 8 
  // Comprando cartas e checando se pelo menos uma é diferente de A.     
  // Declarei este Objeto para retornar os valores das cartas. 
         const cardsCheckObject = { 
            cards1: {texto:'', valor: 0}, 
            cards2: {texto:'', valor: 0}, 
            cards3: {texto:'', valor: 0}, 
            cards4: {texto:'', valor: 0}, 
           
        }
   // Loop willl be running untill one of the cards isn't A.     
       function comprarCartaChecked () {   
        while(true){
           cardsCheckObject.cards1 = comprarCarta();
           cardsCheckObject.cards2 = comprarCarta();
  // showing the cards  
           console.log("Before if");
           console.log(cardsCheckObject.cards1.texto);
           console.log(cardsCheckObject.cards2.texto);
         //   cardsCheckObject.cards = [ cardsCheckObject.cards1.texto , cardsCheckObject.cards2.texto];
           // cheacking if there are not two A cards.         
           if (!cardsCheckObject.cards1.texto.includes("A") || !cardsCheckObject.cards2.texto.includes('A') ){
              // Showing the cards and breaking the while loop. just for check 
              console.log("After if");
              console.log(cardsCheckObject.cards1.texto);
              console.log(cardsCheckObject.cards2.texto);
              console.log('Saiu do loop!!! Pelo menos uma carta diferente de A ');
              break;
            }
         }
          
         return  {...cardsCheckObject};
       }
       
       //while(true){      
          
          ///////////
          //9 
          ////// Saving  objects of 2 cards -  one objc user & one objc computer as initial cards. 
          const userCard = comprarCartaChecked();
          const computerCard = comprarCartaChecked();
          
         /// not part of the question just for me to check  if the objects are different I got after usign spread operator on the objcte copied. 
         console.log('user');
         console.log(userCard);
         console.log('computer');
         console.log(computerCard);
         

         
         const desejaContinuar = (cartaComputadorTexto1, cartaUserTexto1, cartaUserTexto2, cartaUserTexto3 = '',  cartaUserTexto4= '') => 
          confirm(`Suas cartas são ${cartaUserTexto1}${cartaUserTexto2}${cartaUserTexto3}${cartaUserTexto4}. 
A carta revelada do computador é ${cartaComputadorTexto1}. \n
            Deseja comprar mais uma carta?`);
         
         //  Showing 2 cards for user and one of computer's. 
         continuar =  desejaContinuar( computerCard.cards1.texto, userCard.cards1.texto , userCard.cards2.texto);
          console.log(continuar); 
        

         const total =  (valor1 , valor2 ) => valor1 + valor2;
         const sumOneMoreCard = function (sum2,carta) { return  sum2 + card };

         
         const  userObject = { 
            total2FirstCards:total(userCard.cards1.valor, userCard.cards2.valor),
            comprar: () => comprarCarta(),
            soma: total(userCard.cards1.valor, userCard.cards2.valor),
          
         }
          
         const computerObject = {
            total2FirstCards:total(computerCard.cards1.valor, computerCard.cards2.valor),
            comprar: () => comprarCarta(),
            soma: total(computerCard.cards1.valor, computerCard.cards2.valor) ,
         }      

          console.log(computerObject);
          console.log(userObject);

          let i= 0;

          while(continuar) { 
                  

            // creating "valor" parameter on the object 
            console.log("valor de compra");
            userObject.valor = userObject.comprar().valor;
            const valorSoToShow1 = userObject.valor; 
            console.log(valorSoToShow1);
            userObject.valor =  userObject.valor + userObject.total2FirstCards;
            console.log('Valor de compra 2 ');
            const valorSoToShow2 = userObject.valor; 
            console.log(valorSoToShow2);
            
            
            console.log("valor somado");
            userObject.valor =  userObject.valor + userObject.total2FirstCards;
            console.log('Valor de compra somado total 3');
            const valorSoToShow3 = userObject.valor; 
            console.log(valorSoToShow3);
            
            console.log(' local 110');
            console.log(userObject);
            console.log(userObject.valor);

            console.log(userObject.soma);
            userObject.soma = userObject.valor + userObject.soma;
            console.log(userObject.soma);



            i++;
         //   if(userObject.soma > 21)  { 
           if(i >=4 )  { 
         
              console.log('Game Over');
             break;  
           } 

           userCard.cards3 = comprarCarta();
            const continuar = desejaContinuar(computerCard.cards1.texto, userCard.cards1.texto,
                userCard.cards2.texto , userCard.cards3.texto, userCard.cards4.texto )
            console.log(computerCard.cards1.texto, userCard.cards1.texto, userCard.cards2.texto , userCard.cards3.text, userCard.cards4.texto  );
            console.log(continuar);

          
            break;

           
         }
         
     
    

         
//           // callin sum function       
//           const computerTotal = sum(computerCard1.valor,computerCard2.valor);
//           const userTotal = sum(userCard1.valor,userCard2.valor);

//           console.log( `Usuário - cartas: ${userCard1.texto}  ${userCard2.texto}  - pontuação ${ userTotal };
//  Computador - cartas: ${ computerCard1.texto}  ${ computerCard2.texto}  - pontuação ${computerTotal }`);
       
//             // Who win the Game 
                  
//                   if (userTotal === computerTotal) 
//                       console.log("Empate!")
//                   if ( userTotal > computerTotal ) 
//                     console.log("O usuário ganhou!")
//                   if ( userTotal < computerTotal ) 
//                    console.log("O computador ganhou!")

//           // Another round or not asking the user for it.         
//          anotherRound = prompt("Do you want start a new round , 'Cancel' or 'Ok' ;  ?").toLocaleLowerCase().trim();
//          play = anotherRound == 'ok' ?  true : false ; 
//          console.log(anotherRound);
        
//         // Stopping the game if cancelled by player.
//          if(!play) {
//             console.log('Game Over');
//            break;
//           }
//        }
 
   //  }
 
    // calling the function game
 
   //   Game();









  //Question 8 
  // Comprando cartas e checando se pelo menos uma é diferente de A.     
  // Declarei este Objeto para retornar os valores das cartas. 
  const cardsCheckObject = { 
    cards1: {texto:'', valor: 0}, 
    cards2: {texto:'', valor: 0}, 
    
}
    const userObject = { 
        cards: {},
        cardsText: [],
        cardsValor: [],
        cardsValoresSoma:0, 

}
    const computerObject = { 
        cards: {},
        cardsText: [],
        cardsValor: [],
        cardsValoresSoma:0, 

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


// Comprando duas cartas sem repetir e guardando no objecto e printing so para ver

userObject.cards = comprarCartaChecked();
userObject.cardsText = [userObject.cards.cards1.texto, userObject.cards.cards2.texto]
userObject.cardsValor = [userObject.cards.cards1.valor, userObject.cards.cards2.valor]
userObject.cardsValoresSoma = userObject.cards.cards1.valor + userObject.cards.cards2.valor

console.log('user object');
console.log(userObject);



computerObject.cards = comprarCartaChecked();

computerObject.cardsText = [computerObject.cards.cards1.texto, computerObject.cards.cards2.texto]
computerObject.cardsValor = [computerObject.cards.cards1.valor, computerObject.cards.cards2.valor]
computerObject.cardsValoresSoma = computerObject.cards.cards1.valor + computerObject.cards.cards2.valor

console.log('Computer object');
console.log(computerObject);


/// 9 sorteio  das 2 cartas e computador sem serem dois A feito acima 
// revelando a duas cartas do usuario e 1 do computador

// Perguntando ao jogador se eles quer comprar mais uma carta. 

 
const quererComprarCarta = confirm(
	`86 Suas cartas são ${userObject.cardsText[0]} ${userObject.cardsText[1]}. A carta revelada do computador é ${computerObject.cardsText[0]}. 
	\n
	 Deseja comprar mais uma carta?`
)

/// Sim ou nao ( true or false)  resposta do user.
 console.log(quererComprarCarta);
 let quererComprarCarta1;
 let compraSegundaCarta;

 /// 10)    A cada carta comprada pontucao é somada com o valor existente 
 // pode comprar ate 21  ou parar.  

  if( quererComprarCarta) { 

       const compraDeCartaAdicionais1 =  comprarCarta()
       userObject.cards.cards3 = { ...compraDeCartaAdicionais1 };
       userObject.cardsText.push(userObject.cards.cards3.texto);
       userObject.cardsValor.push(userObject.cards.cards3.valor);
       userObject.cardsValoresSoma =( userObject.cardsValoresSoma + userObject.cards.cards3.valor);

       
       
       console.log(userObject);
  }
        if (userObject.cardsValoresSoma > 21) { 
          confirm(`111 Suas cartas são ${userObject.cardsText.map((item) => item )}. Sua pontuação é ${userObject.cardsValoresSoma}
Game Over \n \n O Computador Ganhou !!!` )

        }
         
       else {const compraDeCartaAdicionais2 =  comprarCarta()
       userObject.cards.cards4 = { ...compraDeCartaAdicionais2 };
       userObject.cardsText.push(userObject.cards.cards4.texto);
       userObject.cardsValor.push(userObject.cards.cards4.valor);
      userObject.cardsValoresSoma =( userObject.cardsValoresSoma + userObject.cards.cards4.valor)
       }
       
       if (userObject.cardsValoresSoma > 21 && userObject.cards.cards4.valor ) { 
        confirm(` 123 Suas cartas são ${userObject.cardsText.map((item) => item )}. Sua pontuação é ${userObject.cardsValoresSoma}
       Game Over \n \n O Computador Ganhou !!!` )   }  


        else {compraSegundaCarta = confirm(` 127 Suas cartas são ${userObject.cardsText.map((item) => item )}. Sua pontuação é ${userObject.cardsValoresSoma}
Deseja comprar mais uma carta?`);
 }
       

//11  presseed Cancel   Inicia a rodada. Computador compra 
      while(!compraSegundaCarta) { 
      console.log("Entrou no while");
        break;
      }
   

  
    
    


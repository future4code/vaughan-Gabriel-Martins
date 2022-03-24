const recebeDoisNumeros =(num1:number, num2: number): number[] => { 
    
     const soma = num1 + num2;
     const subtracao = num1 - num2;
     const multi = num1 * num2;
     const maior = (num1 > num2)? num1 : num2;
 
    return [soma , subtracao , multi , maior ]


}

const resposta:number[] =(((recebeDoisNumeros(Number(process.argv[2]),Number(process.argv[3])))))

// a) A soma desses numeros  
  console.log("A soma é ", resposta[0])
  // a) A subtração desses numeros  
  console.log("A subtração é ", resposta[1])
  // a) A multiplicação desses numeros  
  console.log("A multiplicação é ", resposta[2])
  // a) O maior numero é desses numeros  
  console.log("O maior numero é é ", resposta[3])
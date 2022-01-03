```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    const result =  arrayDeNumeros.filter((numero) => numero  === numeroEscolhido).length;

     return (result ? `número ${numeroEscolhido} aparece  ${result}x` : ' Número não encontrado' )
  }

(contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5], 4))
```
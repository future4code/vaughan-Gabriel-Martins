
### Exercício 1
    
    Analise a classe `UserAccount` abaixo. 
    Perceba quais propriedades são públicas e quais são 
    privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`
    
    a)Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

          Contrutor serve para fazer novos objetos a partir de Classe.
    
    b)Copie o código abaixo para o seu exercício de hoje; crie uma instância 
    dessa classe (dê o nome, cpf e idade que você quiser). 
    Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?

       Sim, uma vez.
    
    
    c)Como conseguimos ter acesso às propriedades privadas de uma classe?

     usando getters();

    ### Exercício 2
    
    Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. 
    Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, 
    todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses 
    valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa 
    classe e adicione à instância já criada de UserAccount 
    
                              
                              type Transaction = 
                              {
                                    description: string,
                                    value: number,
                                    date: string
                              }

    
    
                              class Transaction  {
                              private description: string;
                              private value: number;
                              private date: string;

                              constructor(date: string, value: number, description: string ){ 
                                    this.date= date ;
                                    this.value = value;
                                    this.description = description;
                              }
                              }

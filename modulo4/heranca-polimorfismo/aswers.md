
## codigo no index.ts


### Exercício 1
    
    Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. 
    Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome,
    email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 
    
    a) Seria possível imprimir a senha (`password`) atrelada a essa instância?

        Não é possivel imprimir a senha por é private. 
    
    b) Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?

        Somente uma vez. 


### Exercício 2
    
    Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.
    
    a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*  

       uma vez.
        
    b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

      uma vez, pois na "execução" da classe ela foi customer a gente herda o codigo que esta dentro da classe User. 

### Exercício 3
    
    Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).
    
    a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*

   
       console.log(customer1.password) nao existe esta possilidade 

       codigo no index.ts


### Exercício 4
    
    Adicione um método público à classe `User`. Esse método deve ter o nome de `introduceYourself`("apresente-se") e deve retornar a mensagem: `"Olá, bom dia!"`. As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe `Customer` chame esse método

        Metodo na classe User 

                        public introduceYourself(): string { 
                        return "Olá, bom dia !"
                        }
                    }
                   
        Saida de um console.log de um objeto gerado pela classe Customer depois do novo metodo adicionado na classe User     

          console.log(customer1.introduceYourself()): 
          
                    Chamando o construtor da classe User
                    Chamando o construtor da classe Customer
                    Customer {
                    id: '001',
                    email: 'customer1@gmail.com',
                    name: 'zacarias',
                    password: '654321',
                    purchaseTotal: 0,
                    creditCard: 'mastercard'
                    }
                    Olá, bom dia !


### Exercício 5
    
    Altere o método que você acabou de criar para que ele imprima a mensagem: `"Olá, sou ${nome do usuário}. Bom dia!"`. Realize os mesmos testes anteriores.


                    public introduceYourself(user:string): string { 
                        return `Olá, sou ${this.name}. Bom dia!`
                    }


  
## Polimorfismo**
    
    Para o exercício de prática de polimorfismo vamos fazer um sistema para auxiliar o cálculo de contas de energia elétrica para uma concessionária famosa. Basicamente, o custeamento depende do tipo do cliente. O valor base de cada kWh (unidade de consumo de energia) é R$0.75. O **Cliente Residencial** paga a tarifa cheia (ou seja, R$0.75). O **Cliente Comercial** possui um desconto de 30% do valor total (ou seja, paga R$0.53). Por fim, para o **Cliente Industrial,** há um desconto de 40% do valor total (ou seja, paga R$0.45) mais um valor fixo de R$100,00 por máquina usada na fábrica.
    
    Já deixamos prontos 5 entidades desse sistema: **Place**, **Client**, **Industry**, **Commerce** e **Residence**.


    Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

     
                        console.log(client1.calculateBill())
                        console.log(client1.consumedEnergy)
                        console.log(client1.registrationNumber)
                        console.log(client1.name)



a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*  


todas 


## 2 

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}


Essa classe é abstrata porque está representando um tipo de informação que simplesmente **abstrai** e **armazena** as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
      
      
      const tryNeWPlace = new Place("2")


        src/index.ts:133:1 - error TS1128: Declaration or statement expected.
        
        Cannot create a instance of an abstracr class 


b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*


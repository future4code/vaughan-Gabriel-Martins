class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
    //   public introduceYourself(): string { 
    //       return "Olá, bom dia !"
    //   }
      public introduceYourself(): string { 
          return `Olá, sou ${this.name}. Bom dia!`
      }
  }


//   const user1 = new User("001", "user1@gmail.com", "jose" , "123456")



//   console.log( user1)  // Nao é possivel pois eh private


  //  2 

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const customer1 = new Customer("001", "customer1@gmail.com", "zacarias" , "654321", "mastercard")
//   console.log(customer1)
  //   console.log(customer1.getCreditCard())
  //   console.log(customer1.getEmail())
  //   console.log(customer1.getId())
  //   console.log(customer1.getName())
  //   console.log(customer1.password) nao existe esta possilidade 
//   console.log(customer1.introduceYourself())




  ///  Polimorfismo 



export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais

}




const client1 : Client = {
    name: "Gabriel",
    registrationNumber: 123456,
    consumedEnergy: 150,
    calculateBill: function (): number {
        return 2;
    }
}

// console.log(client1.calculateBill())
// console.log(client1.consumedEnergy)
// console.log(client1.registrationNumber)
// console.log(client1.name)



// Exercicio2 

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

// Exercicio 3 


export class Residence extends Place {
    constructor(
        // Refere-se ao número de moradores da casa
      protected residentsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    public getResidentsQuantity = ():number => {
          return this.residentsQuantity;
    }
  }


  const minhaCasa = new Residence(200, "24200-00")
  console.log(minhaCasa.getResidentsQuantity())
    

  export class Commerce extends Place {
    constructor(
        // Refere-se à quantidade de andares do lugar
      protected floorsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
      getFloorsQuantity =(): number => { 
        return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) 
          {
          super(cep);
        }
    
    
       public getmachineryQuantity = ():number => { 
            return this.machinesQuantity
        }
    }
  

  


  
  
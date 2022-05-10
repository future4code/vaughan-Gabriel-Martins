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


//   const minhaCasa = new Residence(200, "24200-00")
//   console.log(minhaCasa.getResidentsQuantity())
    

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
  

  
     
  abstract class Humano {
      constructor(protected name: string ) {
          
      }
      public getName (): string { 
          return this.name
      }
  }  

 class Gabriel extends Humano { 
     name: string;

     constructor(protected nacionalidade: string,    name: string){ 
         super(name);
         this.name = name;
     }
     getNacionalidade():string{ 
         return this.nacionalidade
     }
 }


//  const Gabriel1  = new Gabriel("Brasil", "gabriel")
//  console.log(Gabriel1.getNacionalidade())
//  console.log(Gabriel1.name)
  

//  Exercicio 4 


// export interface Client {
//     name: string;
//     registrationNumber: number;
//     consumedEnergy: number;
//     calculateBill(): number;
//   }
  


class ClientResidencial  extends Residence  implements Client { 
    public name: string;
    private cpf : string;
    public registrationNumber: number;
    public consumedEnergy: number;

    constructor(cpf:string , name:string, registrationNumber:number, consumedEnergy: number , cep:string, residentsQuantity:number ){ 
        super(residentsQuantity ,cep)
        this.cpf = cpf;
        this.name = name;
        this.consumedEnergy = consumedEnergy;
        this.residentsQuantity = residentsQuantity;
        this.registrationNumber = registrationNumber;
    }
    getCpf = (): string => { 
        return this.cpf
    }
    calculateBill = ():number=> {
        return this.consumedEnergy * 0.75
    }

}


// OUtra forma de fazer 

class ClientResidencialOutroExemploMaisSimples  extends Residence implements Client{ 
    constructor(
       private cpf:string , 
       public name:string, 
       public registrationNumber:number, 
       public consumedEnergy: number , 
       public cep:string, 
       public residentsQuantity:number 
    ){
    super(residentsQuantity , cep)
    }
    getCep= ()=> { 
        return this.cpf
    }
    calculateBill =() => { 
        return this.consumedEnergy * 0.75;
    }
}

    const residencia1Teste  =new ClientResidencialOutroExemploMaisSimples( "1", "Gabriel", 2323 , 1000, "00323", 2 )
    console.log(residencia1Teste.calculateBill())





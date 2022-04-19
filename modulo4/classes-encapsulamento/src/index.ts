import app from "./app";
app.get("/")


class Transaction  {
   private description: string;
   private value: number;
   private date: string;

   constructor(date: string, value: number, description: string ){ 
       this.date= date ;
       this.value = value;
       this.description = description;
   }
   public getDescription(){
         return this.description;
   }
   public getValue(){ 
       return this.value;
   }
   public getDate (){ 
       return this.date
   }
  }

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(){ 
        return this.cpf
    }
    public getName(){ 
        return this.name
    }
    public getAge(){
        return this.age
    }
    public getBalance(){ 
        return this.balance
    }
    public getTransactions(){ 
        return this.transactions
    }  
    public setTransactions(transaction: Transaction){ 
        this.transactions =  [...this.transactions  ,transaction]
    }
  }

  const eu = new UserAccount("111.111,111-11", "Gabriel" , 39 )
//   console.table( eu )


  const transitionEu = new Transaction("13/04/2022" ,10 , "Arroz")
//   console.table(transitionEu)

  eu.setTransactions(transitionEu)
//   console.log(eu)


eu.setTransactions (new Transaction("20/04/2022" ,12 , "feijao"))
// console.log(eu)



// 3  

class Bank { 
   private accounts : UserAccount[];
    constructor(accounts : UserAccount[]){ 
        this.accounts = accounts;
    }
    public getAccounts(){ 
        return this.accounts;
    }
}
 
// console.log(eu)
 const bancoDoBrasil  = new Bank([eu])

console.log(bancoDoBrasil)
const teste = bancoDoBrasil.getAccounts()

console.log( "teste", teste)
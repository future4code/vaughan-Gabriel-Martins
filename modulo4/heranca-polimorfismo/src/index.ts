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
  console.log(customer1)
  //   console.log(customer1.getCreditCard())
  //   console.log(customer1.getEmail())
  //   console.log(customer1.getId())
  //   console.log(customer1.getName())
  //   console.log(customer1.password) nao existe esta possilidade 
  console.log(customer1.introduceYourself())

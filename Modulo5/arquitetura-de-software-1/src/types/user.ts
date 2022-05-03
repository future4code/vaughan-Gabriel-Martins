export enum ROLE { 
    "ADMIN" = "ADMIN",
    "USER" = "USER"
}

export class User { 

    constructor( 
       private name: string, 
       private email: string, 
       private password: string, 
       private role: ROLE 
        ){}
        public getname () { 
            return this.name
        }
        public getEmail () { 
            return this.email
        }
        public getPassword () { 
            return this.password
        }
        public getRole () { 
            return this.role
        }
}

export class UserDB  { 
    constructor(
        private id: string,
        private name: string, 
        private email: string, 
        private password: string, 
        private role: ROLE 
         ){}
         public getId () { 
             return this.id
         }
         public getname () { 
             return this.name
         }
         public getEmail () { 
             return this.email
         }
         public getPassword () { 
             return this.password
         }
         public getRole () { 
             return this.role
         }
}
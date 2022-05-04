export enum ROLE { 
    ADMIN =  "ADMIN",
    CLIENT = "CLIENT",
}


export default  class User { 
    constructor( 
        public id:string,
        public name: string, 
        public email: string, 
        public password: string
    ){}

}
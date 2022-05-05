export enum ROLE { 
    ADMIN =  "ADMIN",
    CLIENT = "CLIENT",
}


export default  class UserDBDTO { 
    constructor( 
        public id:string,
        public name: string, 
        public email: string, 
        public password: string
    ){}

}
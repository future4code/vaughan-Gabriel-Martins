
export enum  Unit  {
    "s"= "s",
    "m"= "m"
}


export class Competitors { 
    constructor(
        public  id: string,
        public  competition: string,
        public  name: string,
        public  value: number     
    ){}
}
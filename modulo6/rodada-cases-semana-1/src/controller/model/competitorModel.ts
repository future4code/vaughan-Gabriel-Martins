export interface CompetitorInputDTO { 
    competition: string
    name: string
    value: number
}
export interface CompetitorOutputDTO { 
    id:string
    competition: string
    name: string
    value: number
}

export class Competitor { 
    constructor(
        private  competition: string,
        private name: string,
        private value: number
    ){}
}
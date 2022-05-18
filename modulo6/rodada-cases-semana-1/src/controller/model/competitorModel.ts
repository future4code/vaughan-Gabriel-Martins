export interface CompetitorInputDTO { 
    competition: string
    name: string
    value: number
}
export interface CompetitorOutputDTO extends CompetitorInputDTO { 
    id:string
}

export class Competitor { 
    constructor(
        private  competition: string,
        private name: string,
        private value: number
    ){}
}
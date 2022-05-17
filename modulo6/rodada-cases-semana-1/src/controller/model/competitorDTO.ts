export interface CompetitorDTO { 
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
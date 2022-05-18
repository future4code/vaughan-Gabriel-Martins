export interface CompetitionInputDTO { 
    competitionName: string
    status: string
}
export interface CompetitionOutputDTO extends CompetitionInputDTO { 
    id:string
}


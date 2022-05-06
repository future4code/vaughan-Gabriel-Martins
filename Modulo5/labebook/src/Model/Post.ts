
export enum TYPE { 
    NORMAL ="NORMAL", 
    EVENTO = "EVENTO"
}



export  type PostInputDTO = { 
    picture: string, 
    description: string, 
    type: TYPE
    
}

export  type PostDBDTO = { 

    id: string,
    picture: string, 
    description: string, 
    type: TYPE,
    created_at: string
    
}
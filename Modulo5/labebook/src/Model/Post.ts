
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

    picture: string, 
    description: string, 
    type: TYPE,
    createdAt: string
    
}
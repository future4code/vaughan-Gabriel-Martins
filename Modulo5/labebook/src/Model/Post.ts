
export enum TYPE { 
    NORMAL ="NORMAL", 
    EVENTO = "EVENTO"
}



export  type PostInputDTO = { 
    picture: string, 
    description: string, 
    type: TYPE, 
    token: string
    
}

export  type PostDBDTO = { 

    id: string,
    picture: string, 
    description: string, 
    type: TYPE,
    created_at: string
    post_user_id: string 
    
}
export  interface PostOutDTO  { 

    id: string,
    picture: string, 
    description: string, 
    type: TYPE,
    created_at: Date
    post_user_id: string
    
}

export interface PostByIdInputDTO { 
    id: string
}
export interface PostByIdDTO { 
    id: string
}
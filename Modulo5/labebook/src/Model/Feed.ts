export interface feedInputDTO { 
    token : string
}


export interface feedInputDBDTO { 
    "id" : string
    "name" : string 
    "email" : string 
    "password": string 
    "ROLE": string 
    "id_user": string 
    "id_friend": string 
    "picture": string 
    "description" : string 
    "created_at" : Date
    "type" :string 
    "post_user_id" : string 
}

export interface FeedUser { 
    "id" : string
    "name" : string 
    "id_user": string 
    "picture": string 
    "description" : string 
    "created_at" : Date
    "type" :string 
    "post_user_id" : string 
}
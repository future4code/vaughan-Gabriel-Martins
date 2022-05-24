export interface feedInputDTO { 
    token : string
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

export interface inputDTO  { 
    token : string,  
    type:  string
}
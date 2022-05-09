export interface likesInputDTO  { 
    token: string, 
    postId: string 
}

export interface likesInputDBDTO  { 
    id: string,
    user_id: string,
    post_id: string 
}

export interface likesOutputDBDTO  extends likesInputDBDTO {}


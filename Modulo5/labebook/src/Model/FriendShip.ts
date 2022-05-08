export interface friendShipInputDTO { 
    id: string; 
    token: string;
}
export interface friendShipDBOutputtDTO { 
    id: string
    id_user: string
    id_friend: string
}
export interface unfriendShipDBOutputtDTO { 
    id_user: string
    id_friend: string
}



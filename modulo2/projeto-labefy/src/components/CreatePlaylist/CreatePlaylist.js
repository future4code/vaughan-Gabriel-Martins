import React from "react";
import axios from "axios";

import { AuthorizationUser, BASE_URL } from "../../constants/urls";

import {CreatePlaylistBox} from "./styled"


export default class CreatePlaylist extends React.PureComponent{ 
    state={ 
      createPlaylist:'',
    }

    createPlaylist = () => { 
        const url = BASE_URL;
        const axiosConfig = {headers:{Authorization: AuthorizationUser }}
        const body = {name: this.state.createPlaylist } 

        axios
            .post(url,body,axiosConfig)
            .then(res => { 
                this.props.getAllPlaylists()
                console.log(res)
                alert("PlayList Criada")
            })
            .catch(err => console.log(err))
    }

    createPlaylistInput =(e)=> { 
       this.setState({ createPlaylist : e.target.value})
    }

    onClickAdd =()=>{ 
        this.createPlaylist()
    }

    render(){
        return( 
            <CreatePlaylistBox>
            <h1> Create a PlayList</h1> 
            <input value={this.state.createPlaylist} 
            onChange={this.createPlaylistInput}/>
            <button onClick={this.onClickAdd}>Adicionar</button>
           </CreatePlaylistBox>
        )
    }
}





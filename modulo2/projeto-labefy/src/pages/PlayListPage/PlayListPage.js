import React from "react";
import axios from "axios";

import { AuthorizationUser, BASE_URL } from '../../constants/urls';
import { PlayListToScreenBox } from './styled';

import  CreatePlaylist  from "../../components/CreatePlaylist/CreatePlaylist";

class PlayListPage extends React.Component {
  state = {
    playLists: [],
    isedit:true,
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    const url = `${BASE_URL}`
    const axiosConfig = {
      headers: {
        Authorization: AuthorizationUser
      }
    }
    axios
      .get(url, axiosConfig)
      .then((res) => {
        console.log(res.data.result.list)
        this.setState({
          playLists: res.data.result.list
        })
      })
      .catch(err => console.log(err.response))
  }
  deletePlaylist=(id) => { 
    const url = `${BASE_URL}/${id}`; 
    const axiosConfig = {headers:{Authorization:AuthorizationUser}}

    axios
      .delete(url, axiosConfig)
      .then(res => {
        console.log(res);
        this.getAllPlaylists();
      })
      .catch(err => console.log( err));

  }



  createPlaylistEdit = () => {
    this.setState({
      isedit: !this.state.isedit
    })   
    }
    
  onClickDelete = (id) => { 
    this.deletePlaylist(id)
  }
  


  render() {
    console.log('playslist', this.state.playLists)
    const playListToScreen = this.state.playLists.map(item => {
      return<PlayListToScreenBox><div
        key={item.name}
        onClick={() => this.props.onClickChangingPageToDetail(item.id)}
      > 
        {item.name} 

      </div>
        <button onClick={() =>this.onClickDelete(item.id)}>X</button>
      </PlayListToScreenBox>
      
    })
    return (
      <>
        <h1>PlayListPage</h1>
        <button onClick={this.createPlaylistEdit}>Criar PlayList</button>
        <div>{playListToScreen}</div>
        {this.state.isedit || <CreatePlaylist
        getAllPlaylists={this.getAllPlaylists}
        />}
      </>
    )
  }
}
export default PlayListPage;
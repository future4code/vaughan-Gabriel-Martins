import axios from "axios";
import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { BASE_URL,  AuthorizationUser } from "../../constants/urls";
import {TracksBox} from './styled'



class PlayListDetailPage extends React.Component  { 
  state ={ 
    playlistTracks:[],
    nameMusic:'',
    nameArtist:'', 
    url:'',
    music:'',
  }

  componentDidMount(){
    this.getPlaylistTracks(this.props.listId)
    console.log('didmount')
  }
   
  getPlaylistTracks =(id)=>{ 
    const url= `${BASE_URL}/${id}/tracks`
    const axiosConfig ={headers:{Authorization: AuthorizationUser}}
    axios
      .get(url, axiosConfig)
      .then(res =>{
        this.setState({
          playlistTracks: (res.data.result.tracks),
          nameMusic:'',
          nameArtist:'', 
          url:'',
        }) 
      })
      .catch( err => console.log(err))
  }

  addTrackToPlaylist = (id)=> { 
    const url= `${BASE_URL}/${id}/tracks`
    const axiosConfig ={headers:{Authorization: AuthorizationUser}}
    const body ={ name:this.state.nameMusic , artist:this.state.nameArtist , url:this.state.url }

    axios
      .post(url,body,axiosConfig)
      .then(res => { 
        console.log(res)
         this.getPlaylistTracks(this.props.listId);
         alert('Musica Adicionada');
      })
      .catch(err => console.log(err))
  }

  onChangeNameMusic =(e)=>{
    this.setState({nameMusic:e.target.value})
  }
  onChangeNameSinger =(e) => { 
    this.setState({ nameArtist:e.target.value})
  }
  onChangeURL =(e)=> { 
    this.setState({url:e.target.value})
  }
  addMusic =() => { 
    console.log('clicado')
    this.addTrackToPlaylist(this.props.listId)
  }

  // givenUrl = (url)=>{ 
  //   this.setState({music : new Audio(url)})
  //   console.log(this.state.music)
  // }
  
  onClickPlay = ()=> { 
    console.log('play clicado')
    // this.state.music.play()
  }
  onClickPause = ()=> { 
    // this.state.music.pause()
    console.log('pause clicado')

  }
  render(){ 
    // console.log(this.state.playlistTracks)
    console.log(this.props.listId)
     const tracks = this.state.playlistTracks.map(item => { 
       return<TracksBox key={item.id} >
          <p>{item.name}</p>
          <p>{item.artist}</p>
          <p>{item.url} </p>
          <p>{item.id}</p>
        {/* <ReactAudioPlayer src={item.url}  controls/> */}

        <audio id="Test_Audio" controls>
        <source src={item.url} type="audio/mpeg"/>
        </audio>

       </TracksBox> 
     })


    return(  
          
        <div>
        <button onClick={this.props.onClickGotoList}>Voltar</button>

        <h1>PlayListDetailPage</h1>
        <input value={this.state.nameMusic} onChange={this.onChangeNameMusic} 
        placeholder="Nome da musica"/>
        <input value={this.state.nameArtist} onChange={this.onChangeNameSinger} 
        placeholder="Nome da cantor"/>
        <input value={this.state.url} onChange={this.onChangeURL} placeholder="URL"/>
        <button onClick={this.addMusic}>Add Music</button>
        {tracks}
        </div>
    )
  }

}

export default PlayListDetailPage;
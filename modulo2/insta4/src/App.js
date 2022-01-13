import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
// import NewPost from './components/NewPost/NewPost'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`




class App extends React.Component {
  
  state = { 
    users : [
      { id:1,
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      { id:2,
        nomeUsuario:'josé',
        fotoUsuario:'https://picsum.photos/51/50',
        fotoPost:"https://picsum.photos/200/151"
      },
      
      {
        id:3,
        nomeUsuario:'bruno',
        fotoUsuario:'https://picsum.photos/52/50',
        fotoPost:'https://picsum.photos/200/152'
      }
      
    ],
    nomeUsuario:'',
    fotoUsuario:'',
    fotoPost:'',
  };


    onChangeFotoPost =(e)=>{ 
        this.setState({
        fotoPost:e.target.value

        }) 

    };
    onChangeFotoUsuario =(e)=>{
        this.setState({ 
            fotoUsuario: e.target.value          
        })

    };
    onChangeNomeUsuario=(e)=>{ 
        this.setState({
            nomeUsuario:e.target.value
        })
    };



  onClickNewPost =()=>{
   const newUsuarios = [{id: Math.random(),  nomeUsuario:this.state.nomeUsuario,  fotoUsuario:this.state.fotoUsuario, fotoPost: this.state.fotoPost }, ...this.state.users]

  this.setState({
    users: newUsuarios,
    nomeUsuario:'',
    fotoUsuario:'',
    fotoPost:''

  })

  }


render() {
    

    
    const postUser = this.state.users.map(user=> {
      return(
        <Post
        key={user.id}
        nomeUsuario={user.nomeUsuario}
        fotoUsuario={user.fotoUsuario}
        fotoPost={user.fotoPost}
      />
      );
    })
     
    return (
      <>
       <MainContainer>  
       <div> 
        <input value={this.state.fotoPost} onChange={this.onChangeFotoPost} placeholder="Link da Foto Post"/>
        <input value={this.state.fotoUsuario} onChange={this.onChangeFotoUsuario} placeholder="Link da Foto Usuario"/>
        <input value={this.state.nomeUsuario} onChange={this.onChangeNomeUsuario} placeholder="Nome do Usuario "/>
        <button onClick={this.onClickNewPost} >New Post</button>
       </div>
       {postUser}
      </MainContainer>
      </>
    );
  
}}

export default App;

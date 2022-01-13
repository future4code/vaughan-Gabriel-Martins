// import React from "react";
// import styled from "styled-components";

// const DivNewPost = styled.div`
// display:flex;
// flex-direction: column;
//  width:300px;
// //  align-items:center;
// `
// const ButtonNewPost = styled.button`
// width:50%
// align-self:center;

// `


// class NewPost extends React.Component { 

//     state = { 
//         nomeUsuario:'',
//         fotoUsuario:'',
//         fotoPost:''
//     }

//     onChangeFotoPost =(e)=>{ 
//         this.setState({
//          fotoPost:  e.target.value

//         }) 
    
//     };
//     onChangeFotoUsuario =(e)=>{
//         this.setState({ 
//             fotoUsuario: e.target.value          
//         })

//     };
//     onChangeNomeUsuario=(e)=>{ 
//          this.setState({
//              nomeUsuario:e.target.value
//          })
//     };
    

    
    
    
    
    
//     render() { 
//         this.newUser = [{ fotoPost: this.state.fotoPost , nomeUsuario:this.state.nomeUsuario,  fotoUsuario:this.state.fotoUsuario  }, ...this.props.users]
//      console.log(this.newUser)
//     return ( 
//     <div> 
//         <input value={this.state.fotoPost} onChange={this.onChangeFotoPost} placeholder="Link da Foto Post"/>
//         <input value={this.state.fotoUsuario} onChange={this.onChangeFotoUsuario} placeholder="Link da Foto Usuario"/>
//         <input value={this.state.nomeUsuario} onChange={this.onChangeNomeUsuario} placeholder="Nome do Usuario "/>
//         <button >New Post</button>
//     </div>
//     )}
// }


// export default NewPost;





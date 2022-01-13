import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar  from '../../img/share.svg'
import star_white from "../../img/star_white.svg"
import star_black from "../../img/star_black.svg"



import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import SecaoCompartilhar from "../SecaoCompartilhar/SecaoCompartilhar"

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  `
  
  const FooterBox = styled.div`
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85px; 
`


const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`



class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    compartilhar:false, 
    star: false
  }

  onClickCurtida = () => {
    if(!this.state.numeroCurtidas){ 
         this.setState({
           curtido:true,
           numeroCurtidas: this.state.numeroCurtidas + 1
        })
    }else{ 
         this.setState({
           curtido:false,
           numeroCurtidas: this.state.numeroCurtidas - 1
         })

    }
  }



  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => { 
    this.setState({
      compartilhar:!this.state.compartilhar
    })
  }

  onClickSave = () => { 
    this.setState({ 
      star:!this.state.star
    })

  }
   
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

     
     let starSave;
     
     (this.state.star ? starSave = star_black : starSave = star_white );

    
    let componenteCompartilhar
    if(this.state.compartilhar){ 
      
      componenteCompartilhar = <SecaoCompartilhar/>
    }
     

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>

        <FooterBox>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={starSave}
          onClickIcone={this.onClickSave}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
        </FooterBox>

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post
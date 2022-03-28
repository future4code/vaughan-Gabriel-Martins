import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

   const [curtida, setCurtida] =useState(true);
   const [comentando, setComentando] =useState(false);
   const [iconeCurtida,setIconeCurtida] =useState(iconeCoracaoBranco);
   const [comentartioArray, setComentarioArray] =useState(['']);
   const [valorContador, setValorContador] =useState(0);
   const [comentarioEnviado, setComentarioEnviado] =useState('');


  const onClickCurtida = () => { setCurtida(!curtida) ;

  if(curtida) { 
    setIconeCurtida(iconeCoracaoPreto);
  }else{ 
    setIconeCurtida(iconeCoracaoBranco);
  }
  }

  const onClickComentario = () => {
    setComentando(!comentando);
    console.log(comentando)
    // caixaDeComentario()
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentartioArray, comentario]
    setComentarioArray(listaDeComentarios)
    setValorContador(valorContador + 1 )
    
  }

  const caixaDeComentario =() => {return <SecaoComentario 
    comentarioEnviado={comentarioEnviado}
    enviarComentario={enviarComentario} />}
  


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          ValorContador={valorContador}
        />
      </PostFooter>
      {comentando && caixaDeComentario()}
      {comentando && comentartioArray.map( item => <p key={Math.random()}>{item}</p>)}
    </PostContainer>
  )
}

export default Post
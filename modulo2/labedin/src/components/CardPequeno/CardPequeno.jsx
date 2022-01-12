
import React from "react";
import styled from "styled-components";


const Img = styled.img`
 width:2rem;
 margin-right:1rem;
`
const Container = styled.div`
display: flex;
width:40vw;
align-items: center;
border: 0.5px solid black;
padding: 20px 10px;
margin-bottom: 10px;
`
const ContainerNomeConteudo = styled.div`
display: flex;
`




const CardPequeno = ({imagem, nome, conteudo}) =>{ 


 return ( 
     <Container>
         <Img src={imagem}/>
         <ContainerNomeConteudo> 
             <h4>{nome}</h4>
             <p>{conteudo}</p>
         </ContainerNomeConteudo>
         
     </Container>
 )

}


export default CardPequeno; 

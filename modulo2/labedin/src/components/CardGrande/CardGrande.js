import React from 'react';
import styled from "styled-components";
// import './CardGrande.css'

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Img = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const DivH4P = styled.div` 
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const H4 = styled.h4`
margin-bottom: 15px;
`


function CardGrande({imagem , nome, descricao}) {
    return (
        <BigcardContainer>
            <Img src={ imagem } />
            <DivH4P>
                <H4>{ nome }</H4>
                <p>{ descricao }</p>
            </DivH4P>
        </BigcardContainer>
    )
}

export default CardGrande;
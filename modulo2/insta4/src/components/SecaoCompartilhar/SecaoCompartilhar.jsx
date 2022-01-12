import React from "react";
import styled from 'styled-components'
import facebook from '../../img/facebook.svg'
import twitter from '../../img/twitter.svg'
import instagram from "../../img/instagram.svg"


const Box = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
`
const  ButtonCompartilhar = styled.button`
height: 20px;
border: none;
background: white;
`

const ImgCompartilhar = styled.img` 
height:100%;
widht:px;/
margin: 0;
couser: pointer; 
&:hover, &:active {  
 background: red;
}
`

const clickHandler = (e) => { 
    console.log(`Foi compartilhado com no ${e.target.name}: Olha que foto linda`);
}


export default class SecaoCompartilhar extends React.Component{ 


    render(){ 
        return (
            <Box>
                <ButtonCompartilhar > <ImgCompartilhar name="Twiter" onClick={clickHandler} src={twitter}/></ButtonCompartilhar>
                <ButtonCompartilhar> <ImgCompartilhar   name="Facebook" onClick={clickHandler} src={facebook}/></ButtonCompartilhar>
                <ButtonCompartilhar > <ImgCompartilhar  name="Instagram" onClick={clickHandler}src={instagram}/></ButtonCompartilhar>
            </Box>
 

        )
    }
}
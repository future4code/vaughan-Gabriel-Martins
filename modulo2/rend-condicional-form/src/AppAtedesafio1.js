import React from "react";
import './App.css';
import styled from "styled-components";

import Etapa1 from "./Components/Etapa1"
import Etapa2 from "./Components/Etapa2"
import Etapa3 from "./Components/Etapa3"
import Final from "./Components/Final"


const MainDiv = styled.div`
display:Flex;
flex-direction: column;
align-items: center;
// position:relative;
`

const ButtonNextStep = styled.button`
// align-self: flex-end;
// position: absolute;
// top: 20%;
// right: 30%;
paddin:10px;
margin-top: 5%;
`



class App extends React.Component{ 
  state={ 
     etapa:1
  }
 
   etapaNumero = 1;
  
  onClickNextStep =()=>{
  
    {this.setState({ 
       etapa: this.state.etapa+1,
     })
    }
    this.rendereizaEtapa();
  }
  rendereizaEtapa =()=>{
    
    switch (this.state.etapa) {
     
      case 1:
          this.etapaNumero = <Etapa2/>
        break;
      case 2:
          this.etapaNumero =  <Etapa3/>
        break;
      case 3:
          this.etapaNumero =  <Final/>
        break;
      default:
        break;

      }
    }
    
    render(){ 
      console.log( this.state.etapa)
      return (
        <MainDiv>
        {(this.state.etapa === 1? <Etapa1/> :this.etapaNumero)}
        { this.state.etapa===4 ||<ButtonNextStep onClick={this.onClickNextStep}>Próxima etapa</ButtonNextStep>}
      </MainDiv>
    );
  }
  
  }
  






export default App;

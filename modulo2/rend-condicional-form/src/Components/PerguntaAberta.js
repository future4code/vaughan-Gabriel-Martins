import React from 'react';
import styled from 'styled-components';

const LabelPerguntaAberta = styled.label`
font-size:1.8rem;
font-weight: 700;
margin:1rem 0;
`


class PerguntaAberta extends React.Component{ 
   state={
      value:'',
   }


   onChangeInput =(e)=> {this.setState({value:e.target.value})}
      

   render(){ 

     return( 
         <>
         <LabelPerguntaAberta>{this.props.pergunta}</LabelPerguntaAberta>
        <input value={this.state.value}onChange={this.onChangeInput}/>
        </>
     )
   }

}

export default PerguntaAberta;

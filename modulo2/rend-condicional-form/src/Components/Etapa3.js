import React from 'react';
import styled from "styled-components";
import PerguntaAberta from './PerguntaAberta'; 
import PerguntaOpcoes from './PerguntaOpcoes'; 

// const SectionEtapa3 = styled.div`
// display:flex;
// flex-direction: column;
// align-items: center;
// `




class Etapa3 extends React.Component {

  optionChild = (data) => { 
    console.log('optionChild- Etapa3.js',data)
    this.props.optionChildEtapa(data)
  }

  render() {


    return (

      <>
        <h1>Etapa 3 - INFORMAÇOES GERAIS DE ENSINO</h1>
        {/* <h2>5. Porque você não terminou um curso de graduação?</h2> */}
        <PerguntaAberta pergunta={'5. Porque você não terminou um curso de graduação?'} />
        
        {/* <PerguntaOpcoes optionChild={this.optionChild}  pergunta={"6. Você fez algum curso complementar?"} */}
        <PerguntaOpcoes optionChild={this.optionChild}  pergunta={"6. Você fez algum curso complementar?"}
         perguntaOpcoesName={'cursos'}
         optionsPerguntaOptions={[ "Nenhum",
          "Curso técnico",
          "Curso de linguas"
          ]}/>       
      </>
        )
  }

}

        export default Etapa3;
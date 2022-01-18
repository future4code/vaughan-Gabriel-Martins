import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

// const SectionEtapa1 = styled.section`
// display:Flex;
// flex-direction: column;
// align-items: center;
// `


class Etapa1 extends React.Component {

      optionChild = (data) => { 
    console.log('optionChild- Etapa1.js',data)
    this.props.optionChildEtapa(data)
  }

    render() {

        return (
            <>
                <h1>Etapa 1 - DADOS GERAIS</h1>
                <PerguntaAberta pergunta={'1. Qual o seu nome?'} />
                <PerguntaAberta pergunta={'2. Qual a sua idade?'} />
                <PerguntaAberta pergunta={'3. Qual o seu nome?'} /> 
                <PerguntaOpcoes optionChild={this.optionChild} pergunta={"4. Qual o sua escolaridade?"} 
                 perguntaOpcoesName={"escolaridade"} 
                 optionsPerguntaOptions ={["Ensino médio incompleto",
                     "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"]}
                />
 
            
            </>
        )
    }
}


export default Etapa1;
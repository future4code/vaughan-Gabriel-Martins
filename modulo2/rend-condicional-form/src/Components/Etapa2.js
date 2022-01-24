import React from "react";
import styled from "styled-components";
import PerguntaAberta from './PerguntaAberta';

// const SectionEtapa2 = styled.section`
// display:Flex;
// flex-direction: column;
// align-items: center;
// `



class Etapa2 extends React.Component{ 

   render(){

       return( 
           <>
           <h1>Etapa 2 - INFORMACÕES DO ENSINO SUPERIOR</h1>
           {/* <h2>5. Qual curso?</h2> */}
           <PerguntaAberta pergunta={'5. Qual curso?'} />
           {/* <h2>6. Qual a unidade de ensino?</h2> */}
           <PerguntaAberta pergunta={'6. Qual a unidade de ensino?'} />

          </>
       )
       
       
    }
}

export default Etapa2;
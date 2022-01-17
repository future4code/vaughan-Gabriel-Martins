import React from 'react';
import styled from "styled-components";


// const SectionEtapa3 = styled.div`
// display:flex;
// flex-direction: column;
// align-items: center;
// `




class Etapa3 extends React.Component{

  render(){ 


    return( 

        <>
        <h1>Etapa 3 - INFORMAÇOES GERAIS DE ENSINO</h1>
        <h2>5. Porque você não terminou um curso de graduação?</h2>
        <input/>
        <h2>Você fez algum curso complementar?</h2>
        <select name="cursos" id="cursos">
                
            <option value="Nenhum">Nenhum</option>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de linguas">Curso de linguas</option>
                </select>
        </>
    )
  }

}

export default Etapa3;
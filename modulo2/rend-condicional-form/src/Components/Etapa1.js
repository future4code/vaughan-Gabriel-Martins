import React from 'react';
import styled from 'styled-components';

// const SectionEtapa1 = styled.section`
// display:Flex;
// flex-direction: column;
// align-items: center;
// `


class Etapa1 extends React.Component {

    render() {

        return (
            <>
                <h1>Etapa 1 - DADOS GERAIS</h1>
                <h2>1. Qual o seu nome?</h2>
                <input />
                <h2>2. Qual a sua idade?</h2>
                <input />
                <h2>3. Qual o seu nome?</h2>
                <input />
                <h2>4. Qual o sua escolaridade?</h2>
                <select name="escolaridade" id="escolaridade">
                    {/* <option value="Nenhum">Nenhum</option> */}
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
            </>
        )
    }
}


export default Etapa1;
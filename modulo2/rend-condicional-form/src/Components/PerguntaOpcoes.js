import React from 'react';
import styled from 'styled-components';


const LabelPerguntaOptions = styled.label`
font-size:1.8rem;
font-weight: 700;
margin:1rem 0;
`



class PerguntaOpcoes extends React.Component {
   
    onChangeOptions =(e) =>  this.props.optionChild(e.target.value)

    render() {

        return (
            <>
                <LabelPerguntaOptions>
                    {this.props.pergunta}
                </LabelPerguntaOptions>
                <select onChange={this.onChangeOptions} name="{this.props.perguntaOpcoesName}"
                    >
                    {this.props.optionsPerguntaOptions.map(item =>
                        <option key={item} value={item}>{item}
                        </option>)}
                </select>
            </>
        )
    }
}

export default PerguntaOpcoes;
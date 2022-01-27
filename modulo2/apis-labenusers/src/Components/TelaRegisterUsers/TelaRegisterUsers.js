import React from 'react';
import styled from "styled-components"

const FormBox = styled.form`
border: 1px solid black;
margin: 20% auto;
width: 450px;
height: 226px;
display:flex; 
flex-direction: column;
// align-items:center;
// justify-content:center;

label{ 
  margin: 20px 0  10px  20px ;
  font-size: 1rem;
  
}

input{ 
margin:1px 20px 0 20px;
padding: 2px 8px;
font-size: 1rem;
}

button{ 
  width: 20%;
  margin: 20px 20px ;
  padding: 4px;
  align-self: flex-end;
  font-size:0.8rem;
}
`




class TelaRegisterUsers extends React.Component {

  render() {

    return (
      <>

        <button onClick={this.props.ChangingScreen}>Troca Tela</button>

        <FormBox onSubmit={(e) => this.props.onSubmitNomeEmail(e)} >
          <label>Nome: </label>
          <input id={this.props.idNome}
            value={this.props.value1}
            onChange={(e) => this.props.onChangeHandlerNome(e.target.value)}
            placeholder={this.props.placeholder1} />

          <label>Email: </label>
          <input id={this.props.idEmail}
            value={this.props.value2}
            onChange={(e) => this.props.onChangeHandlerEmail(e.target.value)}
            placeholder={this.props.placeholder2} />
          <button>Criar Usuário</button>
        </FormBox>

      </>
    );

  }
}

export default TelaRegisterUsers;

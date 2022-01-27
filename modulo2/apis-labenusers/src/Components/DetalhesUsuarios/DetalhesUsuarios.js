import React from 'react';
import styled from "styled-components"
import axios from 'axios';

const BoxUserEmail = styled.div`
  margin: 20% auto;
  border: 1px solid black;
  width: 300px;
  p{
    border-bottom: 1px solid black;
  }
`;

const FormBox = styled.div`
margin: 20px 0;
`


class DetalhesUsuarios extends React.Component {
  state = {
    edit: true,
    nomeEdited: '',
    emailEdited: '',
    getUserByIdState:'',
  }
  funcao = (id)=>(id)=>this.props.funcao(id)
  
  editUser = (id) => {
    const url = 
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const body = { name: this.state.nomeEdited, email: this.state.emailEdited }
    const axiosConfig = {
      headers: { Authorization: "gabriel-martins-vaughan" },
    };

    axios
      .put(url, body ,axiosConfig)
      .then((response) => {
        
        alert("Usuário Editado")
        this.props.getUserById(id)
        this.setState({
          edit: true ,
          nomeEdited: '',
          emailEdited: '',
        })

      })
      .catch((err)=>
        console.log(err.response.data.message)
      )
  }

  onClickEdit = () => {
    this.setState({ edit: false })
  }
  
  // onClickSave = (id) => {
  //   this.editUser(id)
  //   this.props.getUserById(id)
  // }


  onChangeNomeEdited = (e) => {
    this.setState({
      nomeEdited: (e.target.value)

    })

  }
  onChangeEmailEdited = (e) => {
    this.setState({
      emailEdited: (e.target.value)
    })

  }
  
  
  render() {
    
    this.onClickSave = (id) => {
    this.editUser(id)
    
  }
        

    return (
      <div>
        <button onClick={this.props.goToListUser}>Voltar</button>
        {this.props.deletedScreenDetalhesUsuarios ||
          <BoxUserEmail>
            <p>Nome:{this.props.nameData}</p>
            <p>Email:{this.props.emailData}</p>
            <button
              onClick={() => this.props.onClickApagarUserEmail(this.props.idData)}
            >
              Apagar
            </button>
          </BoxUserEmail>
        }
        {
          this.state.edit ?
            <button onClick={this.onClickEdit}>Editar</button>
            :
            <FormBox>
              <input onChange={this.onChangeNomeEdited}
                value={this.state.nomeEdited} placeholder="Nome" />
              <input onChange={this.onChangeEmailEdited}
                value={this.state.emailEdited} placeholder="E-mail" />
              <button onClick={() => this.onClickSave(this.props.idData)}>Salvar</button>
            </FormBox>
        }
      </div>
    )


  }
}

export default DetalhesUsuarios;

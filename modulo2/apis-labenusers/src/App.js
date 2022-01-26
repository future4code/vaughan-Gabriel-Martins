import React from 'react';
import axios from 'axios';
import './App.css';
import TelaListUsers from './Components/TelaListUsers/TelaListUsers';
import TelaRegisterUsers from './Components/TelaRegisterUsers/TelaRegisterUsers';
import DetalhesUsuarios from './Components/DetalhesUsuarios/DetalhesUsuarios';

class App extends React.Component {
  state = {
    inputNome: '',
    inputEmail: '',
    nextScreen: false,
  }

  onChangeHandlerNome = (nomeInput) => {
    this.setState({
      inputNome: nomeInput,
    })
  }

  onChangeHandlerEmail = (emailInput) => {
    this.setState({
      inputEmail: emailInput,
    })
  }

  ChangingScreen = () => {
    this.setState({
      nextScreen: !this.state.nextScreen,
    })
  }

  currentScreen = () => {
    switch (this.state.nextScreen) {

      case true:
        return <TelaListUsers
          nextScreen={this.state.nextScreen}
          ChangingScreen ={ this.ChangingScreen}

        />

      case false:
        return <TelaRegisterUsers
          placeholder1='Nome'
          placeholder2='E-mail'
          idNome='nome'
          idEmail='email'
          value1={this.state.inputNome}
          value2={this.state.inputEmail}
          onChangeHandlerNome={this.onChangeHandlerNome}
          onChangeHandlerEmail={this.onChangeHandlerEmail}
          onSubmitNomeEmail={this.onSubmitNomeEmail}
          ChangingScreen ={ this.ChangingScreen}
        />


      default:
        return <div>'Erro no carregamento das paginas'</div>
    }
  }

  onSubmitNomeEmail = (e) => {
    e.preventDefault();
    this.createUser();
  }
  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = { name: this.state.inputNome, email: this.state.inputEmail }
    const axiosConfig = { headers: { Authorization: "gabriel-martins-vaughan" } }

    axios.post(url, body, axiosConfig)
      .then((response) => {
        alert("Usuário criado")
        this.setState({
          inputEmail: '',
          inputNome: '',
        })

      })
      .catch(erro => {
        console.log(erro)
        alert(erro.response.data.message)
      })
  }

  render() {

    return (
      <div >
        {this.currentScreen()}
      </div>
    );
  }
}
export default App;

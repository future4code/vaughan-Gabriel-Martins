import React from 'react';
import axios from 'axios';
import './App.css';
import TelaListUsers from './Components/TelaListUsers/TelaListUsers';
import TelaRegisterUsers from './Components/TelaRegisterUsers/TelaRegisterUsers';

class App extends React.Component {
  state = {
    inputNome: '',
    inputEmail: '',
    nextScreen: true,
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
  // componentDidMount(){ 
  //   this.createUser()
  // }

  ChangingScreen =() =>{ 
    this.setState({ 
      nextScreen: !this.state.nextScreen,
    })
  }
  
  onSubmitNomeEmail = (e) => {
    e.preventDefault();
    // console.log( submitNome, submitEmail)
    this.createUser();
  }
  createUser = () =>{ 
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {name:this.state.inputNome, email:this.state.inputEmail }
    const axiosConfig = {headers:{Authorization:"gabriel-martins-vaughan"}}
    
    console.log(url)
    console.log(body)
    console.log(axiosConfig)
    
    axios.post(url,body,axiosConfig)
    .then((response) => { 
      alert("Usuário criado")
      this.setState({
        inputEmail:'',
        inputNome:'',
      })
      
    })
    .catch(erro => { 
      console.log(erro)
      alert(erro.response.data.message)
    })
  }
  
  
  render() {
    console.log(this.state.nextScreen)
    
    return (
      <div >
        <button onClick={this.ChangingScreen}>Troca Tela</button>
        { this.state.nextScreen ?
        
        <TelaListUsers
     
        nextScreen={this.nextScreen}

        
        /> :

        <TelaRegisterUsers
          placeholder1='Nome'
          placeholder2='E-mail'
          idNome='nome'
          idEmail='email'
          value1={this.state.inputNome}
          value2={this.state.inputEmail}
          onChangeHandlerNome={this.onChangeHandlerNome}
          onChangeHandlerEmail={this.onChangeHandlerEmail}
          onSubmitNomeEmail={this.onSubmitNomeEmail}
        />}
      </div>
    );
  }

}

export default App;

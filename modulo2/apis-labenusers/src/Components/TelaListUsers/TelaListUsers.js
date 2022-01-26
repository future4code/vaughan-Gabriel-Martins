import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const BoxUserEmail = styled.div`
margin: 20% auto;
border:1px solid  black;
width:300px;
`
const BoxUserNames = styled.div`
margin:  10px 100px;
border:1px solid  black;
width:100px;
display:flex;
justify-content: space-between;
`


class TelaListUsers extends React.Component {

  state = {
    listUserArray: [],
    id: '',
    trocarTela: true,
    getUserByIdState: '',
    apagado: false,

  }


  componentDidMount() {
    this.getAllUsers()
  }


  // componentDidUpdate(){ 
  //   this.deleteUser()
  // }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = { headers: { Authorization: "gabriel-martins-vaughan" } }


    axios.get(url, axiosConfig)
      .then((response) => {
        this.setState({
          listUserArray: response.data,
        })
      })
      .catch((erro) => console.log(erro))

  }
  id;
  onClickApagar = (id) => {
    if (window.confirm('Deseja deletar o usuario?')) {
      // console.log(this.state.id)
      this.deleteUser(id)
    }
    return;
  }
  onClickApagarUserEmail = (id) => {
    if (window.confirm('Deseja deletar o usuario?')) {
      // console.log(this.state.id)
      this.deleteUser(id)
      this.setState({apagado : true})

    }
    // return;
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const axiosConfig = { headers: { Authorization: "gabriel-martins-vaughan" } }


    axios.delete(url, axiosConfig)
      .then((response) => {
        alert('Usuario apagado')
        this.getAllUsers()
      })
      .catch((erro) => console.log(erro.response.data.message))

  }
  getUserById = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const axiosConfig = { headers: { Authorization: "gabriel-martins-vaughan" } }

    axios.get(url, axiosConfig)
      .then((response) => {

        this.setState({
          getUserByIdState: response.data,
        })

      })
      .catch((erro) => console.log(erro.response.data.message))

  }


  usuarioClicado = (id) => {
    this.setState({ trocarTela: !this.state.trocarTela })
    this.getUserById(id)
    //  console.log( )
  }

  render() {

    return (
      <div>
        {this.state.trocarTela ?
          this.state.listUserArray
            .map(item => {
              return (<BoxUserNames key={item.id}>
                
                    {/* {'id',item.id}<br/> */}
                    <div onClick={() => this.usuarioClicado(item.id)}>
                      {item.name}
                    </div>
                    <button onClick={() => this.onClickApagar(item.id)}>X</button>
                  </BoxUserNames>
                
              
              )
            }) :
              this.state.apagado || <BoxUserEmail>
            <p>
              Nome: {this.state.getUserByIdState.name}
            </p>
            <p>
              Email:{this.state.getUserByIdState.email}
            </p>
            <button onClick={() => this.onClickApagarUserEmail(this.state.getUserByIdState.id)}>Apagar</button>
          </BoxUserEmail>
        }

      </div>
    );
  }
}

export default TelaListUsers;

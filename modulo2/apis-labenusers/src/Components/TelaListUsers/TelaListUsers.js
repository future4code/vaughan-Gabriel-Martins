import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhesUsuarios from '../DetalhesUsuarios/DetalhesUsuarios';


const BoxUserNames = styled.div`
  margin: 40px 100px;
  border: 1px solid black;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
const SearchedUserbox = styled.div`
  margin: 100px 100px;
  border: 1px solid black;
  width: 200px;
`;

class TelaListUsers extends React.Component {
  state = {
    listUserArray: [],
    id: "",
    trocarTela: true,
    getUserByIdState: "",
    apagado: false,
    seacherUserValue: '',
    erroOut:'',
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "gabriel-martins-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((response) => {
        this.setState({
          listUserArray: response.data,
        });
      })
      .catch((erro) => console.log(erro));
  };
  id;
  onClickApagar = (id) => {
    if (window.confirm("Deseja deletar o usuario?")) {
      this.deleteUser(id);
    }
    return;
  };
  onClickApagarUserEmail = (id) => {
    if (window.confirm("Deseja deletar o usuario?")) {
      this.deleteUser(id);
      this.setState({ apagado: true });
    }
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const axiosConfig = {
      headers: { Authorization: "gabriel-martins-vaughan" },
    };

    axios
      .delete(url, axiosConfig)
      .then((response) => {
        alert("Usuario apagado");
        this.getAllUsers();
      })
      .catch((erro) => console.log(erro));
  };
  getUserById = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const axiosConfig = {
      headers: { Authorization: "gabriel-martins-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((response) => {
        this.setState({
          getUserByIdState: response.data,
        });

      })
      .catch((erro) => console.log(erro.response.data.message));
  };

  searchUsers = (name) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}`
    const axiosConfig = {
      headers: { Authorization: "gabriel-martins-vaughan" },
    };

    axios
      .get(url, axiosConfig)
      .then((response) => {
        this.setState({
          getSearchUsersState: response.data,
        })
        this.getUserById(this.state.getSearchUsersState[0].id)
        this.setState({
          seacherUserValue:''
        })

      })
      .catch((erro) => { 
        alert(erro)
        this.setState({erroOut: erro})
      }
    );

  }

  usuarioClicado = (id) => {
    this.setState({ trocarTela: !this.state.trocarTela });
    this.getUserById(id);
    this.setState({ apagado: false });
  };

  goToListUser = () => {
    this.setState({ trocarTela: true });
  };

  onChangeUserSearch = (e) => {
    this.setState({ seacherUserValue: e.target.value })
  }

  searchButton = (name, email) => {
    this.searchUsers(this.state.seacherUserValue)

  }

  renderScreenOption = () => {
    switch (this.state.trocarTela) {
      case true:
        return (
          <>
            <button onClick={this.props.ChangingScreen}>Troca Tela</button>
            <input value={this.state.seacherUserValue}
              onChange={this.onChangeUserSearch}
              placeholder='Buscar usuario - nome' />

            <button onClick={this.searchButton}>Buscar</button>

            {this.state.listUserArray.map((item) => {
              return (
                <BoxUserNames key={item.id}>
                  <div onClick={() => this.usuarioClicado(item.id)}>
                    {item.name}
                  </div>
                  <button onClick={() => this.onClickApagar(item.id)}>X</button>
                </BoxUserNames>
              );
            })}
            { this.state.getUserByIdState.name? 
             <SearchedUserbox>
            <p>
              {this.state.getUserByIdState.name}
            </p>
            <p>
              {this.state.getUserByIdState.email}
            </p>
            </SearchedUserbox> : ''}
          </>
        );
      case false:
        return (
          <>
            <DetalhesUsuarios
              deletedScreenDetalhesUsuarios={this.state.apagado}
              goToListUser={this.goToListUser}
              emailData={this.state.getUserByIdState.email}
              nameData={this.state.getUserByIdState.name}
              idData={this.state.getUserByIdState.id}
              onClickApagarUserEmail={this.onClickApagarUserEmail}
              getUserById={this.getUserById}

            />
          </>
        );
    }
  };

  render() {
    return <div>{this.renderScreenOption()}</div>;
  }
}

export default TelaListUsers;

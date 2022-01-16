// import React from "react";
import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";

import "../App.css";
import send from "../img/send.svg";

let hover = 0;
const ButtonEnviar = styled.button`
  border: none;
  height: 2.2rem;
  background: rgba(220, 226, 192, 0.849);

  &:hover,
  &:active {
    border: 1px solid black;
  }
`;

const InputBox1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const InputBox = styled.div`
  display: flex;
  width: 100%;
  // height:200px;
  border-top: 1px solid black;
  align-items: center;
  justify-content: space-around;
  padding: 20px 5px;
  bottom: 0;
`;

const InputMessage = styled.input`
  width: 60%;
  height: 2.2rem;
  font-size: 1rem;
  padding: 4px 0;
`;

const NoUser = styled.div`
  font-size: 1.4rem;
  //  color: red;
  margin: 2px 10px;
  display: inline;
`;

const UserHilight = styled.p`
  font-size: 1.4rem;
  color: red;
  display: inline;
`;


const OutroUserStyle = styled.span`
 font-weight:bold;
 font-size: 0.8em;
 color: rgba(172, 170, 170, 1);
 margin-bottom:5px;  
 display: inline-block;
`

class Input extends React.Component {
  state = {
    inputMessage: "",
    inputUser: "",
    messagens: [],
    messagens1: [],
    user: "Selecione um usuario",
    isUserSelected: false,
    deleteMessage: false
  };

  onChangeInputUser = (e) => {
    this.setState({ inputUser: e.target.value });
  };

  onChangeInputMessage = (e) => {
    this.setState({ inputMessage: e.target.value });
  };

  onKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      this.onClickSend();
    }
  };
  onClickSend = () => {
    if (this.state.inputMessage.length < 1 || this.state.inputMessage === " ")
      return;
    if (this.state.user === "Selecione um usuario") {
      const isUserSelected = false;

      return;
    }
    const message = {
      id: Math.random(),
      user: this.state.user,
      messagePosition: this.messagePosition,
      message: this.state.inputMessage,
    };

    this.setState({
      messagens: [...this.state.messagens, message],
      inputMessage: "",
    });

    // console.log(this.state.messagens);
  };

  onChangeSelect = (e) => {
    this.setState({
      user: e.value,
      isUserSelected: true,
    });
  };

  onClickDelete = (e) => {
 
    const idMessageToDeleted = e.target.id;

    if (e.detail >= 2) {
      this.setState({ 
        deleteMessage : window.confirm("Are you sure that you want delete it?"),
      })
      console.log(this.state.deleteMessage);
      let messagens2
 
        this.setState({
          messagens : this.state.messagens.filter(item => item.id != e.target.id )
        })

  }
    
    console.log(this.messagens)
    // console.log(this.messagensTeste)
    console.log(idMessageToDeleted)

  };

  render() {
    const options = [
      { value: "Eu", label: "Eu" },
      { value: "Outro", label: "Outro" },
    ];
    // console.log(options);
    // console.log(this.state.user);
    // console.log(this.messagePosition);

    this.chatMessagem = this.state.messagens.map((item) => {
      if (item.user === "Eu") {
        return (
          <div  key={item.id} id={item.id} className="right box" onClick={this.onClickDelete}>
            {item.message}
          </div>
        );
      } else {
        return (
          <div key={item.id} id={item.id} className="left box" onClick={this.onClickDelete}>
            <OutroUserStyle>{item.user}:</OutroUserStyle>
            <br /> {item.message}
            <br />
          </div>
        );
      }
    });
    //   console.log(this.state.isUserSelected);
    return (
      <>
        {this.chatMessagem}

        <div>
          {this.state.isUserSelected || (
            <NoUser>
              Please select a <UserHilight>User</UserHilight> below !
            </NoUser>
          )}
        </div>
        <InputBox>
          <Select onChange={this.onChangeSelect} options={options} />
          <InputMessage
            value={this.state.inputMessage}
            onChange={this.onChangeInputMessage}
            onKeyPress={this.onKeyPressEnter}
          />
          <ButtonEnviar onClick={this.onClickSend}>
            <img src={send} />
          </ButtonEnviar>
        </InputBox>
      </>
    );
  }
}

export default Input;

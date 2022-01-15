// import React from "react";
import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";

import "../App.css";
import send from "../img/send.svg";

let hover = 0;
const ButtonEnviar = styled.button`
border: none;
height:2.2rem;
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
  height:2.2rem;
  font-size: 1rem;
  padding: 4px 0;
`;

const ChatDiv = styled.div`
  
`;

class Input extends React.Component {
  state = {
    inputMessage: "",
    inputUser: "",
    messagens: [],
    user: "Selecione um usuario",
    isUserSelected: false
  };

  onChangeInputUser = (e) => {
    this.setState({ inputUser: e.target.value });
  };

  onChangeInputMessage = (e) => {
    this.setState({ inputMessage: e.target.value });
  };

  onKeyPressEnter =(e)=>{ 
      if(e.key === "Enter" ) {

          this.onClickSend();
      }
  } 

  onClickSend = () => {
    if (this.state.inputMessage.length < 1 || this.state.inputMessage === " " )
      return;
    if (  this.state.user ==="Selecione um usuario" ){
        const isUserSelected = false;
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
      isUserSelected:true
    });
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
          <div className="right box">
            <div key={item.id}>
            {item.message}
            </div>

            <br />
          </div>
        );
      } else {
        return (
          <div key={item.id} className="left box">
            {item.user}<br/> {item.message}
            <br />
          </div>
        );
      }
    });
    //   console.log(this.state.isUserSelected);
    return (
      <>
      <>
        {this.chatMessagem}
      </>
         <div>{ this.state.isUserSelected ||  "Please select a User"}</div> 
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

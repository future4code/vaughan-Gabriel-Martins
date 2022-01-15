// import React from "react";
import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";

import "../App.css";
import send from "../img/send.svg";

let hover = 0;
const ButtonEnviar = styled.button`
  border: none;
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
  // position: absolute;
  bottom: 0;
`;

// const InputUser = styled.select`
// width:16%;
// height:
// font-size:1.0rem;
// padding: 4px 0;
// `
const InputMessage = styled.input`
  width: 60%;
  // height:100px;
  font-size: 1rem;
  padding: 4px 0;
`;

// const ChatDiv = styled.div`
//   word-wrap: break-word;
//   border: 0.5px solid gray;
//   // width: 200px;
//   border-radius: 10px;
//   box-sizing: content-box;
//   display: inline-block;
//   padding: 2px;
//   margin: 2px;

//   //  That is how we  will work left and right in the chat.
//    align-self: ${(this.state.user === "Eu"? 'flex-end' :  'flex-start' )}
// `;

class Input extends React.Component {
  state = {
    inputMessage: "",
    inputUser: "",
    messagens: [],
    user: "Selecione um usuario",
  };

  onChangeInputUser = (e) => {
    this.setState({ inputUser: e.target.value });
  };

  onChangeInputMessage = (e) => {
    this.setState({ inputMessage: e.target.value });
  };

  onClickSend = () => {
    if (this.state.inputMessage.length < 1 || this.state.inputMessage === " ")
      return;

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

    console.log(this.state.messagens);
  };

  onChangeSelect = (e) => {
    this.setState({
      user: e.value,
    });
  };

  render() {
    const options = [
      { value: "Eu", label: "Eu" },
      { value: "Outro", label: "Outro" },
    ];
    // console.log(options);



const ChatDiv = styled.div`
  word-wrap: break-word;
  border: 0.5px solid gray;
  // width: 200px;
  border-radius: 10px;
  box-sizing: content-box;
  display: inline-block;
  padding: 2px;
  margin: 2px;

  //  That is how we  will work left and right in the chat.
   align-self: ${(this.state.user === "Eu"? 'flex-end' :  'flex-start' )}
`;






    const messagePosition =
      this.state.user === "Eu" ? `color:"red"` : `color:"green"`;
    console.log(this.state.user);
    console.log(this.messagePosition);

    this.chatMessagem = this.state.messagens.map((item) => {
      return (
        <>
          <div key={item.id}>
            {item.user}: {item.message}
          </div>

          <br />
        </>
      );
    });

    return (
      <>
        <ChatDiv>{this.chatMessagem}</ChatDiv>

        <InputBox>
          <Select onChange={this.onChangeSelect} options={options} />
          <InputMessage
            value={this.state.inputMessage}
            onChange={this.onChangeInputMessage}
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

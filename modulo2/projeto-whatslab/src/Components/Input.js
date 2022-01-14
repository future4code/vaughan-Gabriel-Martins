// import React from "react";
import React, { Component } from 'react';
import Select from 'react-select';
import styled from "styled-components";


const InputBox = styled.div`
display: flex;
width:100%;
// height:200px;
border:1px solid red;
align-items: center;
justify-content: space-around;
padding:20px 5px;
position: absolute;
bottom: 0;
`

// const InputUser = styled.select`
// width:16%;
// height:
// font-size:1.0rem;
// padding: 4px 0;
// `
const InputMessage = styled.input`
width:80%;
// height:100px;
font-size:1.0rem;
padding: 4px 0;
`

const ChatDiv= styled.div`
word-wrap: break-word;
border:0.5px solid gray;
// width: 200px;
border-radius: 10px;
box-sizing:content-box;
display: inline-block;
padding:2px;
margin: 2px;
`

class Input extends React.Component{ 
  
    state={ 
        inputMessage:'',
        inputUser:'',
        messagens:[]
    }

    onChangeInputUser =(e)=>{
       this.setState({inputUser: e.target.value});
       
    }
    
    onChangeInputMessage =(e) =>{
        
        this.setState({ inputMessage:e.target.value});
    }

    
    
    onClickSend = () => { 
       const message = this.state.inputMessage;
    
       this.setState ({
           messagens : [...this.state.messagens, message], 
           inputMessage:''
       })

    }
    

    
    
    
    render() {
    
        const options = [
            { value: 'Gabriel', label: 'Eu' },
            { value: 'Outro', label: 'Outro' },
            
        ]
        console.log(options.value)


            this.onClickOption =(e) => { 
        
                console.log('teste')
            }
        
       this.chatMessagem  = this.state.messagens.map(item => { 
        return (
            <>
            <ChatDiv>   
                {item}
            </ChatDiv>
            <br/>
            </>
        )
            
       
       })
        
        return (
            <>   
           
          
           {this.chatMessagem}

           

          <InputBox>
            {/* <InputUser  value={this.inputUser} onChange={this.onChangeInputUser}  /> */}
             {/* <InputUser name="select"> */}
                {/* <option onSelect={this.onClickOption} value='1' >Outro</option>
                <option onSelect={this.onClickOption} value='2' selected>Eu</option> */}
            {/* </InputUser>          */}
            <Select options={options} />
            <InputMessage value={this.state.inputMessage}  onChange={this.onChangeInputMessage} />
            <button onClick={this.onClickSend}>en</button>
        </InputBox>
       </>
       )
    }
}


export default Input;
import styled from "styled-components";
import { AppBar, Button, Card,Fab, Toolbar, TextField } from "@material-ui/core";

export const Boxdiv = styled(Card)`
  display: flex;
  max-width: 800px;
  margin: 5px auto;
  position: relative;
  margin: 50px auto;
  flex-direction: column;
`;
export const WritePostContainer = styled.div`
  margin: 10px ;
  word-wrap: break-word;
`;

export const StyledAppBar = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 5%;
  `
export const StyledAppBarTop = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  height: 0.5rem;
  padding: 5%;
  `;
export const StyledAppBarBottom = styled(AppBar)`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  height: 3rem;
  padding: 5%;
  `;

export const StyledAppBarTitle = styled(AppBar)`
  position: relative;
  bottom: 0;
  height: 3rem;
  padding: 4px 0;
 
  `;
export const StyledToolbar = styled.div`
justify-content: space-around;
align-items: center;
flex-direction: row;
display: flex;
width: 30%;
`;
export const StyledArrows = styled.div`
position: relative;
top:100px;
left:-30px;
justify-content: space-around;
align-items: center;
flex-direction: column;
display: flex;
width: 3%;
`;


export const StyledSearch = styled.div`
display: flex;
box-sizing: border-box;
margin: 0 auto;
padding: 4px 12px;
max-width:800px;
justify-content:space-between;
background:white;
border-radius: 5px;
box-shadow: 0 0 2px 2px  #CCC;
`
import styled from "styled-components";
import { AppBar, Button, Fab, Toolbar, TextField } from "@material-ui/core";

export const Boxdiv = styled.div`
  position: relative;
  margin: 50px auto;
  border: 1px solid red;
  width: 50vw;
  display: flex;
  flex-direction: column;
`;
export const WritePostContainer = styled.div`
  margin: 50px auto;
  max-width: 500px;
  min-height: 100px;
  border: 1px solid red;
  word-wrap: break-word;
  width: 42vw;
  /* display:flex; */
  /* flex-direction: column; */
  /* align-items:center; */
`;

export const StyledAppBar = styled(AppBar)`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 3rem;
  padding: 5%;
  /* top:auto; */
  `;
export const StyledToolbar = styled.div`
justify-content: space-around;
align-items: center;
flex-direction: row;
display: flex;
width: 30%;
border: 1px solid red;
`;

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
  margin: 2% auto;
  width: 40vw;
  max-width: 1000px;
  /* min-height: 100px; */
  /* height: 10vh; */
  border: 1px solid red;
  word-wrap: break-word;
  /* display:flex; */
  /* flex-direction: column; */
  /* align-items:center; */
`;

// export const StyledAppBar = styled(AppBar)`
export const StyledAppBar = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  bottom: 0;
  /* height: 3rem; */
  padding: 5%;
  /* top:auto; */
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
  /* top:auto; */
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
  /* top:auto; */
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
border: 1px solid red;
`;
export const StyledArrows = styled.div`
position: relative;
top:100px;
left:-30px;
justify-content: space-around;
align-items: center;
flex-direction: column;
display: flex;
/* height:10%; */
width: 3%;
border: 1px solid red;
`;

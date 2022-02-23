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
  width: 42vw;
  /* display:flex; */
  /* flex-direction: column; */
  /* align-items:center; */
`;

export const StyledAppBar = styled(AppBar)`
  position: relative;
  bottom: 0;
  height: 3rem;
  /* top:auto; */
`;
export const StyledToolbar = styled.div`
  border: 1px solid red;
  height: 1000px;
`;

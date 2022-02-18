import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {SupervisorAccount , FlightTakeoff} from '@material-ui/icons';
import {Button1} from "./Styled";
import {DivContainerPublico, DivContainerPrivado} from "./Styled";
import { Typography } from "@material-ui/core";





const HomePage = ()=> { 
  const navigate = useNavigate();

    const handlerClickViagens = () => { 
      navigate("/trips/list")
    }
    const handlerClickAdmin = () => { 
      navigate("/admin/trips/list")
    }


    return(
        <>

          <DivContainerPrivado>
          <Button
          onClick={handlerClickAdmin}
          variant="outlined"
          // color="secondary"
          size="large"
          endIcon={
          <SupervisorAccount/>}
          >Admin</Button
          >
          </DivContainerPrivado>

          <Typography
          align="center"
          variant="h2"
          component="h1"
          // color="primary"
          // gutterBottom
          >LabeX</Typography>
          <DivContainerPublico>
          
         
          <Button1
          onClick={handlerClickViagens}

          variant="contained"
          size="large"
          // color="primary"
          endIcon={
            <FlightTakeoff 
            />}
          >Viagens</Button1>
          </DivContainerPublico>
        </>
    )



}


export default HomePage;
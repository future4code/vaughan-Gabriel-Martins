import React from "react";
import Button from '@material-ui/core/Button';
import {SupervisorAccount , FlightTakeoff} from '@material-ui/icons';
import {Button1} from "./Styled";
import {DivContainerPublico, DivContainerPrivado} from "./Styled";





const HomePage = ()=> { 


    return(
        <>
          <DivContainerPrivado>

          <Button
          variant="outlined"
          color="secondary"
          size="large"
          endIcon={
          <SupervisorAccount/>}
          >Admin</Button
          >
          </DivContainerPrivado>
          <DivContainerPublico>
          
          <Button1
          variant="contained"
          size="large"
          color="primary"
          endIcon={
            <FlightTakeoff 
            />}
          >Viagens</Button1>
          </DivContainerPublico>
        </>
    )



}


export default HomePage;
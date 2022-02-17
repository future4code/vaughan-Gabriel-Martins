import React from "react-dom";
import { Typography, Button, TextField, MenuItem, Menu, MenuList } from "@material-ui/core";
import { Bobydiv, StyledContainerButtons, StyledContainer } from "./Style";
import {planets} from "./planets";

const CreateTripPage = () => {

    console.log(planets)
  return (
    <Bobydiv>
      <StyledContainer>
        <Typography 
        align="center"
        variant='h4' 
        component='h1' 
        color='textSecondary'>
          Criar Viagem
        </Typography>

        <TextField
        margin="normal"
         required
         type="text"
         label="Nome"
         variant="outlined"
        />
          <TextField
        required
          select
          label="Selecione o planeta"
        //   value={currency}
        //   onChange={handleChange}
          variant="outlined"
        //   SelectProps={{
        //     native: true,
        //   }}
        >
          {planets.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          
        <TextField
        margin="normal"
         required
         type="date"
         variant="outlined"
        />
        <TextField
        margin="normal"
         required
         type="text"
         label="Descrição"
         variant="outlined"
        />
        <TextField
        margin="normal"
         required
         type="number"
         label="Duração em dias"
         variant="outlined"
        />
      <StyledContainerButtons>
        <Button variant='contained'>Voltar</Button>
        <Button variant='contained'>Criar</Button>
      </StyledContainerButtons>
      </StyledContainer>

    </Bobydiv>
  );
};

export default CreateTripPage;

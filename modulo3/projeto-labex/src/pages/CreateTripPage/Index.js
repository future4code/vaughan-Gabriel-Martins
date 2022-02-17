import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, TextField, MenuItem } from "@material-ui/core";
import { Bobydiv, StyledContainerButtons, StyledContainer } from "./Style";
import { planets } from "./planets";

const CreateTripPage = () => {
  const [selectPlanet, setSelectPlanet] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState("");

  const navigate = useNavigate();

  const handledSubmit = (e) => {
    e.preventDefault();
    console.log(name, date, description, days, selectPlanet);
  };

  return (
    <Bobydiv>
      <form noValidate onSubmit={handledSubmit}>
        <StyledContainer>
          <Typography
            align='center'
            variant='h4'
            component='h1'
            color='textSecondary'
          >
            Criar Viagem
          </Typography>

          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            margin='normal'
            required
            type='text'
            label='Nome'
            variant='outlined'
          />
          <TextField
            required
            margin='normal'
            select
            label='Selecione um planeta'
            value={selectPlanet}
            onChange={(e) => setSelectPlanet(e.target.value)}
            variant='outlined'
            SelectProps={{
              native: true,
            }}
          >
            {planets}
          </TextField>

          <TextField
            onChange={(e) => setDate(e.target.value)}
            value={date}
            margin='normal'
            aria-label='data'
            required
            type='date'
            variant='outlined'
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            margin='normal'
            required
            type='text'
            label='Descrição'
            variant='outlined'
          />
          <TextField
            onChange={(e) => setDays(e.target.value)}
            value={days}
            margin='normal'
            required
            type='number'
            label='Duração em dias'
            variant='outlined'
          />
          <StyledContainerButtons>
            <Button
              onClick={() => navigate("/admin/trips/list")}
              variant='contained'
            >
              Voltar
            </Button>

            <Button type='submit' variant='contained'>
              Criar
            </Button>
          </StyledContainerButtons>
        </StyledContainer>
      </form>
    </Bobydiv>
  );
};

export default CreateTripPage;

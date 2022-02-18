import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from '../../Hooks/useForm';
import { Typography, Button, TextField, MenuItem } from "@material-ui/core";
import { Bobydiv, StyledContainerButtons, StyledContainer } from "./Style";
import PostCreateTrip from "../../Service/PostCreateTrip";
import { planets } from "./planets";

const CreateTripPage = () => {
  const initialValues = {planet:"", name:"", date:"", description:"", durationInDays:""}

  const  {form, onChange} = useForm(initialValues)

  const navigate = useNavigate();

  const handledSubmit = (e) => {
    e.preventDefault();
    console.log("18",form)
    PostCreateTrip(form)
  };

  return (
    <Bobydiv>
      <form  onSubmit={handledSubmit}>
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
          name="name"
            value={form.name}
            onChange={onChange}
            margin='normal'
            required
            type='text'
            label='Nome'
            variant='outlined'
          />
          <TextField
            name="planet"
            value={form.planet}
            onChange={onChange}
            required
            margin='normal'
            select
            label='Selecione um planeta'
            variant='outlined'
            SelectProps={{
              native: true,
            }}
          >
            {planets}
          </TextField>

          <TextField
            name="date"
            value={form.date}
            onChange={onChange}
            margin='normal'
            aria-label='data'
            required
            type='date'
            variant='outlined'
          />
          <TextField
            name="description"
            value={form.description}
            onChange={onChange}
            margin='normal'
            required
            type='text'
            label='Descrição'
            variant='outlined'
          />
          <TextField
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
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

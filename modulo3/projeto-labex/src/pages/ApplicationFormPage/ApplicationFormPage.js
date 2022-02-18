import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router";
import { MainContainer } from "./Style";
import PostApllyToTrip from "../../Hooks/PostApplytoTrip";
import GetTrips from "../../Hooks/GetTrips";
import { Bobydiv, StyledContainerButtons } from "../ListTripsPage/Style";
import { Button, Typography } from "@material-ui/core";
import { DataCountries } from "./Data";
import useForm from "../../Hooks/useForm";

const ApplicationFormPage = () => {
  const [dataGetTrips, setDataGetTrips] = useState([]);
  const initialState = {
    selectCountry: "",
    selectViagem: "",
    nome: "",
    idade: "",
    textoCandidatura: "",
    profissao: "",
  };
  const { form, onChange } = useForm(initialState);

  const navigate = useNavigate();

  // URL return
  const handlerClickVoltar = () => {
    navigate("/trips/list");
  };
  const saveData = (data) => {
    setDataGetTrips(data);
    // console.log(data.map(item=> item.id))
  };
  useEffect(() => {
    GetTrips(saveData);
  }, []);

  // Clicks - Subumit -  Onchanges Handlers local using arrow functions
  const handlerSubmitEnviar = (e) => {
    e.preventDefault();
    // console.log(form)
    //!! Id é a viagem escolhida esta dentro do form como viagem
    PostApllyToTrip(form)
  };

  return (
    <Bobydiv>
      <MainContainer>
        <Typography
          color='textSecondary'
          align='center'
          variant='h4'
          component='h1'
          gutterBottom
        >
          Inscreva-se para uma viagem
        </Typography>
        <form autoComplete='off' 
        onSubmit={handlerSubmitEnviar}
        >
          <TextField
            name="viagem"
            value={form.viagem}
            onChange={onChange}
            fullWidth
            variant='outlined'
            select
            defaultValue={"viagem"}
            required
            label='Escolha uma viagem'
            SelectProps={{
              native: true,
            }}
          > 
          <option selected disabled > </option>
            {dataGetTrips.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </TextField>
          <TextField
            name='name'
            value={form.name}
            onChange={onChange}
            fullWidth
            required

            label='Nome'
            variant='outlined'
            margin='normal'
          />
          <TextField
            name='age'
            value={form.age}
            onChange={onChange}
            margin='normal'
            fullWidth
            required
            type='number'
            InputProps={{ inputProps: { min: 18 } }}
            label='Idade'
            variant='outlined'
          />
          <TextField
            name='profession'
            value={form.profession}
            onChange={onChange}
            margin='normal'
            fullWidth
            required
            label='Profissão'
            variant='outlined'
          />
          <TextField
            name='applicationText'
            value={form.applicationText}
            onChange={onChange}
            margin='normal'
            fullWidth
            required
            label='Texto de Candidatura'
            variant='outlined'
          />
          <TextField
            name='country'
            value={form.country}
            onChange={onChange}
            margin='normal'
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha um Pais'
            SelectProps={{
              native: true,
            }}
          >
            {" "}
            <option value={""}  selected disabled>
              Escolha um País
            </option>
            {DataCountries.map((option) => (
              <option key={option.ordem} value={option.nome}>
                {option.nome}
              </option>
            ))}
          </TextField>
          <StyledContainerButtons>
            <Button onClick={handlerClickVoltar} variant='contained'>
              Voltar
            </Button>
            <Button type='submit' variant='contained'>
              Enviar
            </Button>
          </StyledContainerButtons>
        </form>
      </MainContainer>
    </Bobydiv>
  );
};

export default ApplicationFormPage;

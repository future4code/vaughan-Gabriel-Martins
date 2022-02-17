import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { MainContainer } from "./Style";
import { Bobydiv, StyledContainerButtons } from "../ListTripsPage/Style";
import { Button, Typography } from "@material-ui/core";
import { DataCountries } from "./Data";

const ApplicationFormPage = () => {
  const [selectCountry, setSelectCountry] = useState("");
  const [selectViagem, setSelectViagem] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [textoCandidatura, setTextoCandidatura] = useState("");

  const navigate = useNavigate();

  // URL return

  const handlerClickVoltar = () => {
    navigate("/trips/list");
  };

  // Clicks - Subumit -  Onchanges Handlers local using arrow functions 

  const handlerSubmitEnviar = (e) => {
    e.preventDefault();
    console.log(idade , profissao , selectCountry , textoCandidatura , nome)

    // Call The right function - API 


    
    // Go back to trips list 
    navigate("/trips/list")

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
        <form noValidate autoComplete='off' onSubmit={handlerSubmitEnviar}>
          <TextField
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha uma viagem'
            value={selectViagem}
            onChange={(e)=>setSelectViagem(e.target.value)}
            SelectProps={{
              native: true,
            }}
          >
            {["Escolha uma viagem", "eu", "vc"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            fullWidth
            required
            value={nome}
            // onChange={handlerChangeNome}
            onChange={(e)=>setNome(e.target.value)}
            label='Nome'
            variant='outlined'
            margin='normal'
          />
          <TextField
            margin='normal'
            fullWidth
            required
            value={idade}
            // onChange={handlerChangeIdade}
            onChange={(e)=>setIdade(e.target.value)}
            label='Idade'
            type='number'
            variant='outlined'
          />
          <TextField
            margin='normal'
            fullWidth
            required
            value={profissao}
            // onChange={handlerChangeProfissao}
            onChange={(e)=>setProfissao(e.target.value)}
            label='Profissão'
            variant='outlined'
            />
          <TextField
            margin='normal'
            fullWidth
            required
            value={textoCandidatura}
            // onChange={handlerChangetextoCandidatura}
            onChange={(e)=>setTextoCandidatura(e.target.value)}
            label='Texto de Candidatura'
            variant='outlined'
          />
          <TextField
            margin='normal'
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha um Pais'
            value={selectCountry}
            // onChange={handlerChangePais}
            onChange={(e)=>setSelectCountry(e.target.value)}
            SelectProps={{
              native: true,
            }}
          >
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
          <Button 
          type="submit"
          variant='contained'>Enviar</Button>
        </StyledContainerButtons>
        </form>
      </MainContainer>
    </Bobydiv>
  );
};

export default ApplicationFormPage;

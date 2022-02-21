import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@material-ui/core";
import { ButtonDiv, CandAproContainer, CandPendContainer, CandPendContainer2, MainContainer, TitleContainer } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import useProtected from "../../Hooks/useProtected";
import GetTripsDetail from "../../Service/GetTripDetail";
import DecideCandidate from "../../Service/DecideCandidate";

const TripDetailsPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useProtected();
  

  useEffect(() => {
    GetTripsDetail(id, saveData);
  }, []);

  const saveData = (data) => {
    setData(data)
  };
  
  const {
    name,
    date,
    planet,
    durationInDays,
    description,
    candidates,
    approved,
  } = data;

  
  
  const goBack = () => {
    navigate(-1);
  };
  
  const Approve =(cadidateId)  => { 
    DecideCandidate(id, cadidateId, true ,saveData )
  }
  const Decline =(cadidateId)  => { 
    DecideCandidate(id, cadidateId, false, saveData)
  }
 
  
  return (
    <>
    <MainContainer>
        <Button
          variant='contained'
          aria-label='return button'
          onClick={() => navigate(-1)}
          style={{alignSelf:"flex-end", margin: "2rem"}}
        >
          Voltar
        </Button>
         <TitleContainer>
        <Typography variant="h4">{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{planet}</Typography>
        <Typography>{durationInDays} &#160;dias</Typography>
        </TitleContainer>
   
      <CandPendContainer>
      <Typography 
      variant='h5' 
      component='h2'>
        Candidatos Pendentes
      </Typography>

     { candidates && candidates.map((item) => {
          return <CandPendContainer2 key={item.id}>
            <Typography variant="h6" >{item.name}</Typography>
            <Typography>{item.age}</Typography>
            <Typography>{item.profession}</Typography>
            <Typography>{item.applicationText}</Typography>
            <Typography>{item.country}</Typography>
            <ButtonDiv>
            <Button 
            variant="contained"
             onClick={()=> Approve(item.id) }
             >Aprovar
             </Button>
            <Button 
            color="secondary"
            variant="contained" 
            onClick={()=> Decline(item.id) }
            >Reprovar
            </Button>
            </ButtonDiv>
          </CandPendContainer2>
        })}
      </CandPendContainer>

       
       <CandAproContainer>
      <Typography 
      variant='h5' 
      component='h2'>
        Candidatos Aprovados
      </Typography>
        {approved && approved.map(item => 
           <Typography key={item.id}> {item.name} </Typography>)}
       </CandAproContainer>
    </MainContainer>
    </>
  );
};

export default TripDetailsPage;

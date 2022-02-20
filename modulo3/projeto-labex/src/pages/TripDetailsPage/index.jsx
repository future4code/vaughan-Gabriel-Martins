import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-ui/core";
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
    console.log(data);
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
    console.log("approved ", id)
    DecideCandidate(id, cadidateId, true ,saveData )
    // GetTripsDetail(id, saveData);
  }
  const Decline =(cadidateId)  => { 
    console.log("declined ", id)
    DecideCandidate(id, cadidateId, false, saveData)
    // GetTripsDetail(id, saveData);
  }
 
  
  return (
    <div>
      <Card align='center'>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{planet}</Typography>
        <Typography>{durationInDays}</Typography>
        <Button
          variant='contained'
          aria-label='return button'
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      </Card>
      <Typography variant='h5' component='h2'>
        Candidatos Pendentes
      </Typography>
     { candidates && candidates.map((item) => {
          return <Card key={item.id}>
            <Typography variant="h6" >{item.name}</Typography>
            <Typography>{item.age}</Typography>
            <Typography>{item.profession}</Typography>
            <Typography>{item.applicationText}</Typography>
            <Typography>{item.country}</Typography>
            <Button 
            variant="contained"
             onClick={()=> Approve(item.id) }
             >Aprovar
             </Button>
            <Button 
            variant="contained" 
            onClick={()=> Decline(item.id) }
            >Reprovar
            </Button>
          </Card>
        })}

      <Typography variant='h5' component='h2'>
        Candidatos Aprovados
      </Typography>
        {approved && approved.map(item =>  <Typography key={item.id}> {item.name} </Typography>)}
    </div>
  );
};

export default TripDetailsPage;

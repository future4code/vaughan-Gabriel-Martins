import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import useProtected from "../../Hooks/useProtected";
import GetTripsDetail from "../../Service/GetTripDetail";

const TripDetailsPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useProtected();
  useEffect(() => {
    GetTripsDetail(id, saveData);
  }, []);

  const saveData = (data) => {
    setData(data);
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
    navigate("/admin/trips/list");
  };
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
          </Card>
        })}

      <Typography variant='h5' component='h2'>
        Candidatos Aprovados
      </Typography>
    </div>
  );
};

export default TripDetailsPage;

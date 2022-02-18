import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import useProtected from '../../Hooks/useProtected';
import GetTripsDetail from '../../Service/GetTripDetail';


const TripDetailsPage =()=> { 
    const [data , setData ]= useState({})
    const {id} =  useParams();
    const navigate = useNavigate()
    useProtected()
    useEffect(() => {
       GetTripsDetail(id , saveData)
    },[])

    const saveData = (data) => {
        setData(data)
    }
    
    const goBack  = ()=> { 
         navigate("/admin/trips/list")
    }
    return ( 
    <div>
         <h1>{data.name}</h1>
         <h1>{data.description}</h1>
         <h1>{data.planet}</h1>
         <h1>{data.durationInDays}</h1>
         <Button
         onClick={goBack}
         >Voltar</Button>
         </div>
    )
}

export default TripDetailsPage;
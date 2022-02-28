import axios from "axios";
import { Url_Base } from "../constants/Url_Base";
import GetTripsDetail from "../Service/GetTripDetail";



const DecideCandidate = (tripId, candidateId, decision , saveData  )=> { 
   const url = `${Url_Base}/trips/${tripId}/candidates/${candidateId}/decide`;
   const axiosConf = {headers:{
    auth: localStorage.getItem("token")
  }}
     const body= {"approve" : decision}

     axios
        .put(url, body, axiosConf)
        .then(res => {
            if(decision){ 
            alert("Aplicante aprovado!")
            }else alert("Aplicante rejeitado!")
            GetTripsDetail(tripId, saveData);

        })
        .catch(err => console.log(err))



}
export default DecideCandidate;
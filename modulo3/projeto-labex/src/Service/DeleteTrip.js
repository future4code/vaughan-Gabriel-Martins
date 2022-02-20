import axios from "axios";
import { Url_Base} from "../constants/Url_Base";
import GetTrips from "./GetTrips";



const useDeleteTrip =(id, saveData)=> { 
  
  const url = `${Url_Base}/trips/${id}`
    const axiosConf = {headers:{
      auth: localStorage.getItem("token")
    }}
    
    axios
    .delete(url,axiosConf)
    .then( res => {
        alert("Viagem apagada!")
        GetTrips(saveData)
        console.log("res",res)})
      .catch(err => console.log(err))
    

}

export default useDeleteTrip 
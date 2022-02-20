import axios from "axios";
import {Url_Base} from '../constants/Url_Base';

 const GetTrips = (id, saveData) => { 
  const url=`${Url_Base}/trip/${id}`
  const axiosConf = {headers:{
    auth: localStorage.getItem("token")
  }}

  axios
    .get(url,axiosConf)
    .then((res) => {saveData(res.data.trip)
    })
    .catch(err => console.log(err))

}

export default GetTrips;

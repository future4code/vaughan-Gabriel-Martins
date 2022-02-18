import axios from "axios";
import {Url_Base} from '../constants/Url_Base';

 const GetTrips = (id, saveData) => { 
  const url=`${Url_Base}/trip/${id}`
  const token = localStorage.getItem("token");

  const auth={headers: {auth:token}}

  axios
    .get(url,auth)
    .then((res) => {saveData(res.data.trip)
    })
    .catch(err => console.log(err))

}

export default GetTrips;

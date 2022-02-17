import axios from "axios";
import {Url_Base} from '../constants/Url_Base';

 const GetTrips = (saveData) => { 
  const url=`${Url_Base}/trips`

  axios
    .get(url)
    .then((res) =>  saveData(res.data.trips))
    .catch(err => console.log(err))

}


export default GetTrips;

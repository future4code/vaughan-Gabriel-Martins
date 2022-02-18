import axios from "axios";
import { Url_Base} from "../constants/Url_Base";



const DeleteTrip =(id)=> { 
    const url = `${Url_Base}/trips/${id}`
    const token = localStorage.getItem("token");
    const axiosAut = {headers:{auth:token}}

    axios
      .delete(url,axiosAut)
      .then(res => console.log( res))
      .catch(err => console.log(err))

}

export default DeleteTrip;
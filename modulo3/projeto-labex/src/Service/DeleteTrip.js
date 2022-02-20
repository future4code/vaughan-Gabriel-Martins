import axios from "axios";
import { Url_Base} from "../constants/Url_Base";



const DeleteTrip =(id,upDatetrips)=> { 
    const url = `${Url_Base}/trips/${id}`
    const axiosConf = {headers:{
      auth: localStorage.getItem("token")
    }}

    axios
      .delete(url,axiosConf)
      .then(res => {

        alert("Viagem apagada!")
        upDatetrips()
        console.log( res)})
      .catch(err => console.log(err))

}

export default DeleteTrip;
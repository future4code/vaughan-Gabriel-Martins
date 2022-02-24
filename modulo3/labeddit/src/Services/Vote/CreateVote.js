import axios from "axios";
import { URL_BASE } from "../../constants/urls";



const CreateVote = (url)=> { 
    const url = `${URL_BASE}/${url}/votes` 
    const axiosConfig = {heards:{Authorization: localStorage.getItem("token")}}


    axios
        .post(url. axiosConfig)
        .then(res => console.log(res))
        .catch(err => console.log(err))


}


export default CreateVote; 
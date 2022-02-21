import axios from "axios";
import { Url_Base } from "../constants/Url_Base";

const PostCreateTrip = (bodyEntered) => {
  const url = `${Url_Base}/trips`;
  const token = localStorage.getItem("token");
  const axiosAut = {headers:{auth:token}}
  const body =  bodyEntered ;

  axios
    .post(url,body, axiosAut )
    .then((res) => { 
        alert("Viagem Criada")
    })
    .catch((err) => alert(err.response));
};

export default PostCreateTrip;

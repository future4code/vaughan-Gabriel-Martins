import axios from "axios";
import { Url_Base } from "../constants/Url_Base";

const PostCreateTrip = (bodyEntered) => {
  const url = `${Url_Base}/trips`;
  const token = localStorage.getItem("token");
  console.log(token)
  console.log("bodyEntered", bodyEntered)
  const axiosAut = { headers: { auth: token } };
//   const body = { bodyEntered };
  const body = {
    "name": "Verão em Mercúgfrio",
    "planet": "Mercúrgfio",
    "date": "30/03/2029",
    "description": "Melhor do que verao em duabi  quentinho tipo o Sol!",
    "durationInDays": 90
};
  axios
    .post(url,axiosAut, body)
    .then((res) => { 
        console.log(res)
        alert("Viagem Criada")
    })
    .catch((err) => console.log(err.response));
};

export default PostCreateTrip;

import axios from "axios";
import { URL_BASE } from "../../constants/urls";

// how to use it. 

// Post Create Comment Vote  {{baseURL}}/  {{comments/:id}}   /votes  1  - 1 
// Post Create Post Vote {{baseURL}}/  {{posts/:id}}    /votes     1   - 1 

const CreatingVote = (urlEntered , bodyNumber , dataOut) => {
  const body = { 'direction' : bodyNumber }
  const url = `${URL_BASE}/${urlEntered}/votes`;
  const axiosConfig = {
    headers: { Authorization: localStorage.getItem("token") },
  };

  axios
    .post(url ,  body,  axiosConfig)
    .then((res) => {
      dataOut(res)
    } )
    .catch((err) => alert(err.response));
};

export default CreatingVote;


import axios from "axios";
import { URL_BASE } from "../../constants/urls";

// how to use it. 

// PUTChange Comment Vote  {{baseURL}}/  {{comments/:id}}   /votes
// PUTChange Post Vote {{baseURL}}/  {{posts/:id}}    /votes

const ChangingVote = (urlEntred , bodyNumber, dataOut) => {
  const body = { 'direction' :bodyNumber }
  const url = `${URL_BASE}/${urlEntred}/votes`;
  const axiosConfig = {
    heards: { Authorization: localStorage.getItem("token") },
  };

  axios
    .put(url, body , axiosConfig)
    .then((res) => 
    { dataOut(res)
      console.log(res)
    })
    .catch((err) => console.log(err));
};

export default ChangingVote;

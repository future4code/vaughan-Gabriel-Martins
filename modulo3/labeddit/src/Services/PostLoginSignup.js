import axios from "axios";
import { URL_BASE } from "../constants/urls";
import { goToFeed } from "../routers/coordenates";

const PostLoginSignup = (bodyEntred, saveData, urlEntred , navigate, setIsloadding  ) => {
  const url = `${URL_BASE}/users${urlEntred}`;
  setIsloadding(true);
  const body = bodyEntred;
 
  axios
    .post(url, body)
    .then((res) => {
      saveData(res)
      setIsloadding(false);
      console.log("data", res.data)
      localStorage.setItem("token", res.data.token)
      goToFeed(navigate);

    })
    .catch((err) => {
      setIsloadding(false);
      console.log(err.response);
      alert(err.response.data.message);
    });
};

export default PostLoginSignup;

import { URL_BASE } from "../../constants/urls";
import axios from "axios";

// Because it been used to Commnents and Post , this urlEntred has
// been added as a second paraments and it should be also completed
// at least with a "" empty string.

const GetData = (saveData, urlEntred, setIsLoading ) => {
  const url = `${URL_BASE}/posts${urlEntred}`;
  const token = localStorage.getItem("token");
  setIsLoading(true)

  const axisConf = { headers: { Authorization: token } };

  axios
    .get(url, axisConf)
    .then((res) => {
      setIsLoading(false)
      saveData(res);
    })
    .catch((err) => { 
      localStorage.removeItem("token")
      setIsLoading(false)
      alert(err.response.data)
    })
         
      
};

export default GetData;

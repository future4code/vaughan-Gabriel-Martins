import axios from 'axios'; 
import { URL_BASE } from '../../constants/urls';

// How to use it  
//DEL Delete Post Vote     {{baseURL}}/posts/:id/votes
//DEL Delete Comment Vote {{baseURL}}/comments/:id/votes
// id should come into de url 

const DeleteData = (urlEntred , response) => { 
  const url =`${URL_BASE}/${urlEntred}/votes`

  const axiosConfig = {headers: 
    {
         Authorization :  (localStorage.getItem("token"))

        }
      }
      axios
        .delete(url, axiosConfig)
        .then(res => {
          response(res)
          console.log(res)})
        .catch(err => console.log(err.response))

}

export default DeleteData;
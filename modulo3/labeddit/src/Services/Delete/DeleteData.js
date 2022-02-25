import axios from 'axios'; 
import { URL_BASE } from '../../constants/urls';

// How to use it  
//DEL Delete Post Vote     {{baseURL}}/posts/:id/votes
//DEL Delete Comment Vote {{baseURL}}/comments/:id/votes
// id should come into de url 

const DeleteData = (urlEntred) => { 
  const url =`${URL_BASE}/${urlEntred}/votes`

  const axiosConfig = {heards: 
    {
         Authorization :  (localStorage.getItem("token"))

        }
      }
      axios
        .delete(url, axiosConfig)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))

}

export default DeleteData;
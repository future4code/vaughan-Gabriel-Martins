import axios from 'axios'; 
import { URL_BASE } from '../constants/urls';




const DeleteData = (url) => { 
  const url =`${URL_BASE}/${url}/vote`

  axiosConfig = {heards: 
    {
         Authorization :  (localStorage.getItem("token"))
    }
    }

}

export default DeleteData;
import {URL_BASE} from "../constants/urls";
import axios from 'axios';



const GetPost = (saveData) => { 
    const url = `${URL_BASE}/posts`
    const token = localStorage.getItem("token");

    const axisConf = {headers : {Authorization :token}}
    
    axios
         .get(url , axisConf)
         .then(res => {
            saveData(res)
            console.log(res)})
         .catch(err => console.log(err.response))

}

export default GetPost;

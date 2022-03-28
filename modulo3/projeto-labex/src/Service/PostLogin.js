import axios from "axios";
import { Url_Base } from "../constants/Url_Base";


const PostLogin = (bodyEntered, responseData) => { 
   const url  = `${Url_Base}/login`; 
   const body = bodyEntered;
   

   axios
    .post(url,body)
    .then(res => {
        responseData(res)
        console.log(res) 
    })
    .catch(err => { 
        alert("Erro de login tente novamente")
        console.log(err)})

}

export default PostLogin;
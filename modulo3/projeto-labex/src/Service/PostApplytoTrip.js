import {Url_Base} from "../constants/Url_Base";
import axios from 'axios';



 const PostApllyToTrip = (data)=> { 
     const url = `${Url_Base}/trips/${data.viagem}/apply`;
     const body  = data;
     
     axios
        .post(url,body)
        .then(res => { 
            console.log(res.data.message)
            alert("Aplicado com Sucesso")
        })
        .catch((err) => console.log(err.response.data.message));
   

}




export default PostApllyToTrip;
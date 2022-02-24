import axios from 'axios';
import {URL_BASE} from './src/constants/urls';


const PostLogin = () => { 
    const url = `${URL_BASE}/users`;

    const body = {
        "email": "demo.email@gmail.com",
        "password": "demo.password"
    }

    axios
        .post(url, body)
        .then(res => console.log(res)) 
        .catch(err => console.log(err.response))
}

export default PostLogin;



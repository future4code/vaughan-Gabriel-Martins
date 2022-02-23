import axios from 'axios';
import {URL_BASE} from '../constants/urls';


const PostSignup = () => { 
    const url = `${URL_BASE}/users/signup`;

    const body = {
        "username":"gdlmartins",
        "email": "gabriel@gabriel.com",
        "password": "12345678"
    }

    axios
        .post(url, body)
        .then(res => { 
            localStorage.setItem(res.data.data.token)
            console.log(res)}) 
        .catch(err => { 
            console.log(err.response)
            alert(err.response.data)
        })
}

export default PostSignup;



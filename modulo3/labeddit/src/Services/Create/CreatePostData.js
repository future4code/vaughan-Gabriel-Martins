import {useState} from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/urls";


 
// POSTCreate Post           {{baseURL}}/posts               title: "primeiro"  "body": "post"  
// POSTCreate Comment        {{baseURL}}/posts/:id/comments   "body": "Primeiro comentário"
// POSTCreate Post Vote      {{baseURL}}/posts/:id/votes      body 	"direction": 1   / -1 
// POSTCreate Comment Vote   {{baseURL}}/comments/:id/votes  body 	"direction": 1   /  -1 

const CreatePostData = (urlentred, body , dataOut )  => { 
  const url = `${URL_BASE}/${urlentred}`;
  const token = localStorage.getItem("token");

  const axisConf = { headers: { Authorization: token } } ;
  

  axios
    .post(url, body, axisConf)
    .then(res => dataOut(res.data))
    .catch(err => console.log(err.response))

}


export default CreatePostData;
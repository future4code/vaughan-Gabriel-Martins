import axios from "axios";
import { URL_BASE } from "../../constants/urls";

 
// POSTCreate Post           {{baseURL}}/posts               title: "primeiro"  "body": "post"  
// POSTCreate Comment        {{baseURL}}/posts/:id/comments   "body": "Primeiro comentário"
// POSTCreate Post Vote      {{baseURL}}/posts/:id/votes      body 	"direction": 1   / -1 
// POSTCreate Comment Vote   {{baseURL}}/comments/:id/votes  body 	"direction": 1   /  -1 

const CreatePostData = (urlentred, body )  => { 
  const url = `${URL_BASE}/posts`;
  const token = localStorage.getItem("token");

  const axisConf = { headers: { Authorization: token } } ;


  axios
    .post("https://labeddit.herokuapp.com/posts")
    .then(res => console.log(res))
    .catch(err => console.log(err.response))

}


export default CreatePostData;
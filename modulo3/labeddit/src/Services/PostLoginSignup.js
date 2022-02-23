import axios from "axios";
import { URL_BASE } from "../constants/urls";
import { goToFeed } from "../routers/coordenates";

const PostLoginSignup = (bodyEntred, saveData, urlEntred , navigate  ) => {
  const url = `${URL_BASE}/users${urlEntred}`;

  const body = bodyEntred;
  console.log(bodyEntred)
  console.log(url)
//   const body = {
//     username: "9ew09d1302fdfddre1ee443",
//     email: "93e1d22dsuril@gfdfdassodd.dsm",
//     password: "d4erewmefwdo.passworrered",
//gdlmartins
//gdlmartins@gabriel.com
//123456789
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0OWFjYTExLTlhYWQtNDZmYS1hYzZjLWY2ZTc1MTIzMzExYyIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY0NTYyNDc1MCwiZXhwIjoxNjQ1NjY3OTUwfQ.KEokHVHthRgZPm0XS0xZrj5jaIulxIdk062sa_MKH3E



//   };

  axios
    .post(url, body)
    .then((res) => {
      console.log("data", res.data)
      localStorage.setItem("token", res.data.token)
      saveData(res)
      goToFeed(navigate);

    })
    .catch((err) => {
      console.log(err.response);
    //   alert(err.response);
    });
};

export default PostLoginSignup;

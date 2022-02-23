import {useEffect, useLayoutEffect} from "react";
import { useNavigate } from "react-router";
import { goToLogin } from "../routers/coordenates";



 const useNotLogedPage = ()=> { 
    const navigate = useNavigate();

    useEffect(()=> { 
        const token = localStorage.getItem("token")
        if(token===null){ 
          navigate("/")
        }

    },[navigate])

}

export default useNotLogedPage;






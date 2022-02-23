import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {goToFeed, goTofeed} from "../routers/coordenates";



const useLogedPage =()=>{ 
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    useEffect(()=> {
        if(token) { 
            goToFeed(navigate)
        }
  
    }, [navigate])
}

export default useLogedPage; 
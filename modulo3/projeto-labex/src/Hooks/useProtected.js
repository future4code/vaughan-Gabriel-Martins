import React, { useEffect } from "react";
import { useNavigate } from "react-router";


const useProtected  =()=> { 
    
    const navigate = useNavigate();
    
    useEffect(()=>{ 
        const token = localStorage.getItem("token")
        if(token===null){ 
            navigate("/login")
        }
    },[])
  
    
}
export default useProtected;
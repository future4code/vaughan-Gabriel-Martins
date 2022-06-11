import { Route, Routes  } from "react-router";
import Dashboard from "../Pages/dashboard/Dashboard";

import Signin from "../Pages/signin/Signin";


const Router = ()=>{ 
 return(
     <Routes>
        <Route path="/" element ={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signin" element={<Signin/>}/>
        
    </Routes>
 );
};

export default Router;
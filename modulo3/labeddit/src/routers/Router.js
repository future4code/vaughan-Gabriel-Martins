import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeedPage from "../Pages/FeedPage/FeedPage";
import PostPage from "../Pages/PostPage/PostPage";
import SigninPage from "../Pages/SigninPage/SigninPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import NotFound from "../Pages/NotFound/NotFound";
import Headers from "../components/Headers/Headers";




const Router =() => { 

  return (
  <BrowserRouter>
    <Headers/>
   
   <Routes>
       <Route  path='/' element={<LoginPage/>} />
       <Route path='/signin' element={<SigninPage/>}/>
       <Route path='/post/:id'  element={<PostPage/>}/>
       <Route path ='/feed' element={<FeedPage/>}/>
       <Route path="*"  element={<NotFound/>}/>
   </Routes>
  </BrowserRouter>
  
  )

}

export default Router;
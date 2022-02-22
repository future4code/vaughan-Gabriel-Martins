import React from "react";
import FeedPage from './Pages/FeedPage/FeedPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PostPage from './Pages/PostPage/PostPage';
import SigninPage from './Pages/SigninPage/SigninPage';
import Router from './routers/Router';
import { ThemeProvider } from "@material-ui/styles";
import theme from './constants/theme';



const App = () => { 


    return ( 
        <>
        <ThemeProvider theme={theme}>

       <Router/>
        </ThemeProvider>

       </>
    )
}


export default App;
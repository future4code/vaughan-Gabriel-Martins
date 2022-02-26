import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./Pages/FeedPage/FeedPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PostPage from "./Pages/PostPage/PostPage";
import SigninPage from "./Pages/SigninPage/SigninPage";
import Router from "./routers/Router";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";
import Headers from "./components/Headers/Headers";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Headers />

          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

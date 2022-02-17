import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import LoginPage from "../LoginPage/Index";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import AdminHomePage from "../AdminHomePage/Index";
import ErroPage from "../ErroPage/ErroPage";
import CreateTripPage from "../CreateTripPage/Index";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
        <Route exact path={"/trips/list"} element={<ListTripsPage />} />
        <Route exact path={"/trips/application"} element={<ApplicationFormPage />} />
        <Route exact path={"/login"} element={<LoginPage />} />
        <Route path={"/admin/trips/list"} element={<AdminHomePage/>} />
        <Route path={"/admin/trips/create"} element={<CreateTripPage/>} />
        {/* <Route path={"/admin/trips/:id"} element={<Admin/>} /> */}
        <Route path={"/*"} element={<ErroPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;

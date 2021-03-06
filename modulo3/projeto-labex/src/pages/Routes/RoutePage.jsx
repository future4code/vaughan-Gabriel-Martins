import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/Index";
import LoginPage from "../LoginPage/Index";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import AdminHomePage from "../AdminHomePage/Index";
import ErroPage from "../ErroPage/ErroPage";
import CreateTripPage from "../CreateTripPage/Index";
import TripDetailsPage from "../TripDetailsPage";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/trips/list"} element={<ListTripsPage />} />
        <Route path={"/trips/application"} element={<ApplicationFormPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/admin/trips/list"} element={<AdminHomePage/>} />
        <Route path={"/admin/trips/create"} element={<CreateTripPage/>} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
        <Route path={"/*"} element={<ErroPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;

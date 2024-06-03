import React from "react";
import { Route, Routes } from "react-router";

import { Navbar } from "../components/header/Navbar";
import LoginPage from "../auth/pages/LoginPage";
import { HomePage } from "../movieStack/Pages/HomePage";
import { MovieStackRouter } from "../movieStack/router/MovieStackRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<MovieStackRouter />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

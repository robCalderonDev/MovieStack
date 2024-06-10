import React from "react";
import { Route, Routes } from "react-router";

import LoginPage from "../auth/pages/LoginPage";

import { MovieStackRouter } from "../movieStack/router/MovieStackRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<MovieStackRouter />} />
      </Routes>
    </>
  );
};

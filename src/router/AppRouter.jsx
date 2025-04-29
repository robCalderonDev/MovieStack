import React from "react";
import { Route, Routes } from "react-router";

import LoginPage from "../auth/pages/LoginPage";
import { ProtectedRoute } from "../router/protectedRoute"; // Ajusta la ruta si es diferente

import { MovieStackRouter } from "../movieStack/router/MovieStackRouter";
import CreateUserPage from "../auth/pages/CreateUserPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/register" element={<CreateUserPage />} />
        <Route path="/*" element={<ProtectedRoute>  <MovieStackRouter /></ProtectedRoute>}
/>

      </Routes>
    </>
  );
};

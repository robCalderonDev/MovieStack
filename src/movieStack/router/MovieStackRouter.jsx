import React from "react";
import { Navbar } from "../../components/header/Navbar";
import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../Pages/HomePage";
import Footer from "../../components/bottom/Footer";
import UserConfigPage from "../Pages/UserConfigPage";

export const MovieStackRouter = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/userConfig" element={<UserConfigPage />} />
        </Routes>
      </div>
      <Footer class="sticky top-[100vh]"/>
    </div>
  );
};

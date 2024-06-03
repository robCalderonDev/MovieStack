import { useState } from "react";

import { Navbar } from "./components/header/Navbar";
import LoginPage from "./auth/pages/LoginPage";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

function MovieStackApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <AppRouter />

      </AuthProvider>
    </>
  );
}

export default MovieStackApp;

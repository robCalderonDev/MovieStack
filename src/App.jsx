import { useState } from "react";

import { Navbar } from "./components/header/Navbar";
import LoginPage from "./pages/login/LoginPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;

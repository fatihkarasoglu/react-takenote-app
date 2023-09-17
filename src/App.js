import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHome from "./pages/MainHome";
import WelcomeHome from "./pages/WelcomePage";

function App() {

  return (
    <div className="min-w-full min-h-screen m-0 p-0 bg-gradient-to-br">
      <Routes>
        <Route path="/*" element={<MainHome />} />
        <Route path="/welcomehome" element={<WelcomeHome />} />
      </Routes>
    </div>
  );
}

export default App;
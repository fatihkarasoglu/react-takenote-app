import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHome from "./pages/MainHome";

function App() {

  return (
    <div className="min-w-full min-h-screen m-0 p-0 bg-gradient-to-br">
      <Routes>
        <Route path="/*" element={<MainHome />} />
      </Routes>
    </div>
  );
}

export default App;
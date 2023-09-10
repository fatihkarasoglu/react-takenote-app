import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";

function App() {

  return (
    <div className="min-w-full min-h-screen m-0 p-0 bg-[url('./images/WelcomePageBackground.jpg')] bg-cover bg-no-repeat">
      <nav>
        <NavLink to='/login' >Giriş Yap</NavLink>
        <NavLink to='/register' >Kayıt Ol</NavLink>
      </nav>

      <Routes>
        <Route exact path="/*" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
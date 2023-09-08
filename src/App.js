import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";

import Home from "./components/Home";
import User from "./components/User";
import Archive from "./components/Archive";
import Explore from "./components/Explore";
import Settings from "./components/Settings";

import { FaHome, FaArchive } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { RiShieldUserFill } from 'react-icons/ri';
import { IoTelescope } from "react-icons/io5"

function App() {

  const location = useLocation();

  return (
    <div className="min-w-full min-h-screen m-0 p-0 bg-zinc-800">
      <div className="min-w-min flex justify-center">
        <nav className="min-w-min mt-2 pl-10 pr-10 h-14 bg-black bg-opacity-50 text-white rounded-lg flex justify-between items-center">
          <NavLink to='/' 
            className={`navlink ${location.pathname === '/' ? " underline pr-4 pl-4 flex text-cyan-500 items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
              <FaHome className="w-7 h-7 pr-1" /> Ana Sayfa</NavLink>

          <NavLink to='/profile' 
            className={`navlink ${location.pathname === '/profile' ? " underline pr-4 pl-4 flex text-cyan-500 items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
              <RiShieldUserFill className="w-8 h-8 pr-1" /> Profil</NavLink>

          <NavLink to='/archive' 
            className={`navlink ${location.pathname === '/archive' ? " underline pr-4 pl-4 flex text-cyan-500 items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
              <FaArchive className="w-6 h-6 pr-1" /> Arşiv</NavLink>

          <NavLink to='/explore' 
            className={`navlink ${location.pathname === '/explore' ? "underline pr-4 pl-4 flex items-center text-cyan-400 justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
              <IoTelescope className="w-7 h-7 pr-1" /> Keşfet</NavLink>

          <NavLink to='/settings' 
            className={`navlink ${location.pathname === '/settings' ? " underline pr-4 pl-4 flex text-cyan-500 items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
              <LuSettings2 className="w-7 h-7 pr-1" /> Ayarlar</NavLink>
        </nav>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<User />} />
        <Route exact path="/archive" element={<Archive />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
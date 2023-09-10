import WelcomePage from "./WelcomePage";
import Archive from "./Archive";
import Explore from "./Explore";
import Settings from "./Settings";
import User from "./User";

import { FaHome, FaArchive } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { RiShieldUserFill } from 'react-icons/ri';
import { IoTelescope } from "react-icons/io5"
import { useLocation, NavLink, Routes, Route } from "react-router-dom";

export default function Home() {

    const location = useLocation();

    return(
        <div className="flex flex-col justify-center items-center">

            <div className="min-w-min flex justify-center">
                <nav className="min-w-min mt-2 pl-10 pr-10 h-14 bg-black bg-opacity-50 text-white rounded-lg flex justify-between items-center">


                    <NavLink to='/welcomepage' className={`navlink ${location.pathname === '/welcomepage' ? " underline pr-4 pl-4 flex text-cyan-500 items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
                        <FaHome className="w-8 h-8 pr-1" /> Ana sayfa</NavLink>

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
                <Route exact path="/welcomepage" element={<WelcomePage />} />
                <Route exact path="/profile" element={<User />} />
                <Route exact path="/archive" element={<Archive />} />
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/settings" element={<Settings />} />
            </Routes>
        </div>
    )
}
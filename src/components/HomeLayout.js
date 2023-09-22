import { NavLink, useLocation, Outlet } from "react-router-dom";

import { FaHome, FaArchive } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { RiShieldUserFill } from 'react-icons/ri';
import { IoTelescope } from "react-icons/io5";

export default function HomeLayout() {

    const location = useLocation();

    return(
        <div className="min-w-full min-h-screen flex flex-col items-center m-0 p-0">
            <div>
                <nav className="min-w-min mt-2 pl-10 pr-10 h-14 border border-cyan-400 bg-cyan-300 bg-opacity-10 text-black rounded-lg flex justify-between items-center">
                    <NavLink to='/' 
                        className={`navlink ${location.pathname === '/' ? "underline pr-4 pl-4 flex items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
                        <FaHome className="w-8 h-8 pr-1" /> Ana sayfa</NavLink>

                    <NavLink to='/archive' 
                        className={`navlink ${location.pathname === '/archive' ? "underline pr-4 pl-4 flex items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
                        <FaArchive className="w-6 h-6 pr-1" /> Arşiv</NavLink>

                    <NavLink to='/explore' 
                        className={`navlink ${location.pathname === '/explore' ? "underline pr-4 pl-4 flex items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
                        <IoTelescope className="w-7 h-7 pr-1" /> Keşfet</NavLink>

                    <NavLink to='/profile/*' 
                        className={`navlink ${location.pathname === '/profile/*' ? "underline pr-4 pl-4 flex items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
                        <RiShieldUserFill className="w-8 h-8 pr-1" /> Profil</NavLink>

                    <NavLink to='/settings' 
                        className={`navlink ${location.pathname === '/settings' ? "underline pr-4 pl-4 flex items-center justify-center" : "pr-4 pl-4 flex items-center justify-center"}`}>
                        <LuSettings2 className="w-7 h-7 pr-1" /> Ayarlar</NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}
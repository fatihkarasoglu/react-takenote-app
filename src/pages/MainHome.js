import { Routes, Route, NavLink } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

export default function MainHome() {

    return(
        <div className="flex min-h-screen justify-center items-center">

            <nav className="flex flex-col justify-center items-center text-xl">
                <NavLink to="/login"  className="justify-center items-center text-center px-6 py-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Giriş Yap</NavLink>
                <NavLink to="/register" className="justify-center items-center text-center px-6 py-2 mt-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Kayıt Ol</NavLink>
            </nav>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </div>
    )
}
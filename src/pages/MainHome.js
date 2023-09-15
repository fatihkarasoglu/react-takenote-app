import { Routes, Route, NavLink } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

export default function MainHome() {

    return(
        <div className="min-w-full min-h-screen grid justify-center">

            <nav className="justify-center text-xl mt-4">
                <NavLink to="/login"  className="justify-center items-center text-center px-6 py-2 text-blue-500 rounded-lg border-2 border-blue-500 hover:bg-blue-500 hover:text-white">Giriş Yap</NavLink>
                <NavLink to="/register" className="ml-4 justify-center items-center text-center px-6 py-2 mt-2 text-blue-500 rounded-lg border-2 border-blue-500 hover:bg-blue-500 hover:text-white">Ücretsiz hesap oluştur</NavLink>
            </nav>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
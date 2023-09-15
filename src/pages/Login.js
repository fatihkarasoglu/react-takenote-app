import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

import Home from "./WelcomePage";

export default function Login() {

    const [userLogin, setUserLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const loginHandle = () => {
        const users = localStorage.getItem("user");

        const user = users.find((user) => (
            ((user.username === userLogin || user.email === userLogin ) && user.password === passwordLogin)
        ))

        if(user === true) {
        //    <Navigate to={<Home />} />
        }
    }

    return(
        <div className="justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <input type="email" placeholder="Kullanıcı adı veya email" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} className="border-2 px-6 py-2 rounded-md"/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Şifre" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} className="border-2 px-6 py-2 rounded-md"/>
                </div>
                <button type="button" onClick={loginHandle} className="">Giriş yap</button>
            </div>
            <p>
                Henüz bir hesabınız yok mu?
                <NavLink to="/register">Hesap Oluşturun</NavLink>
            </p>

            <NavLink to="/">Ana sayfaya dön - </NavLink>
        </div>
    )
}
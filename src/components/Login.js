import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import storage from "../data/localStorage";

export default function Login() {

    const [userLogin, setUserLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const navigate = useNavigate();

    const loginHandle = (e) => {
        e.preventDefault();

        const users = storage.get("user") || [];

        const user = users.find((user) => (
            ((user.username === userLogin || user.email === userLogin ) && user.password === passwordLogin)
        ))

        if(user) {
           navigate("/")
        } else{
            console.error('Kullanıcı adı veya email ya da şifre hatalı!');
        }
    }

    return(
        <div className="justify-center items-center">

            <div className="flex flex-col justify-center items-center">

                <div>
                    <input type="email" placeholder="Kullanıcı adı ya da email" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} required name="email" autoComplete="false" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Şifre" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} required name="password" autoComplete="false" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <button type="button" onClick={loginHandle} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Giriş yap</button>
                <NavLink className="underline hover:text-blue-600">Şifreni mi Unuttun?</NavLink>
            
            </div>

            <div className="flex justify-center items-center">
                Henüz bir hesabınız yok mu?
                <NavLink to="/register" className="underline hover:text-blue-600 pl-2">Ücretsiz hesap Oluşturun</NavLink>
            </div>
            
        </div>
    )
}
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useUser } from "../context/UserContext";

export default function Login() {

    const { login } = useUser();

    const [userLogin, setUserLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const navigate = useNavigate();

    const loginHandle = () => {
        const storedUsers = localStorage.getItem("user");
        
        if (!storedUsers) {
            console.error("Yerel depoda kullanıcı verisi bulunamadı.");
            return;
        }
    
        try {
            const users = JSON.parse(storedUsers);
    
            if (!Array.isArray(users)) {
                console.error("Kullanıcı verisi istenen formatta değil! (an array of users).");
                return;
            }
    
            const user = users.find((u) => u.username === userLogin || u.email === userLogin);
    
            if (!user) {
                console.error('Kullanıcı adı, email veya şifre hatalı!');
            } else if (user.password !== passwordLogin) {
                console.error('Şifre hatalı!');
            } else {
                login({
                    user
                });
                navigate("/");
            }
        } catch (error) {
            console.error("Error parsing user data from local storage:", error);
        }
    };

    return(
        <div className="justify-center items-center">

            <div className="flex flex-col justify-center items-center">

                <div>
                    <input type="email" placeholder="Kullanıcı adı ya da email" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} required name="email" autoComplete="off" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Şifre" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} required name="password" autoComplete="off" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <button type="button" onClick={loginHandle} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Giriş yap</button>
                <NavLink className="underline hover:text-blue-600">Şifreni mi Unuttun?</NavLink>
            
            </div>

            <div className="flex justify-center items-center">
                Henüz bir hesabınız yok mu?
                <NavLink to="/register" className="underline hover:text-blue-600 pl-2">Ücretsiz hesap Oluşturun</NavLink>
            </div>
            <NavLink to="/" className="underline hover:text-blue-600 pl-2">Ana sayfaya dön</NavLink>
        </div>
    )
}
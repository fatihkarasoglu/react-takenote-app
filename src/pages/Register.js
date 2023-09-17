import { useState } from "react"
import { NavLink, Navigate } from "react-router-dom"

import WelcomeHome from "./WelcomePage";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerHandle = () => {
        if(!username || !email || !password || !confirmPassword ) {
            alert("Lütfen tüm alanları doldurun!");
        }

        if(password !== confirmPassword) {
            alert("Şifreler uyuşmuyor! Lütfen kontrol edin.");
        }

        const newUser = {
            username,
            email,
            password,
        }
        localStorage.setItem("user", newUser);

        if(username && email && password && confirmPassword) {
            return <Navigate to={<WelcomeHome />}/>
        }
    }

    return(
        <div className="justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required name="username" autoComplete="false" placeholder="Kullanıcı adı" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <div className="mt-2">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required name="email" autoComplete="false" placeholder="Email adresi" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <div className="mt-2">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required name="password" autoComplete="false" placeholder="Şifre" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <div className="mt-2">
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required name="confirm password" autoComplete="false" placeholder="Şifrenizi doğrulayın" className="px-6 py-2 rounded-md border-2"/>
                </div>
                <button type="submit" onClick={registerHandle} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Kayıt Ol</button>
            </div>

            <div className="flex justify-center items-center">
                Zaten bir hesabınız var mı?
                <NavLink to="/register" className="underline hover:text-blue-600 pl-2">Giriş yap</NavLink>
            </div>
        </div>
    )
}
import { useUser } from "../context/UserContext"

export default function Profile() {

    const { logout } = useUser();

    const logoutHandle = () => {
        logout()
    }

    return(
        <div>
             Profile page test
             <button type="button" onClick={logoutHandle} >Çıkış yap</button>
        </div>
    )
}
import { useUser } from "../context/UserContext"
import { Navigate } from "react-router-dom";

export default function Profile() {

    const { user } = useUser();

    if(user) {
        return <Navigate to="/profile" />
    } else if (!user) {
        return <Navigate to="/login" />
    }

    return(
        <div>
             Profile page test
             Welcome {user}
        </div>
    )
}
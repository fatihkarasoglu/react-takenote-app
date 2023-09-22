import { UserAuth } from "../context/UserContext"
import { Navigate } from "react-router-dom";

export default function Profile() {

    const { user } = UserAuth();

    if(!user) {
        return <Navigate to="/login" />
    }

    return(
        <div>
             Profile page test
        </div>
    )
}
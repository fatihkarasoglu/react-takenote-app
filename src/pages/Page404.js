import { Link } from "react-router-dom"

export default function Page404() {

    return(
        <div>
            <h1>Ulaşmaya çalıştığınız sayfa hazırlık aşamasında ya da yok!</h1>
            <Link to="/">Ana sayfaya dön -</Link>
        </div>
    )
}
import { useContext } from "react"
import { AuthContext } from "../../ContexApi/AuthProvider"



const Home = () => {
    const AuthInfo = useContext(AuthContext)

    return (
        <div>
            <h2 className="text-4xl">Name:{AuthInfo.name}</h2>
        </div>
    )
}

export default Home



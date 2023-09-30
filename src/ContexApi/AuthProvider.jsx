import { createContext } from "react"

const AuthContex = createContext(null)
const AuthProvider = ({ children }) => {
    const AuthInfo = { name: "naeem" }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthProvider

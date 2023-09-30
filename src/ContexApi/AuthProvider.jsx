import { createContext } from "react"
import PropTypes from 'prop-types';

export const AuthContext = createContext(null) // Capitalize the 'C'

const AuthProvider = ({ children }) => {
    const AuthInfo = { name: "naeem" }
    return (
        <AuthContext.Provider value={AuthInfo}> {/* Capitalize the 'C' */}
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider

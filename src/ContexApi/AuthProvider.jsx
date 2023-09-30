import { createContext, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const AuthInfo = { name: "naeem" }

    const [user, setuser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const AuthInfo = { user, createUser }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider

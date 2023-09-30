import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const AuthInfo = { name: "naeem" }

    const [user, setuser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {

        return signOut(auth)
    }
    //observe onAuth statechange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            console.log('Current value of the current user', currentuser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logout
    }


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

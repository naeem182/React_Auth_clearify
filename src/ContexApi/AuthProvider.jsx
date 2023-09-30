import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // const AuthInfo = { name: "naeem" }

    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        setloading(true);
    }
    const logout = () => {
        setloading(true);
        return signOut(auth)
    }
    //observe onAuth statechange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            console.log('Current value of the current user', currentuser);
            setloading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logout,
        loading
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

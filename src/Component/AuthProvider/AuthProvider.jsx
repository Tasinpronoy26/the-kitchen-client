import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {



    const auth = getAuth(app);

    const createRegister = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createLogIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const createLogOut = () => {

        return signOut(auth);
    }


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentuser => {

            console.log(currentuser)
            setUser(currentuser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])




    const info = {
        user,
        createRegister,
        createLogIn,
        createLogOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
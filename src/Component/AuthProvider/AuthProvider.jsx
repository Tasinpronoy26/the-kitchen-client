import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';






export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {



    const auth = getAuth(app);

    const createRegister = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    //Google 


    const createGoogleSignIn = (provider) => {

        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    //Github

    const createGithubSignIn = (provider) => {

        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Update photo

    // const updatePhoto = (displayName, photoURL) => {

    //     updateProfile(auth, displayName, photoURL);

    // }



    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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
        createLogOut,
        createGoogleSignIn,
        createGithubSignIn,
        loading

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const createUser = (email, password) => {
        setLoding(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
         setLoding(true)
       return signInWithEmailAndPassword(auth, email, password);
    };
   
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoding(false);
        }) 
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loding
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
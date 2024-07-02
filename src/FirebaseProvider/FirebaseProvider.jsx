import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config.js';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)


// social login

const googleProvider = new GoogleAuthProvider();

const githubAuthProvider = new GithubAuthProvider();


const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    console.log(loading);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // update profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubAuthProvider)
    }

    const logOut = () => {

        setUser(null)
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } setLoading(false)

        });
        return () => unsubscribe();
    }, [])


    const allValue = { createUser, signInUser, googleLogin, githubLogin, logOut, updateUserProfile, loading, user }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
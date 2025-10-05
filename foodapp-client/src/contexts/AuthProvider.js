// import React, { createContext, useEffect, useState } from "react";
// import {
//     GoogleAuthProvider,
//     createUserWithEmailAndPassword,
//     getAuth,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//     updateProfile,
// } from "firebase/auth";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // create an account
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     // signup with gmail
//     const signUpWithGmail = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     };

//     // login using email & password
//     const login = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     // logout
//     const logout = () => {
//         return signOut(auth);
//     };

//     // update profile
//     const updateUserProfile = (name, photoURL) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name,
//             photoURL: photoURL,
//         });
//     };

//     // check signed-in user
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             // console.log(currentUser);
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => {
//             return unsubscribe();
//         };
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         signUpWithGmail,
//         login,
//         logout,
//         updateUserProfile,
//         loading,
//     };
//     return (
//         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//     );
// };

// export default AuthProvider;

import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext({
    user: null,
    createUser: () => { },
    signUpWithGmail: () => { },
    login: () => { },
    logout: () => { },
    updateUserProfile: () => { },
    loading: true,
});

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser: (email, password) => createUserWithEmailAndPassword(auth, email, password),
        signUpWithGmail: () => signInWithPopup(auth, googleProvider),
        login: (email, password) => signInWithEmailAndPassword(auth, email, password),
        logout: () => signOut(auth),
        updateUserProfile: (name, photoURL) => updateProfile(auth.currentUser, { displayName: name, photoURL }),
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

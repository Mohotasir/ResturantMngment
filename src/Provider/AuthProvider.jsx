import { GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GithubAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
//import axios from "axios";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateProfiles = (name,photo)=>{
       return updateProfile(auth.currentUser,{
            displayName : name, photoURL : photo
        })
    }
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub =()=>{
         setLoading(true)
         return signInWithPopup(auth,gitHubProvider)

    }
    const logOut = ()=>{
        setLoading(true)
        //const loggedUser = {email:user?.email};
        // axios.post('http://localhost:5000/logout')
        //    .then(res=>{
        //    console.log(res.data);
        //    })
        return signOut(auth);
    }
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
            // if(currentUser){
            //     //const loggedUser = {email:currentUser?.email};
            //     axios.post('http://localhost:5000/jwt')
            //      .then(res=>{
            //         console.log('token response:',res.data);
            //      })
            // }
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {user,loading,createUser,signInUser,signInWithGoogle,signInWithGithub,logOut,updateProfiles}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
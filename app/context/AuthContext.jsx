'use client';

import { createContext, useEffect , useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const [ auth  , setAuth]  = useState({})
    
    useEffect(()=> {
        const authLocalStorage = JSON.parse(localStorage.getItem("authVisado"));
        if(authLocalStorage){
            setAuth(authLocalStorage)
        }
    } , [])

    return <AuthContext.Provider value={ { auth , setAuth }}> { children} </AuthContext.Provider>
}


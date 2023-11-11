'use client';

import { createContext, useEffect , useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const [ auth  , setAuth]  = useState({
        authenticaded: false,
        token: null,
        user: null,
        pending: true
    })
    
    useEffect(()=> {
        const authLocalStorage = JSON.parse(localStorage.getItem("authVisado"));
        if(authLocalStorage){
            setAuth({...authLocalStorage , pending: false})
        }else{
            setAuth({...auth , pending: false})
        }
    } , [])

    return <AuthContext.Provider value={ { auth , setAuth }}> { children} </AuthContext.Provider>
}


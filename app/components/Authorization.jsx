'use client'

import { useContext , useEffect } from "react"
import { redirect } from 'next/navigation'
import { AuthContext } from "../context/AuthContext"

export const Authorization = ({children}) => {

  const { auth } = useContext(AuthContext);
  
  if(!auth.pending){
    if(auth.authenticated){
      return children
    }else{
      return redirect('/')
    }
  }
}

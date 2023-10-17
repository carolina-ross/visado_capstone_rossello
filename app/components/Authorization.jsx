'use client'

import { useContext , useEffect } from "react"
import { redirect } from 'next/navigation'
import { AuthContext } from "../context/AuthContext"

export const Authorization = ({children}) => {

  const { auth } = useContext(AuthContext);

  console.log("enter here" , auth)

  if(!auth.authenticated){
    redirect('/')
  }

  return (
    auth.authenticated ? children : null
  )
}

"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Logo } from "./Logo"
import Image from "next/image"
import Link from "next/link"

export const Profile = () => {
  
  const { auth , setAuth } = useContext(AuthContext)

  const logout = () => {
    setAuth({})
    localStorage.removeItem("authVisado");
  }

  console.log("here" , auth)
  return (
    <div className="profile">

        <div className="profile-header">
            <Logo />
        </div>

        <div className="profile-body">
            <h1>Hello { auth.user?.name }</h1>
            <Image src="/register-icon.svg" height={207} width={207} />
            <div className="profile-details">
                <span>ID: {  auth.user?._id }</span>
                <span>{ auth.user?.username }</span>
            </div>
            <Link href="/savedtrips" className="btn" >
                Saved Trips
            </Link>
            <button onClick={logout} type="button" className="btn" >
                Log Out
            </button>
        </div>

    </div>
  )
}

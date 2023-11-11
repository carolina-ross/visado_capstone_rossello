"use client"
import { FormRegister } from "../components/FormRegister"
import { FormLogin } from "../components/FormLogin"
import { Footer } from "../components/Footer"
import { redirect } from 'next/navigation'
import { useContext , useEffect , useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {

  const { auth , setAuth } = useContext(AuthContext)

  const [isDesktop , setIsDesktop] = useState(true)

  useEffect(()=>{
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 1024 ? true : false)
      window.addEventListener('resize' , ()=>{
        setIsDesktop(window.innerWidth > 1024 ? true : false)
      });
    }
  },[])

  if(auth.authenticated){
    return redirect('/profile')
  }else{
    return (
      <div>
        <div className="forms-container">
          <FormRegister isDesktop={isDesktop} />
          {
            isDesktop ? <FormLogin /> : null
          }
        </div>
        <Footer />
      </div>
    )
  }
}

'use client'

import { useState , useContext , useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ButtonBack } from "./ButtonBack"
import { useRouter } from 'next/navigation'
import { LoadingComponent } from './LoadingComponent'


export const FormLogin = () => {

  const { auth , setAuth } = useContext(AuthContext);

  const [ isLoading , setIsLoading ] = useState(false)

  const [ loginForm , setLoginForm ] = useState({})
 
  const [isDesktop , setIsDesktop] = useState(true)

  useEffect(()=>{
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 1024 ? true : false)
      window.addEventListener('resize' , ()=>{
        setIsDesktop(window.innerWidth > 1024 ? true : false)
      });
    }
  },[])

  const [ errorLogin , setErrorLogin ] = useState({error: false , message: ''})

  const router = useRouter();

  useEffect(()=>{
    if(auth.authenticated){
        router.push('/profile')
    }
  } , [auth])


  const handleChange = (event) => {
    setErrorLogin({error: false , message: ""})
    setLoginForm({
        ...loginForm,
        [event.target.name] : event.target.value
    })
  } 

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{

        setIsLoading(true)

        const response = await fetch('/api/users/login' , {
            method: 'POST',
            body: JSON.stringify(loginForm)
        })

        const data = await response.json();

        setIsLoading(false)
        
        if(!data.success) 
            throw data
        
        localStorage.setItem("authVisado" , JSON.stringify({authenticated: true , user: data.data , token: data.token }))
        
        setAuth({authenticated: true , user: data.data , token: data.token})

    }catch(error){
        setErrorLogin({error: true , message: error.message})
    }
  }

  return (
    <div className="form-register login">

        {
            !isDesktop ? 
                <div className="form-register-header login">
                    <ButtonBack path="/register" />
                </div>
            : null
        }

       

        <div className="form-register-body login">
            {
                isDesktop ? 
                    <div className="form-register-title login">
                        <h2>Already a member?</h2>
                    </div>
                : null
            }

            <form onSubmit={handleSubmit}>
                <div className="form-item first">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="email" id="email" name="email" />
                </div>

                <div className="form-item second">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" id="password" name="password" />
                </div>
                <div className="container-button">
                    <button type="submit" className="btn" >
                        Login
                    </button>
                </div>

                {
                    errorLogin.error ? <span style={{color: 'red' , display: 'block' , textAlign: 'center'}}> {errorLogin.message} </span> : null
                }

                {
                    isLoading ? <LoadingComponent /> : null
                }

            </form>
        </div>

    </div>
  )
}

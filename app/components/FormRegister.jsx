'use client'

import { useState , useContext , useEffect } from 'react'
import { LoadingComponent } from './LoadingComponent'
import { AuthContext } from '../context/AuthContext'
import { ButtonBack } from "./ButtonBack"
import { useRouter } from 'next/navigation'



export const FormRegister = ({isDesktop}) => {

  const { auth , setAuth } = useContext(AuthContext);

  const [ registerForm , setRegisterForm ] = useState({})

  const [ errorRegister , setErrorRegister ] = useState({error: false , message: ''})

  const [ isLoading , setIsLoading ] = useState(false)

  const router = useRouter();

  useEffect(()=>{
    if(auth.authenticated){
        router.push('/profile')
    }
  } , [auth])

  const handleChange = (event) => {
    setErrorRegister({error: false , message: ""})
    setRegisterForm({
        ...registerForm,
        [event.target.name] : event.target.value
    })
  } 


  const handleSubmit = async(event) => {
    event.preventDefault();
    try{

        setIsLoading(true);

        const response = await fetch('/api/users' , {
            method: 'POST',
            body: JSON.stringify(registerForm)
        })

        const data = await response.json();

        setIsLoading(false);
        
        if(!data.success) 
            throw data

        localStorage.setItem("authVisado" , JSON.stringify({authenticated: true , user: data.data , token: data.token }))

        setAuth({authenticated: true , user: data.data , token: data.token})

    }catch(error){
        setErrorRegister({error: true , message: error.message})
    }
  }

  return (
    <div className="form-register">

        <div className="form-register-header">
            <ButtonBack />
        </div>

        <div className="form-register-body">
            <div className="form-register-title">
                <h1>Want to access more features?</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <h2>Register Here</h2>
                <div className="form-item first">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="email" id="email" name="email" />
                </div>
                <div className="form-item first">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} type="text" id="name" name="name" />
                </div>
                <div className="form-item second">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} type="text" id="username" name="username" />
                </div>

                <div className="form-item second">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" id="password" name="password" />
                </div>
                <div className="container-button">
                    <button type="submit" className="btn" >
                        Register
                    </button>
                </div>

                {
                    errorRegister.error ? <span style={{color: 'red' , display: 'block' , textAlign: 'center'}}> {errorRegister.message} </span> : null
                }

                {
                    !isDesktop ? 
                        <div className="container-login">
                            <span>Already a member?</span>
                            <button type="button" className="btn" onClick={() => router.push('login')} >
                                Log In
                            </button>
                        </div>
                    : null
                }

            </form>
        </div>

        {  isLoading ? <LoadingComponent /> : null }
    </div>
  )
}

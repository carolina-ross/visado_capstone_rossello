'use client'

import { useRouter } from 'next/navigation'
import { RegisterButton } from './RegisterButton'
import { useState } from 'react'
import { Logo } from './Logo'
import '../page.module.css'

export const FormFindVisa = () => {

  const router = useRouter();

  const [ inputParams , setInputParams ] = useState({citizenship: '' , destination: ''});

  const handleChange = (event) => {
    setInputParams({
        ...inputParams,
        [event.target.name] : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/visadetails?citizenship=${ inputParams.citizenship }&destination=${ inputParams.destination }`)
  }

  return (
    <div className="form-find-visa">

        <div className="form-find-visa-header">
            <Logo />
            <RegisterButton />
        </div>

        <div className="form-find-visa-body">
            <div className="form-find-visa-title">
                <h1>Welcome!</h1>
                <h2>Find your Visa</h2>
            </div>

            <form onSubmit={handleSubmit}>
        
                <div className="form-item first">
                    <label htmlFor="citizenship">Citizenship</label>
                    <input onChange={handleChange} type="text" id="citizenship" name="citizenship" />
                </div>
                <div className="form-item second">
                    <label htmlFor="destination">Destination</label>
                    <input onChange={handleChange} type="text" id="destination" name="destination" />
                </div>
                <div className="container-button">
                    <button type="submit" className="btn">
                        Search
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

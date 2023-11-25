"use client";

import { useContext , useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoadingComponent } from './LoadingComponent';
import { useRouter } from 'next/navigation'
import React from 'react'

export const ButtonSaveTrip = ({plan}) => {

  const router = useRouter();

  const {auth} = useContext(AuthContext);

  const [isLoading , setIsLoading ] = useState(false)
  
  const savePlan = async() =>{

    setIsLoading(true)

    const response = await fetch(`/api/plans`,{
        method: 'POST',
        body: JSON.stringify({token: auth.token , plan_id: plan.data._id })
    })

    const data = await response.json();

    setIsLoading(false)

    router.push('/savedtrips')

  }

  return (
    <>
        {
            plan.success && auth.authenticated && !plan.isSaved ? <div style={{marginTop: '25px' , textAlign: 'center'}}>
                                <button type="button" onClick={savePlan} className="btn">
                                    Save Plan
                                </button>
                            </div> : ''
        }

        {  isLoading ? <LoadingComponent /> : null }
    </>
    
  )
}

"use client";

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import React from 'react'

export const ButtonSaveTrip = ({plan}) => {

  const {auth} = useContext(AuthContext);

  
  const savePlan = async() =>{

    const response = await fetch(`/api/plans`,{
        method: 'POST',
        body: JSON.stringify({token: auth.token , plan_id: plan.data._id })
    })

    const data = await response.json();

  }

  return (
    <>
        {
            plan.success && auth.authenticated ? <div style={{marginTop: '25px' , textAlign: 'center'}}>
                                <button type="button" onClick={savePlan} className="btn">
                                    Save Plan
                                </button>
                            </div> : ''
        }
    </>
    
  )
}

"use client";

import { useState , useContext , useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import { SavedTrip } from "./SavedTrip";

export const SavedTrips = () => {

    const [ plans , setPlans ] = useState([])

    const { auth } = useContext(AuthContext)

    const getPlansSaved = async()=>{
        const response = await fetch(`/api/users/plans`,{
            method: 'POST',
            body: JSON.stringify({token: auth.token })
        })
        
        const data = await response.json();

        setPlans(data.data.plans);
    }

    const removePlan = async(idPlan) => {
        try{
            const response = await fetch(`/api/users/plans`,{
                method: 'DELETE',
                body: JSON.stringify({token: auth.token , plan_id: idPlan })
            })
            const newPlans = plans.filter(plan => {
                return plan._id !== idPlan
            })

            setPlans(newPlans)

        }catch(error){
            console.log("error" , error)
        }
       

    }

    useState(()=>{
        getPlansSaved()
    } , [])

    return (
        <>
            {
                plans.map((plan , idx) =>{
                    return <SavedTrip removePlan={removePlan}  plan={plan} key={idx} title={plan.destination} />
                })
            }
        </>
    )
}

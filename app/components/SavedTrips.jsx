"use client";

import { useState , useContext , useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import { SavedTrip } from "./SavedTrip";

export const SavedTrips = () => {

    const [ plans , setPlans ] = useState([])

    const { auth } = useContext(AuthContext)

    const getPlansSaved = async()=>{
        const response = await fetch(`http://localhost:3000/api/users/plans`,{
            method: 'POST',
            body: JSON.stringify({token: auth.token })
        })
        


        const data = await response.json();

        console.log("data" , data)

        setPlans(data.data.plans);
    }

    useState(()=>{
        getPlansSaved()
    } , [])

    return (
        <>
            {
                plans.map((plan , idx) =>{
                    return <SavedTrip plan={plan} key={idx} title={plan.destination} />
                })
            }
        </>
    )
}

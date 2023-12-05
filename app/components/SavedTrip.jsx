'use client'
import { useRouter } from "next/navigation"
import { useContext , useState } from 'react';
import { AuthContext } from '../context/AuthContext';
export const SavedTrip = ({title , plan , removePlan}) => {

  const router = useRouter();
  const {auth} = useContext(AuthContext);
  const handleClick = () => {
    router.push(`/visadetails?destination=${plan.destination}&citizenship=${plan.citizenship}`)
  }

  const handleRemove = async(event) => {
    event.stopPropagation();
    removePlan(plan._id);
  }

  return (
    <div className="card-trip" onClick={handleClick}>
        <div className="card-trip-image">
          <img src={plan.visa_details.destinationCountry.imageUrl} alt="" />
          <div onClick={handleRemove} className="remove-trip"></div>
        </div>
        <span className="card-trip-title">Citizenship: <strong> {plan.citizenship}</strong></span>
        <span className="card-trip-title">Destination: <strong>{plan.destination}</strong></span>
    </div>
  )
}

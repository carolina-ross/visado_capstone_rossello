'use client'
import { useRouter } from "next/navigation"
export const SavedTrip = ({title , plan}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/visadetails?destination=${plan.destination}&citizenship=${plan.citizenship}`)
  }

  return (
    <div className="card-trip" onClick={handleClick}>
        <div className="card-trip-image">
          <img src={plan.visa_details.destinationCountry.imageUrl} alt="" />
        </div>
        <span className="card-trip-title">Citizenship: <strong> {plan.citizenship}</strong></span>
        <span className="card-trip-title">Destination: <strong>{plan.destination}</strong></span>
    </div>
  )
}

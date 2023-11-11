'use client'
import { useRouter } from "next/navigation"
export const SavedTrip = ({title , plan}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/visadetails?destination=${plan.destination}&citizenship=${plan.citizenship}`)
  }

  console.log("plan" , plan.visa_details.destinationCountry);

  return (
    <div className="card-trip" onClick={handleClick}>
        <div className="card-trip-image">
          <img src={plan.visa_details.destinationCountry.imageUrl} alt="" />
        </div>
        <span className="card-trip-title">{title}</span>
    </div>
  )
}

'use client'
import { useRouter } from "next/navigation"
export const SavedTrip = ({title , plan}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/visadetails?destination=${plan.destination}&citizenship=${plan.citizenship}`)
  }

  return (
    <div className="card-trip" onClick={handleClick}>
        <div className="card-trip-image"></div>
        <span className="card-trip-title">{title}</span>
    </div>
  )
}

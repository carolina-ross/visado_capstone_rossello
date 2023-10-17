import { ButtonSaveTrip } from "./ButtonSaveTrip"

async function getVisaDetails(citizenship , destination){
    const response = await fetch(`http://localhost:3000/api/plans?destination=${destination}&citizenship=${citizenship}`)
    return response.json()
}

export const VisaDetail = async({searchParams}) => {

  const data = await getVisaDetails(searchParams.citizenship , searchParams.destination)
// 


  return (
    <div className="visa-detail">
        <h1 className="visa-detail-title">{searchParams.destination}</h1>
        <div className="visa-detail-container">
            {
              data.success ? data.data.visa_details.travelRestriction.details : data.message
            }
        </div>

        <ButtonSaveTrip plan={data} />
    </div>
  )
}

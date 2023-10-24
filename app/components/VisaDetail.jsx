import { ButtonSaveTrip } from "./ButtonSaveTrip"
import * as nodeFetch from "node-fetch";

async function getVisaDetails(citizenship , destination){
    const response = await nodeFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/plans/get`,{
      method: 'POST',
      body: JSON.stringify({
        destination: destination,
        citizenship: citizenship,
        })
    })
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

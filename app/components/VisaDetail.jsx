import { ButtonSaveTrip } from "./ButtonSaveTrip"
import * as nodeFetch from "node-fetch";

async function getVisaDetails(citizenship , destination , token){
    const response = await nodeFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/plans/get`,{
      method: 'POST',
      body: JSON.stringify({
        destination: destination,
        citizenship: citizenship,
        token: token
      })
    })
    return response.json()
}

export const VisaDetail = async({searchParams , token}) => {

  const data = await getVisaDetails(searchParams.citizenship , searchParams.destination , token)

  const visaDetailsList = () => {

    let renderHtml = [];
    if(data.data.visa_details.visaCountryProcess){
        renderHtml = data.data.visa_details.visaCountryProcess?.map((step)=>{
          return <li> <strong>{ step.visaProcess.title }:</strong> {step.visaProcess.details} </li>
        })
    }else{
      renderHtml = data.data.visa_details.visaCountryDocuments?.map((step)=>{
        return <li> <strong>{ step.visaDocument.name }:</strong> {step.visaDocument.details} </li>
      })
    }

    return renderHtml;
  }

  return (
    <div className="visa-detail">
        <h1 className="visa-detail-title">{searchParams.destination}</h1>
        <div className="visa-detail-container">
            {
              data.success && !data.data.visa_details.error ? <ol>

                {
                  visaDetailsList()
                }

              
              </ol> : <>
                { data.message ? data.message : 'Info not found' }
              </>
            }
        </div>

        <ButtonSaveTrip plan={data} />
    </div>
  )
}

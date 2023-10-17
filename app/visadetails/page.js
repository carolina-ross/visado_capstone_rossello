import { Footer } from "../components/Footer"
import { VisaDetail } from "../components/VisaDetail"
import { ButtonBack } from "../components/ButtonBack"
export default function VisaDetailsPage({searchParams}){
  return (
    <div className="visa-details-page">
        <div className="visa-details-header header">
          <ButtonBack />
        </div>
        <VisaDetail searchParams={searchParams} />
        <Footer />
    </div>
  )
}

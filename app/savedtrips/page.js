import { Footer } from "../components/Footer"
import { Logo } from "../components/Logo"
import { RegisterButton } from "../components/RegisterButton"
import { Authorization } from "../components/Authorization"
import { SavedTrips } from "../components/SavedTrips"



export default function PageSavedTrips(){

  return (
    <Authorization>
      <div className="saved-trips-page">
          <div className="saved-trips-header header">
              <Logo />
              <RegisterButton />
          </div>
          <div className="saved-trips-cards">
              <SavedTrips  />
          </div>
          <Footer />
      </div>
    </Authorization>
  )
}

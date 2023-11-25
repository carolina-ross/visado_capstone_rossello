"use client"
import { useContext} from "react";
import { Footer } from "../components/Footer"
import { VisaDetail } from "../components/VisaDetail"
import { ButtonBack } from "../components/ButtonBack"
import { AuthContext } from "../context/AuthContext"
export default function VisaDetailsPage({searchParams}){

  const { auth } = useContext(AuthContext)
  console.log("auth my :(" , auth)

  const token = auth.authenticated ? auth.token : 'none'

  return (
    <div className="visa-details-page">
        <div className="visa-details-header header">
          <ButtonBack />
        </div>
        <VisaDetail token={token} searchParams={searchParams} />
        <Footer />
    </div>
  )
}

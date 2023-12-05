import Link from "next/link"
import Image from "next/image"
import { ProfileLogo } from "./ProfileLogo"
export const RegisterButton = () => {
  return (
     <Link href="/register" className="register-icon">
        <ProfileLogo widthCircle={82} heightCircle={82} fontSize="24px" />
     </Link>
  )
}

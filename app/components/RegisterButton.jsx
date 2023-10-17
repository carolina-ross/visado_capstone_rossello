import Link from "next/link"
import Image from "next/image"
export const RegisterButton = () => {
  return (
     <Link href="/register">
        <Image src="/register-icon.svg" height={82} width={82} />
     </Link>
  )
}

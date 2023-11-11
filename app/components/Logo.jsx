import Link from "next/link"
import Image from "next/image"
export const Logo = () => {
  return (
     <Link href="/" className="logo">
        <Image  src="/logo.svg" height={96} width={96} alt="Logo"/>
     </Link>
  )
}

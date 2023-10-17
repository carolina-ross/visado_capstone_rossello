import Link from "next/link"
import Image from "next/image"
export const Logo = () => {
  return (
     <Link href="/">
        <Image src="/logo.svg" height={72} width={72} />
     </Link>
  )
}

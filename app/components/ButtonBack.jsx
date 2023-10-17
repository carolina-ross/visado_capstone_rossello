import Link from "next/link"
import Image from "next/image"
export const ButtonBack = () => {
  return (
     <Link href="/">
        <Image alt="arrow-back" src="/back-arrow.svg" height={50} width={50} />
     </Link>
  )
}

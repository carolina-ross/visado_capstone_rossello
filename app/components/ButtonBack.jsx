import Link from "next/link"
import Image from "next/image"
export const ButtonBack = ({path = "/"}) => {
  return (
     <Link href={path}>
        <Image alt="arrow-back" src="/back-arrow.svg" height={50} width={50} />
     </Link>
  )
}

import { Profile } from "../components/Profile"
import { Footer } from "../components/Footer"
import { Authorization } from "../components/Authorization"

export default function Home() {
  return (
    <>
        <Authorization>
          <Profile />
        </Authorization>
        <Footer />
    </>
  )
}

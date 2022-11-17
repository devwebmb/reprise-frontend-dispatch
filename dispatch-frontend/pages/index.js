import PrincipalNavbar from "../components/navbar/PrincipalNavbar"
import HomeHeader from "../components/home-components/Homeheader"
import AlgosSection from "../components/home-components/AlgosSection"
import WorksCategories from "../components/home-components/WorksCategories"
import ThibaultPresentation from "../components/home-components/ThibaultPresentation"

export default function Home() {
  return (
    <div>
      <PrincipalNavbar />
      <HomeHeader />
      <AlgosSection />
      <WorksCategories />
      <ThibaultPresentation />
    </div>
  )
}

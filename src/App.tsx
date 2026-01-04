import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import gsap from "gsap"
import { ScrollTrigger, ScrollSmoother } from "gsap/all"
import MessageSection from "./sections/MessageSection"
import FlavourSection from "./sections/FlavourSection"
import { useGSAP } from "@gsap/react"
import NutritionSection from "./sections/NutritionSection"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (
    <div>
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavourSection />
          <NutritionSection/>
           <div className="h-dvh border-2"></div>
    </div>
        </div>
      </div>

     
  )
}

export default App

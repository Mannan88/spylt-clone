import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"


const FlavTitle = () => {

  useGSAP(()=>{

    const firstTxtSplit = SplitText.create(".first-text-split",{
      type:"chars",
    })
    const secondTxtSplit = SplitText.create(".second-text-split",{
      type:"chars",
    })

    gsap.from(firstTxtSplit.chars,{
      duration:1,
      yPercent:200,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top 30%",
      }
    });

    gsap.to(".flavor-text-scroll",{
      duration:1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        scrollTrigger:{
          trigger:".flavor-section",
          start:"top 10%",
          
        }
    })

      gsap.from(secondTxtSplit.chars,{
      duration:1,
      yPercent:200,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".flavor-section",
        start:"top 1%",
      }
    });

  })

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16" >
        <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
           <h1>We have 6</h1>
      </div>
      <div style={{
      clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      }} className="flavor-text-scroll ">
        <div className="bg-mid-brown px-3 pt-2 pb-4">
            <h2 className=" text-milk">
                Freaking
            </h2>
        </div>
      </div>
      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        delicious flavors
      </div>
  </div>
  )
}

export default FlavTitle
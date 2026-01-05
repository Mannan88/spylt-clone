import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
const VideoPin = () => {
 const isMobile = useMediaQuery({
            query: "(max-width: 768px)",
        });
    useGSAP(()=>{
if(!isMobile){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".vd-pin-section",
            start:"-15% top",
            end:"200% top",
            scrub:1.5,
            pin:true,
        }
    });
     tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
}
       
    })

    return (
        <section className="vd-pin-section">
            <div
                style={{
                      clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)", //this means 6% reveal
                }}
                className="size-full video-box">
                <video
                    src="/videos/pin-video.mp4"
                    playsInline
                    muted
                    autoPlay
                    loop
                />
                <div className="abs-center md:scale-100 scale-200">
                    <img src="/images/svg/circle-text.svg"
                        className="spin-circle"
                    />
                    <div className="play-btn">
                        <img src="/images/svg/play.svg" alt="play button"
                            className="size-[3vw] ml-[.5vw]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoPin
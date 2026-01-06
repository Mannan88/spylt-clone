import { useGSAP } from "@gsap/react";
import { cards } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
const Testimonial = () => {
     const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
    const vidRef = useRef<HTMLVideoElement[]>([])
    const handlePlay = (index: number) => {
        const video = vidRef.current[index]
        if (video) {
            video.play();
        }
    };
    const handlePause = (index: number) => {
        const video = vidRef.current[index]
        if (video) {
            video.pause()
        }
    }

    useGSAP(() => {

if(!isMobile){
     gsap.set(".testimonials-section", {
            marginTop: "-140vh",
        }) // we can define an initial value to elements using set method

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
            }
        })
        tl.to(".testimonials-section .first-title", {
            xPercent: 70,
        })
        .to(".testimonials-section .second-title", {
            xPercent: 25,
        },"<")
        .to(".testimonials-section .third-title", {
            xPercent: -50,
        },"<") //overlapping parameter, to say that these animations must happen simultaneously
}

       

        const cardTl = gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"10% top",
                end:"200% top",
                scrub:1.5,
                pin:true,
            }
        })

        cardTl.from(".vd-card",{
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut",
        })
    })

    return (
        <section className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-20">
                <h1 className="text-black first-title">What's</h1>
                <h1 className="text-light-brown second-title">Everyone</h1>
                <h1 className="text-black third-title">Talking</h1>
            </div>

            <div className="pin-box ">
                {cards.map(
                    (
                        card: {
                            src: string;
                            rotation: string;
                            name: string;
                            img: string;
                            translation?: string;
                        },
                        index: number
                    ) => (
                        <div
                            key={index}
                            className={`vd-card ${card.translation} ${card.rotation}`}
                            onMouseEnter={() => handlePlay(index)}
                            onMouseLeave={() => handlePause(index)}
                        >
                            <video
                                ref={(vid) => { if (vid) vidRef.current[index] = vid }}
                                src={card.src}
                                playsInline
                                muted
                                loop
                                className="size-full object-cover"
                            />
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Testimonial;
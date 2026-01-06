import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface Flavor {
  name: string;
  color: string;
  rotation: string;
}

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 20%",
        end: "bottom center",
        scrub: true,
      },
    });

     if(!isTablet){
    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );}
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor: Flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[80vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`images/svg/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
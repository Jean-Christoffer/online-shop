"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Heading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const heading = headingRef.current;
      gsap.to(
        { val: 0 },
        {
          val: 1,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          onUpdate: function () {
            const progress = this.progress();
            const shadow1 = gsap.utils.interpolate(7, 10, progress);
            const shadow2 = gsap.utils.interpolate(10, 15, progress);
            const shadow3 = gsap.utils.interpolate(21, 25, progress);
            const shadow4 = gsap.utils.interpolate(42, 45, progress);

            heading.style.textShadow = `
                0 0 ${shadow1}px #fff, 
                0 0 ${shadow2}px #f09, 
                0 0 ${shadow3}px #f09, 
                0 0 ${shadow4}px #f09`;
          },
        }
      );
    }
  }, []);
  return (
    <>
      <h1
        className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl"
        ref={headingRef}
      >
        PopNet Boutique
      </h1>
    </>
  );
};

export default Heading;

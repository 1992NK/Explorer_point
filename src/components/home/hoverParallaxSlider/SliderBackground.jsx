"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./sliderBackground.module.css";

const SliderBackground = ({ slides, activeIndex, sectionRef }) => {
  const backgroundRef = useRef(null);
  const slideRefs = useRef([]);
  const imageRefs = useRef([]);
  const previousIndexRef = useRef(0);
  const firstLoadRef = useRef(true);
  const timelineRef = useRef(null);

  useEffect(() => {
    const currentSlide = slideRefs.current[activeIndex];
    const currentImage = imageRefs.current[activeIndex];

    if (!currentSlide || !currentImage) return;

    if (firstLoadRef.current) {
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        gsap.set(slide, {
          autoAlpha: index === activeIndex ? 1 : 0,
          clipPath:
            index === activeIndex
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 100% 0% 0%)",
          WebkitClipPath:
            index === activeIndex
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 100% 0% 0%)",
          zIndex: index === activeIndex ? 2 : 0
        });
      });

      imageRefs.current.forEach((image) => {
        if (!image) return;

        gsap.set(image, {
          xPercent: 0,
          scale: 1.05
        });
      });

      previousIndexRef.current = activeIndex;
      firstLoadRef.current = false;

      return;
    }

    const previousIndex = previousIndexRef.current;

    if (previousIndex === activeIndex) return;

    const previousSlide = slideRefs.current[previousIndex];

    if (!previousSlide) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      if (index !== previousIndex && index !== activeIndex) {
        gsap.set(slide, {
          autoAlpha: 0,
          zIndex: 0,
          clipPath: "inset(0% 100% 0% 0%)",
          WebkitClipPath: "inset(0% 100% 0% 0%)"
        });
      }
    });

    gsap.set(previousSlide, {
      autoAlpha: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      WebkitClipPath: "inset(0% 0% 0% 0%)",
      zIndex: 1
    });

    gsap.set(currentSlide, {
      autoAlpha: 1,
      clipPath: "inset(0% 100% 0% 0% round 0px 120px 120px 0px)",
      WebkitClipPath:
        "inset(0% 100% 0% 0% round 0px 120px 120px 0px)",
      zIndex: 2
    });

    gsap.set(currentImage, {
      xPercent: 10,
      scale: 1.12
    });

    timelineRef.current = gsap.timeline({
      onComplete: () => {
        gsap.set(previousSlide, {
          autoAlpha: 0,
          zIndex: 0
        });

        gsap.set(currentSlide, {
          clipPath: "inset(0% 0% 0% 0%)",
          WebkitClipPath: "inset(0% 0% 0% 0%)",
          zIndex: 2
        });
      }
    });

    timelineRef.current.to(
      currentSlide,
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        WebkitClipPath: "inset(0% 0% 0% 0% round 0px)",
        duration: 1.7,
        ease: "power4.inOut"
      },
      0
    );

    timelineRef.current.to(
      currentImage,
      {
        xPercent: 0,
        scale: 1.05,
        duration: 2,
        ease: "power3.out"
      },
      0
    );

    previousIndexRef.current = activeIndex;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [activeIndex]);

  useEffect(() => {
    if (!sectionRef.current || !backgroundRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const background = backgroundRef.current;

    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const moveX = gsap.quickTo(background, "x", {
          duration: 1.6,
          ease: "power3.out"
        });

        const moveY = gsap.quickTo(background, "y", {
          duration: 1.6,
          ease: "power3.out"
        });

        const handleMouseMove = (event) => {
          const bounds = section.getBoundingClientRect();

          const x =
            (event.clientX - bounds.left) / bounds.width - 0.5;

          const y =
            (event.clientY - bounds.top) / bounds.height - 0.5;

          moveX(x * -20);
          moveY(y * -15);
        };

        const handleMouseLeave = () => {
          moveX(0);
          moveY(0);
        };

        section.addEventListener("mousemove", handleMouseMove);
        section.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        return () => {
          section.removeEventListener(
            "mousemove",
            handleMouseMove
          );

          section.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        };
      }
    );

    matchMedia.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.fromTo(
          background,
          {
            yPercent: -2
          },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      }
    );

    return () => {
      matchMedia.revert();
    };
  }, [sectionRef]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={backgroundRef}
        className={styles.background}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className={styles.slide}
          >
            <div
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              className={styles.image}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderBackground;
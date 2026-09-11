"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./journeyCard.module.css";

const JourneyCard = ({ item }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        clipPath: "inset(0 100% 0 0)",
        scale: 1.06,
      });

      gsap.set(maskRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(contentRef.current, {
        y: 20,
        opacity: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          once: true,
        },
      });

      timeline
        .to(maskRef.current, {
          scaleX: 1,
          duration: 0.45,
          ease: "power3.inOut",
        })
        .set(imageRef.current, {
          clipPath: "inset(0 0% 0 0)",
        })
        .to(
          imageRef.current,
          {
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          "<"
        )
        .set(maskRef.current, {
          transformOrigin: "right center",
        })
        .to(maskRef.current, {
          scaleX: 0,
          duration: 0.45,
          ease: "power3.inOut",
        })
        .to(
          contentRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.18"
        );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <article ref={cardRef} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div ref={imageRef} className={styles.imageReveal}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 767px) 76vw, 310px"
            className={styles.image}
            draggable={false}
          />
        </div>

        <div ref={maskRef} className={styles.revealMask} />

        <div className={styles.overlay} />

        <div ref={contentRef} className={styles.cardContent}>
          <h3 className={styles.title}>
            {item.title}
          </h3>

          <button type="button" className={styles.learnMore}>
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
};

export default JourneyCard;
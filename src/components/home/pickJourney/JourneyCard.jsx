"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./journeyCard.module.css";

const JourneyCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const imageRevealRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageReveal = imageRevealRef.current;
    const mask = maskRef.current;
    const content = contentRef.current;

    if (!card || !imageReveal || !mask || !content) return;

    gsap.set(imageReveal, {
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(mask, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(content, {
      y: 20,
      opacity: 0,
    });

    let hasAnimated = false;
    let timeline = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;

        timeline = gsap.timeline({
          delay: index * 0.08,
        });

        timeline
          .to(mask, {
            scaleX: 1,
            duration: 0.48,
            ease: "power3.inOut",
          })
          .set(imageReveal, {
            clipPath: "inset(0 0% 0 0)",
          })
          .set(mask, {
            transformOrigin: "right center",
          })
          .to(mask, {
            scaleX: 0,
            duration: 0.48,
            ease: "power3.inOut",
          })
          .to(
            content,
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power3.out",
            },
            "-=0.22"
          );

        observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();

      if (timeline) {
        timeline.kill();
      }

      gsap.killTweensOf([imageReveal, mask, content]);
    };
  }, [index]);

  return (
    <article ref={cardRef} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div ref={imageRevealRef} className={styles.imageReveal}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 767px) 78vw, (max-width: 1199px) 33vw, 20vw"
            className={styles.image}
            draggable={false}
          />
        </div>

        <div ref={maskRef} className={styles.revealMask} />

        <div className={styles.overlay} />

        <div className={styles.shine} />

        <div ref={contentRef} className={styles.content}>
          <span className={styles.number}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className={styles.bottom}>
            <h3 className={styles.title}>
              {item.title}
            </h3>

            <span className={styles.arrow}>
              ↗
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JourneyCard;
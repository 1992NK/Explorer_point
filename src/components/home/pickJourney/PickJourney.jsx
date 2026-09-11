"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import JourneyGrid from "./JourneyGrid";
import styles from "./pickJourney.module.css";

const PickJourney = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const items = content.querySelectorAll("[data-animate]");

    gsap.set(items, {
      y: 45,
      opacity: 0,
    });

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;

        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        });

        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(content);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(items);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={contentRef} className={styles.content}>
          <span data-animate className={styles.eyebrow}>
            WHERE TO GO
          </span>

          <div className={styles.headingRow}>
            <h2 data-animate className={styles.heading}>
              Pick your own journey.
            </h2>

            <p data-animate className={styles.description}>
              Discover unforgettable destinations across India. Choose the journey that
              matches your mood, from mountains and nature to beaches, culture and
              adventure.
            </p>
          </div>
        </div>
      </div>

      <JourneyGrid />
    </section>
  );
};

export default PickJourney;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import JourneyCard from "./JourneyCard";
import { journeyData } from "@/data/journeyData";
import styles from "./pickJourney.module.css";

const PickJourney = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const trackAreaRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

    const section = sectionRef.current;
    const content = contentRef.current;
    const trackArea = trackAreaRef.current;
    const track = trackRef.current;

    if (!section || !content || !trackArea || !track) return;

    let draggable;
    let resizeTimer;

    const ctx = gsap.context(() => {
      const contentItems = content.querySelectorAll("[data-animate]");

      gsap.fromTo(
        contentItems,
        {
          y: 55,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    const getBounds = () => {
      const sectionRect = section.getBoundingClientRect();
      const trackAreaRect = trackArea.getBoundingClientRect();

      const visibleWidth = sectionRect.right - trackAreaRect.left;
      const trackWidth = track.scrollWidth;
      const minX = Math.min(0, -(trackWidth - visibleWidth));

      return {
        minX,
        maxX: 0,
      };
    };

    const createDraggable = () => {
      if (draggable) {
        draggable.kill();
      }

      gsap.killTweensOf(track);

      const bounds = getBounds();
      const currentX = Number(gsap.getProperty(track, "x")) || 0;
      const safeX = gsap.utils.clamp(
        bounds.minX,
        bounds.maxX,
        currentX
      );

      gsap.set(track, {
        x: safeX,
        force3D: true,
      });

      draggable = Draggable.create(track, {
        type: "x",
        bounds,
        inertia: true,
        edgeResistance: 0.85,
        dragResistance: 0.02,
        minimumMovement: 2,
        allowNativeTouchScrolling: "y",
        cursor: "grab",
        activeCursor: "grabbing",

        onPress() {
          gsap.killTweensOf(track);
        },

        onDrag() {
          gsap.set(track, {
            force3D: true,
          });
        },

        onThrowUpdate() {
          gsap.set(track, {
            force3D: true,
          });
        },
      })[0];
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        createDraggable();
        ScrollTrigger.refresh();
      }, 200);
    };

    const frame = requestAnimationFrame(() => {
      createDraggable();
      ScrollTrigger.refresh();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);

      if (draggable) {
        draggable.kill();
      }

      gsap.killTweensOf(track);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div ref={contentRef} className={styles.content}>
          <span data-animate className={styles.eyebrow}>
            WHERE TO GO
          </span>

          <h2 data-animate className={styles.heading}>
            Pick your
            <br />
            own journey.
          </h2>

          <p data-animate className={styles.description}>
            Discover unforgettable destinations across India.
            From peaceful mountains and untouched nature to
            vibrant cultures, beaches and incredible local
            flavours, choose a journey that feels completely
            your own.
          </p>

          <button
            data-animate
            type="button"
            className={styles.seeAll}
          >
            See All
          </button>
        </div>

        <div
          ref={trackAreaRef}
          className={styles.trackArea}
        >
          <div
            ref={trackRef}
            className={styles.track}
          >
            {journeyData.map((item) => (
              <JourneyCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickJourney;
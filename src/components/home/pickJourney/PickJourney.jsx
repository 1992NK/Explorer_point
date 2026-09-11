"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import JourneyCard from "./JourneyCard";
import { journeyData } from "@/data/journeyData";
import styles from "./pickJourney.module.css";

gsap.registerPlugin(Draggable);

const PickJourney = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const trackAreaRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const trackArea = trackAreaRef.current;
    const track = trackRef.current;

    if (!section || !content || !trackArea || !track) return;

    let draggableInstance = null;
    let resizeTimer = null;
    let observer = null;
    let contentAnimated = false;

    const contentItems = content.querySelectorAll("[data-animate]");

    gsap.set(contentItems, {
      y: 50,
      opacity: 0,
    });

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting || contentAnimated) return;

        contentAnimated = true;

        gsap.to(contentItems, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
        });

        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(content);

    const getBounds = () => {
      const sectionRect = section.getBoundingClientRect();
      const trackAreaRect = trackArea.getBoundingClientRect();

      const visibleWidth = sectionRect.right - trackAreaRect.left;
      const trackWidth = track.scrollWidth;

      return {
        minX: Math.min(0, visibleWidth - trackWidth),
        maxX: 0,
      };
    };

    const createDraggable = () => {
      if (draggableInstance) {
        draggableInstance.kill();
        draggableInstance = null;
      }

      gsap.killTweensOf(track);

      const bounds = getBounds();

      const currentX =
        Number(gsap.getProperty(track, "x")) || 0;

      const safeX = gsap.utils.clamp(
        bounds.minX,
        bounds.maxX,
        currentX
      );

      gsap.set(track, {
        x: safeX,
        force3D: true,
      });

      draggableInstance = Draggable.create(track, {
        type: "x",

        bounds: {
          minX: bounds.minX,
          maxX: bounds.maxX,
        },

        edgeResistance: 0.85,
        dragResistance: 0.02,
        minimumMovement: 3,
        allowNativeTouchScrolling: true,

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

        onRelease() {
          const currentPosition =
            Number(gsap.getProperty(track, "x")) || 0;

          const finalPosition = gsap.utils.clamp(
            bounds.minX,
            bounds.maxX,
            currentPosition
          );

          if (currentPosition !== finalPosition) {
            gsap.to(track, {
              x: finalPosition,
              duration: 0.35,
              ease: "power3.out",
            });
          }
        },
      })[0];
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        createDraggable();
      }, 200);
    };

    const initFrame = requestAnimationFrame(() => {
      createDraggable();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(initFrame);

      clearTimeout(resizeTimer);

      window.removeEventListener(
        "resize",
        handleResize
      );

      if (observer) {
        observer.disconnect();
      }

      if (draggableInstance) {
        draggableInstance.kill();
        draggableInstance = null;
      }

      gsap.killTweensOf(contentItems);
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      <div className={`container ${styles.container}`}>
        <div
          ref={contentRef}
          className={styles.content}
        >
          <span
            data-animate
            className={styles.eyebrow}
          >
            WHERE TO GO
          </span>

          <h2
            data-animate
            className={styles.heading}
          >
            Pick your
            <br />
            own journey.
          </h2>

          <p
            data-animate
            className={styles.description}
          >
            Discover unforgettable destinations across
            India. From peaceful mountains and untouched
            nature to vibrant cultures, beaches and
            incredible local flavours, choose a journey
            that feels completely your own.
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
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaArrowRight,
  FaCameraRetro,
  FaCompass,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaMountain,
  FaPlane,
  FaSuitcase,
} from "react-icons/fa";
import { GiParachute } from "react-icons/gi";
import ItineraryIntro from "./ItineraryIntro";
import ItineraryFilters from "./ItineraryFilters";
import ItineraryCards from "./ItineraryCards";
import styles from "./itinerarySection.module.css";

gsap.registerPlugin(ScrollTrigger);

const ItinerarySection = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const introRef = useRef(null);
  const filtersRef = useRef(null);
  const cardsRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !backgroundRef.current || !introRef.current || !filtersRef.current || !cardsRef.current || !buttonRef.current) return;

    let mm;

    const ctx = gsap.context(() => {
      mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const section = sectionRef.current;
        const background = backgroundRef.current;
        const intro = introRef.current;
        const filters = filtersRef.current;
        const cards = cardsRef.current;
        const button = buttonRef.current;

        if (!section || !background || !intro || !filters || !cards || !button) return;

        gsap.fromTo(
          background,
          {
            yPercent: -4,
            scale: 1.04,
          },
          {
            yPercent: 6,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );

        const introItems = intro.querySelectorAll("[data-intro]");

        if (introItems.length) {
          gsap.fromTo(
            introItems,
            {
              y: 45,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: intro,
                start: "top 84%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        const filterItems = filters.querySelectorAll("[data-filter]");

        if (filterItems.length) {
          gsap.fromTo(
            filterItems,
            {
              y: 30,
              autoAlpha: 0,
              scale: 0.97,
            },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: filters,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        const cardItems = cards.querySelectorAll("[data-card]");
        const imageMasks = cards.querySelectorAll("[data-image-mask]");
        const cardImages = cards.querySelectorAll("[data-card-image]");
        const cardContents = cards.querySelectorAll("[data-card-content]");

        if (cardItems.length && imageMasks.length && cardImages.length && cardContents.length) {
          gsap.set(cardItems, {
            clipPath: "inset(0% 100% 0% 0% round 18px)",
          });

          gsap.set(imageMasks, {
            clipPath: "inset(0% 100% 0% 0% round 18px 18px 0px 0px)",
          });

          gsap.set(cardImages, {
            scale: 1.1,
          });

          gsap.set(cardContents, {
            y: 18,
            autoAlpha: 0,
          });

          const cardsTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: cards,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          });

          cardsTimeline.to(cardItems, {
            clipPath: "inset(0% 0% 0% 0% round 18px)",
            duration: 0.75,
            stagger: 0.08,
            ease: "power4.inOut",
          });

          cardsTimeline.set(cardItems, {
            clearProps: "clipPath",
          });

          cardsTimeline.to(
            imageMasks,
            {
              clipPath: "inset(0% 0% 0% 0% round 18px 18px 0px 0px)",
              duration: 1.05,
              stagger: 0.08,
              ease: "power4.inOut",
            },
            "+=0.08"
          );

          cardsTimeline.to(
            cardImages,
            {
              scale: 1,
              duration: 1.2,
              stagger: 0.08,
              ease: "power3.out",
            },
            "<"
          );

          cardsTimeline.to(
            cardContents,
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.2"
          );
        }

        gsap.fromTo(
          button,
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: button,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        const section = sectionRef.current;
        const intro = introRef.current;
        const filters = filtersRef.current;
        const cards = cardsRef.current;
        const button = buttonRef.current;

        if (!section || !intro || !filters || !cards || !button) return;

        const introItems = Array.from(intro.querySelectorAll("[data-intro]"));
        const filterItems = Array.from(filters.querySelectorAll("[data-filter]"));
        const topElements = [...introItems, ...filterItems];

        if (topElements.length) {
          gsap.fromTo(
            topElements,
            {
              y: 30,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        const cardItems = cards.querySelectorAll("[data-card]");
        const imageMasks = cards.querySelectorAll("[data-image-mask]");
        const cardImages = cards.querySelectorAll("[data-card-image]");
        const cardContents = cards.querySelectorAll("[data-card-content]");

        if (cardItems.length && imageMasks.length && cardImages.length && cardContents.length) {
          gsap.set(cardItems, {
            clipPath: "inset(0% 100% 0% 0% round 18px)",
          });

          gsap.set(imageMasks, {
            clipPath: "inset(0% 100% 0% 0% round 18px 18px 0px 0px)",
          });

          gsap.set(cardImages, {
            scale: 1.08,
          });

          gsap.set(cardContents, {
            y: 15,
            autoAlpha: 0,
          });

          const mobileTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: cards,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });

          mobileTimeline.to(cardItems, {
            clipPath: "inset(0% 0% 0% 0% round 18px)",
            duration: 0.7,
            stagger: 0.07,
            ease: "power4.inOut",
          });

          mobileTimeline.set(cardItems, {
            clearProps: "clipPath",
          });

          mobileTimeline.to(
            imageMasks,
            {
              clipPath: "inset(0% 0% 0% 0% round 18px 18px 0px 0px)",
              duration: 0.95,
              stagger: 0.07,
              ease: "power4.inOut",
            },
            "+=0.06"
          );

          mobileTimeline.to(
            cardImages,
            {
              scale: 1,
              duration: 1.05,
              stagger: 0.07,
              ease: "power3.out",
            },
            "<"
          );

          mobileTimeline.to(
            cardContents,
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.15"
          );
        }

        gsap.fromTo(
          button,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: button,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);

      if (mm) {
        mm.revert();
      }

      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={backgroundRef} className={styles.background}></div>

      <div className={styles.overlay}></div>

      <div className={styles.floatingElements}>
        <span className={`${styles.floatingIcon} ${styles.iconOne}`}>
          <GiParachute />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconTwo}`}>
          <FaPlane />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconThree}`}>
          <FaCompass />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconFour}`}>
          <FaCameraRetro />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconFive}`}>
          <FaMountain />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconSix}`}>
          <FaMapMarkerAlt />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconSeven}`}>
          <FaSuitcase />
        </span>

        <span className={`${styles.floatingIcon} ${styles.iconEight}`}>
          <FaLocationArrow />
        </span>
      </div>

      <div className={`container ${styles.container}`}>
        <ItineraryIntro introRef={introRef} />

        <ItineraryFilters filtersRef={filtersRef} />

        <div className={styles.cardsArea}>
          <ItineraryCards cardsRef={cardsRef} />
        </div>

        <div ref={buttonRef} className={styles.bottomAction}>
          <span className={styles.actionLine}></span>

          <Link href="/itineraries" className={styles.viewAllButton}>
            <span>View All Itineraries</span>
            <FaArrowRight />
          </Link>

          <span className={styles.actionLine}></span>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
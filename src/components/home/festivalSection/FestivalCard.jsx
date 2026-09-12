"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaArrowRightLong,
  FaCalendarDays,
  FaLocationDot,
  FaMasksTheater,
} from "react-icons/fa6";
import styles from "./festivalCard.module.css";
import detailsStyles from "./festivalDetails.module.css";

const FestivalCard = ({
  festival,
  index,
  isActive,
  openUp,
  onMouseEnter,
  onClick,
}) => {
  const cardRef = useRef(null);
  const maskRef = useRef(null);

  const CategoryIcon =
    festival.categoryIcon || FaMasksTheater;

  const features = Array.isArray(festival.features)
    ? festival.features
    : [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card = cardRef.current;
    const mask = maskRef.current;

    if (!card || !mask) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(mask, {
        clipPath: "inset(0% 0% 0% 0%)",
      });

      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mask,
        {
          clipPath: "inset(0% 100% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          delay: (index % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, card);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [index]);

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${
        isActive ? styles.active : ""
      } ${openUp ? styles.openUp : ""}`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      tabIndex={0}
    >
      <div className={styles.imageArea}>
        <div
          className={styles.imageMask}
          ref={maskRef}
        >
          <Image
            className={styles.image}
            src={festival.image}
            alt={festival.title}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1199px) 33vw, 25vw"
          />

          <div className={styles.imageOverlay}></div>

          <div
            className={`${styles.dateBadge} ${
              styles[festival.badgeClass] || ""
            }`}
          >
            <FaCalendarDays />

            <span>{festival.date}</span>
          </div>

          <div className={styles.thumbnailContent}>
            <h3 className={styles.thumbnailTitle}>
              {festival.title}
            </h3>

            <div className={styles.thumbnailArrow}>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${detailsStyles.details} ${
          openUp
            ? detailsStyles.detailsUp
            : detailsStyles.detailsDown
        } ${
          isActive
            ? detailsStyles.detailsActive
            : ""
        }`}
      >
        <div className={detailsStyles.detailsInner}>
          <div className={detailsStyles.category}>
            <CategoryIcon />
            <span>{festival.category}</span>
          </div>

          <h3 className={detailsStyles.title}>
            {festival.title}
          </h3>

          <div className={detailsStyles.location}>
            <FaLocationDot />
            <span>{festival.location}</span>
          </div>

          <div className={detailsStyles.divider}></div>

          {festival.description && (
            <p className={detailsStyles.description}>
              {festival.description}
            </p>
          )}

          {features.length > 0 && (
            <div className={detailsStyles.features}>
              {features.map(
                (feature, featureIndex) => {
                  const FeatureIcon =
                    feature.icon || FaMasksTheater;

                  return (
                    <div
                      className={
                        detailsStyles.feature
                      }
                      key={
                        feature.id ||
                        `${festival.id}-${featureIndex}`
                      }
                    >
                      <div
                        className={
                          detailsStyles.featureIcon
                        }
                      >
                        <FeatureIcon />
                      </div>

                      <span>{feature.title}</span>
                    </div>
                  );
                }
              )}
            </div>
          )}

          <Link
            className={detailsStyles.viewButton}
            href={`/festivals/${festival.slug}`}
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <span>View Details</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FestivalCard;
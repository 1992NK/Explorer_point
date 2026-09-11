"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { itineraryCards } from "@/data/itineraryData";
import ItineraryCard from "./ItineraryCard";
import styles from "./itineraryCard.module.css";

const ItineraryCards = ({ cardsRef }) => {
  const trackRef = useRef(null);

  const handleSlide = (direction) => {
    if (!trackRef.current) return;

    const moveAmount = trackRef.current.clientWidth * 0.7;

    trackRef.current.scrollBy({
      left: direction === "next" ? moveAmount : -moveAmount,
      behavior: "smooth",
    });
  };

  return (
    <div ref={cardsRef} className={styles.slider}>
      <button
        type="button"
        aria-label="Previous itineraries"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => handleSlide("previous")}
      >
        <ChevronLeft size={27} />
      </button>

      <div ref={trackRef} className={styles.track}>
        {itineraryCards.map((item) => (
          <ItineraryCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Next itineraries"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => handleSlide("next")}
      >
        <ChevronRight size={27} />
      </button>
    </div>
  );
};

export default ItineraryCards;
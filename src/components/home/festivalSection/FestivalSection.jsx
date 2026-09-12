"use client";

import { useEffect, useMemo, useState } from "react";
import FestivalCard from "./FestivalCard";
import FestivalZoneTabs from "./FestivalZoneTabs";
import { festivals, festivalZones } from "@/data/festivalData";
import styles from "./festivalSection.module.css";

const FestivalSection = () => {
  const [activeFestival, setActiveFestival] = useState(null);
  const [activeZone, setActiveZone] = useState("north");
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;

      if (width <= 576) {
        setColumns(1);
      } else if (width <= 992) {
        setColumns(2);
      } else if (width <= 1199) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  const filteredFestivals = useMemo(() => {
    return festivals.filter((festival) => festival.zone === activeZone);
  }, [activeZone]);

  const hasMoreThanOneRow = filteredFestivals.length > columns;

  const lastRowStart = hasMoreThanOneRow
    ? Math.floor((filteredFestivals.length - 1) / columns) * columns
    : filteredFestivals.length;

  const handleZoneChange = (zone) => {
    setActiveZone(zone);
    setActiveFestival(null);
  };

  const handleFestivalEnter = (festivalId) => {
    setActiveFestival(festivalId);
  };

  const handleFestivalLeave = () => {
    setActiveFestival(null);
  };

  const handleFestivalClick = (festivalId) => {
    setActiveFestival((currentFestival) =>
      currentFestival === festivalId ? null : festivalId
    );
  };

  return (
    <section className={styles.festivalSection}>
      <div className="container">
        <div className={styles.headingWrapper}>
          <span className={styles.subHeading}>Festivals of India</span>

          <h2 className={styles.heading}>Celebrate Every Journey</h2>

          <p className={styles.description}>
            Discover colourful celebrations, timeless traditions and unforgettable experiences from across India.
          </p>
        </div>

        <FestivalZoneTabs
          zones={festivalZones}
          activeZone={activeZone}
          onZoneChange={handleZoneChange}
        />

        <div
          className={styles.festivalGrid}
          onMouseLeave={handleFestivalLeave}
        >
          {filteredFestivals.map((festival, index) => {
            const shouldOpenUp =
              hasMoreThanOneRow && index >= lastRowStart;

            return (
              <FestivalCard
                key={`${activeZone}-${festival.id}`}
                festival={festival}
                index={index}
                isActive={activeFestival === festival.id}
                openUp={shouldOpenUp}
                onMouseEnter={() =>
                  handleFestivalEnter(festival.id)
                }
                onClick={() =>
                  handleFestivalClick(festival.id)
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
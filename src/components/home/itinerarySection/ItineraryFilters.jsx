"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronDown, Heart, MapPin } from "lucide-react";
import {
  interestOptions,
  regionOptions,
  tripLengthOptions,
} from "@/data/itineraryData";
import FilterDropdown from "./FilterDropdown";
import styles from "./itineraryFilters.module.css";

const filters = [
  {
    id: "region",
    label: "Region",
    icon: MapPin,
    options: regionOptions,
    placeholder: "Search region...",
    footer: "View All Regions",
  },
  {
    id: "interest",
    label: "Interest",
    icon: Heart,
    options: interestOptions,
    placeholder: "Search interest...",
    footer: "View All Interests",
  },
  {
    id: "tripLength",
    label: "Trip Length",
    icon: CalendarDays,
    options: tripLengthOptions,
    placeholder: "Search trip length...",
    footer: "View All Trip Lengths",
  },
];

const ItineraryFilters = ({ filtersRef }) => {
  const wrapperRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState(null);

  const [selectedFilters, setSelectedFilters] = useState({
    region: "himachal",
    interest: "nature",
    tripLength: "1-day",
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setActiveFilter(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleFilter = (filterId) => {
    setActiveFilter((current) =>
      current === filterId ? null : filterId
    );
  };

  const handleSelect = (filterId, optionId) => {
    setSelectedFilters((current) => ({
      ...current,
      [filterId]: optionId,
    }));
  };

  return (
    <div
      ref={(node) => {
        wrapperRef.current = node;
        filtersRef.current = node;
      }}
      className={styles.filters}
    >
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isOpen = activeFilter === filter.id;

        return (
          <div
            key={filter.id}
            data-filter
            className={styles.filterItem}
          >
            <button
              type="button"
              className={`${styles.filterButton} ${
                isOpen ? styles.filterButtonActive : ""
              }`}
              aria-expanded={isOpen}
              onClick={() => toggleFilter(filter.id)}
            >
              <span className={styles.filterLeft}>
                <Icon size={21} strokeWidth={2.2} />
                <span>{filter.label}</span>
              </span>

              <ChevronDown
                size={18}
                className={`${styles.chevron} ${
                  isOpen ? styles.chevronOpen : ""
                }`}
              />
            </button>

            {isOpen && (
              <FilterDropdown
                type={filter.id}
                options={filter.options}
                selected={selectedFilters[filter.id]}
                placeholder={filter.placeholder}
                footer={filter.footer}
                onSelect={(optionId) =>
                  handleSelect(filter.id, optionId)
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItineraryFilters;
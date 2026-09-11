"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Building2,
  CalendarDays,
  Camera,
  Check,
  Flower2,
  Landmark,
  Leaf,
  Mountain,
  Search,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import styles from "./itineraryFilters.module.css";

const iconMap = {
  nature: Leaf,
  adventure: Mountain,
  heritage: Landmark,
  beach: Waves,
  food: UtensilsCrossed,
  photography: Camera,
  spiritual: Flower2,
  city: Building2,
  calendar: CalendarDays,
};

const FilterDropdown = ({
  type,
  options,
  selected,
  placeholder,
  footer,
  onSelect,
}) => {
  const [search, setSearch] = useState("");

  const filteredOptions = useMemo(() => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search]);

  return (
    <div
      className={`${styles.dropdown} ${
        styles[`${type}Dropdown`]
      }`}
    >
      <div className={styles.search}>
        <Search size={19} strokeWidth={1.8} />

        <input
          type="text"
          value={search}
          placeholder={placeholder}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className={styles.options}>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((item) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            const isActive = selected === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.option} ${
                  isActive ? styles.optionActive : ""
                }`}
                onClick={() => onSelect(item.id)}
              >
                <span className={styles.optionContent}>
                  {item.image && (
                    <span className={styles.thumbnail}>
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="45px"
                      />
                    </span>
                  )}

                  {Icon && (
                    <span
                      className={`${styles.optionIcon} ${
                        styles[`icon_${item.icon}`]
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                  )}

                  <span className={styles.optionText}>
                    {item.label}

                    {item.subLabel && (
                      <span className={styles.optionMeta}>
                        {" "}
                        ({item.subLabel})
                      </span>
                    )}

                    {item.count && (
                      <span className={styles.optionMeta}>
                        {" "}
                        ({item.count})
                      </span>
                    )}
                  </span>
                </span>

                {isActive && (
                  <Check
                    size={20}
                    strokeWidth={2.5}
                    className={styles.check}
                  />
                )}
              </button>
            );
          })
        ) : (
          <div className={styles.noResult}>
            No results found
          </div>
        )}
      </div>

      <button type="button" className={styles.viewAll}>
        <span>{footer}</span>
        <span>→</span>
      </button>
    </div>
  );
};

export default FilterDropdown;
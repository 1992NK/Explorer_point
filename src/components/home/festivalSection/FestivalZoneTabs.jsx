import {
  FaArrowDownLong,
  FaArrowLeftLong,
  FaArrowRightLong,
  FaArrowUpLong,
  FaLocationCrosshairs,
} from "react-icons/fa6";
import styles from "./festivalZoneTabs.module.css";

const zoneIcons = {
  north: FaArrowUpLong,
  south: FaArrowDownLong,
  east: FaArrowRightLong,
  west: FaArrowLeftLong,
  central: FaLocationCrosshairs,
};

const FestivalZoneTabs = ({
  zones,
  activeZone,
  onZoneChange,
}) => {
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {zones.map((zone) => {
          const Icon = zoneIcons[zone.id] || FaLocationCrosshairs;
          const isActive = activeZone === zone.id;

          return (
            <button
              className={`${styles.tab} ${
                isActive ? styles.active : ""
              }`}
              key={zone.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onZoneChange(zone.id)}
            >
              <span className={styles.icon}>
                <Icon />
              </span>

              <span className={styles.label}>
                {zone.label}
              </span>

              <span className={styles.activeLine}></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FestivalZoneTabs;
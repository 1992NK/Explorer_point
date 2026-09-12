import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRightLong,
  FaCalendarDays,
  FaLocationDot,
  FaXmark,
} from "react-icons/fa6";
import styles from "./festivalDetails.module.css";

const FestivalDetails = ({ festival }) => {
  const CategoryIcon = festival.categoryIcon;

  return (
    <aside className={styles.detailsCard} key={festival.id}>
      <div className={styles.imageArea}>
        <Image
          className={styles.image}
          src={festival.image}
          alt={festival.title}
          fill
          sizes="(max-width: 1199px) 100vw, 25vw"
        />

        <div className={styles.imageOverlay}></div>

        <div className={`${styles.dateBadge} ${styles[festival.badgeClass]}`}>
          <FaCalendarDays />

          <span>{festival.date}</span>
        </div>

        <button className={styles.closeButton} type="button" aria-label="Close">
          <FaXmark />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.category}>
          <CategoryIcon />

          <span>{festival.category}</span>
        </div>

        <h3 className={styles.title}>{festival.title}</h3>

        <div className={styles.location}>
          <FaLocationDot />

          <span>{festival.location}</span>
        </div>

        <div className={styles.divider}></div>

        <p className={styles.description}>{festival.description}</p>

        <div className={styles.features}>
          {festival.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <div className={styles.feature} key={feature.id}>
                <div className={styles.featureIcon}>
                  <FeatureIcon />
                </div>

                <span>{feature.title}</span>
              </div>
            );
          })}
        </div>

        <Link className={styles.button} href={`/festivals/${festival.slug}`}>
          <span>View Details</span>

          <FaArrowRightLong />
        </Link>
      </div>
    </aside>
  );
};

export default FestivalDetails;
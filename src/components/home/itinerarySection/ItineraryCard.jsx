import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mountain } from "lucide-react";
import styles from "./itineraryCard.module.css";

const ItineraryCard = ({ item }) => {
  return (
    <article data-card className={styles.card}>
      <div data-image-mask className={styles.imageMask}>
        <div className={styles.imageWrapper}>
          <Image data-card-image src={item.image} alt={item.title} fill sizes="(max-width: 480px) 89vw, (max-width: 767px) 78vw, (max-width: 991px) 38vw, (max-width: 1199px) 28vw, 20vw" className={styles.image} />

          <div className={styles.location} style={{ "--tag-color": item.color }}>
            <MapPin size={15} fill="currentColor" />
            <span>{item.city}</span>
          </div>

          <span className={styles.shine}></span>
        </div>
      </div>

      <div data-card-content className={styles.content}>
        <div className={styles.days}>
          <Mountain size={18} strokeWidth={1.8} />
          <span>{item.days}</span>
        </div>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <Link href={`/itineraries/${item.slug}`} className={styles.details}>
          <span>View Details</span>
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
};

export default ItineraryCard;
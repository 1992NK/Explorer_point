import styles from "./itinerarySection.module.css";

const ItineraryIntro = ({ introRef }) => {
  return (
    <div ref={introRef} className={styles.intro}>
      <div data-intro className={styles.eyebrow}>
        <span>Curated Journeys</span>
        <span className={styles.eyebrowLine}></span>
      </div>

      <h2 data-intro className={styles.heading}>
        <span>Explore Our</span>

        <span className={styles.scriptWrapper}>
          <span className={styles.scriptText}>Itineraries</span>

          <span className={styles.flight}>
            <span className={styles.flightLine}></span>
            <span className={styles.plane}>✈</span>
          </span>
        </span>
      </h2>

      <p data-intro className={styles.description}>
        Handpicked travel plans for every kind of explorer.
        <br />
        From serene hills to vibrant cities, find your perfect journey.
      </p>
    </div>
  );
};

export default ItineraryIntro;
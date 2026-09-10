import styles from "./sliderContent.module.css";

const SliderContent = () => {
  return (
    <div className={styles.content}>
      <p className={styles.welcome}>
        Welcome to incredible India
      </p>

      <h1 className={styles.heading}>
        Explore Beyond{" "}
        <span>The Ordinary</span>
      </h1>

      <div className={styles.tagline}>
        <span className={styles.line}></span>

        <p>
          Nature
          <span>•</span>
          Culture
          <span>•</span>
          Adventure
          <span>•</span>
          You
        </p>

        <span className={styles.line}></span>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryButton}
        >
          <span>Plan Your Journey</span>
          <span className={styles.buttonArrow}>
            →
          </span>
        </button>

        <button
          type="button"
          className={styles.videoButton}
        >
          <span className={styles.play}>
            ▶
          </span>

          <span>Watch Video</span>
        </button>
      </div>
    </div>
  );
};

export default SliderContent;
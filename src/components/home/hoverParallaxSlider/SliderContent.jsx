import styles from "./sliderContent.module.css";

const SliderContent = ({ slides, activeIndex, setActiveIndex }) => {
  return (
    <div className={styles.content}>
      <p className={styles.welcome}>Welcome to incredible India</p>

      <h1 className={styles.heading}>
        Explore Beyond <span>The Ordinary</span>
      </h1>

      <div className={styles.exploreNav}>
        <span className={styles.line}></span>

        <div className={styles.exploreItems}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.exploreItem} ${activeIndex === index ? styles.active : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
            >
              {slide.title}
            </button>
          ))}
        </div>

        <span className={styles.line}></span>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.primaryButton}>
          <span>Plan Your Journey</span>
          <span className={styles.buttonArrow}>→</span>
        </button>

        <button type="button" className={styles.videoButton}>
          <span className={styles.play}>▶</span>
          <span>Watch Video</span>
        </button>
      </div>
    </div>
  );
};

export default SliderContent;
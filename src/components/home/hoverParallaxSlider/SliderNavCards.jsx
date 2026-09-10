import styles from "./sliderNavCards.module.css";

const SliderNavCards = ({
  slides,
  activeIndex,
  setActiveIndex
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`${styles.item} ${
              activeIndex === index
                ? styles.active
                : ""
            }`}
            onMouseEnter={() =>
              setActiveIndex(index)
            }
            onFocus={() =>
              setActiveIndex(index)
            }
            onClick={() =>
              setActiveIndex(index)
            }
          >
            <div className={styles.imageWrap}>
              <img
                src={slide.image}
                alt=""
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <span className={styles.icon}>
                {slide.icon}
              </span>

              <span className={styles.label}>
                {slide.label}
              </span>

              <strong className={styles.title}>
                {slide.title}
              </strong>
            </div>

            <span className={styles.arrow}>
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SliderNavCards;
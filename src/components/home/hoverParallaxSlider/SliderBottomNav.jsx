import Link from "next/link";
import styles from "./sliderBottomNav.module.css";

const SliderBottomNav = ({ slides, activeIndex, setActiveIndex }) => {
  const activeSlide = slides[activeIndex];

  return (
    <div className={styles.bottomWrapper}>
      <div className={`container ${styles.bottomContainer}`}>
        <div className={styles.navArea}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.navItem} ${activeIndex === index ? styles.active : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
            >
              <span className={styles.number}>0{index + 1}</span>
              <span className={styles.navTitle}>{slide.title}</span>
            </button>
          ))}
        </div>

        <Link href={activeSlide.href} className={styles.viewMore}>
          <span>View More</span>
          <span className={styles.viewArrow}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default SliderBottomNav;
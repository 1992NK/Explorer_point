"use client";

import { useRef, useState } from "react";
import { sliderData } from "@/data/sliderData";
import SliderBackground from "./SliderBackground";
import SliderContent from "./SliderContent";
import styles from "./hoverParallaxSlider.module.css";

const HoverParallaxSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.slider}>
      <SliderBackground slides={sliderData} activeIndex={activeIndex} sectionRef={sectionRef} />
      <div className={styles.overlay}></div>

      <div className={`container ${styles.sliderContainer}`}>
        <SliderContent slides={sliderData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </section>
  );
};

export default HoverParallaxSlider;
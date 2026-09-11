import { socialData } from "@/data/sliderData";
import styles from "./sliderSocialRail.module.css";

const SliderSocialRail = () => {
  return (
    <aside className={styles.socialRail}>
      <div className={styles.gridIcon}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span className={styles.verticalLine}></span>

      <div className={styles.socialLinks}>
        {socialData.map((item) => (
          <a key={item.id} href={item.url} className={styles.socialLink} aria-label={item.name}>
            <img src={item.icon} alt="" />
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SliderSocialRail;
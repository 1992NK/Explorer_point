import Link from "next/link";
import styles from "./header.module.css";

const Logo = ({ onClick }) => {
  return (
    <Link href="/" className={styles.logo} onClick={onClick}>
      <span className={styles.logoIcon}>
        <span className={styles.logoMountainLeft}></span>
        <span className={styles.logoMountainRight}></span>
      </span>

      <span className={styles.logoText}>Explorer Point</span>
    </Link>
  );
};

export default Logo;
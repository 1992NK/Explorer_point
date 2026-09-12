import Image from "next/image";
import Link from "next/link";
import styles from "./footerCta.module.css";

const FooterCta = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.content}>
          <span className={styles.smallTitle}>YOUR NEXT STORY STARTS HERE</span>

          <h2 className={styles.heading}>
            THE VALUE FOR
            <span> EXPERIENCE</span>
          </h2>

          <p className={styles.description}>
            Relax... You&apos;re with us! We make travelling simple.
          </p>

          <Link href="/plan-your-trip" className={styles.button}>
            <span>START PLANNING</span>
            <span className={styles.buttonArrow}>↗</span>
          </Link>
        </div>
      </div>

      <div className={styles.illustration}>
        <Image
          src="/images/footer/footer-travel-strip.png"
          alt="Travel illustration"
          width={1920}
          height={800}
          sizes="100vw"
          className={styles.illustrationImage}
        />
      </div>
    </div>
  );
};

export default FooterCta;
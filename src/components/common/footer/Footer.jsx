import FooterCta from "./FooterCta";
import FooterMain from "./FooterMain";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterCta />
      <FooterMain />
    </footer>
  );
};

export default Footer;
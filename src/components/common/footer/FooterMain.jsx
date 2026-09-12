import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import {
  aboutLinks,
  blogLinks,
  socialLinks,
} from "@/data/footerData";
import styles from "./footerMain.module.css";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
};

const FooterLinks = ({ title, links }) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.columnTitle}>{title}</h3>

      <ul className={styles.linkList}>
        {links.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className={styles.footerLink}>
              <span>{item.label}</span>
              <FiArrowUpRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterMain = () => {
  return (
    <div className={styles.footerMain}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          <div className={`${styles.column} ${styles.contactColumn}`}>
            <h3 className={styles.columnTitle}>Get In Touch</h3>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FiMapPin />
                </div>

                <div>
                  <span className={styles.contactLabel}>Address</span>
                  <p>
                    Gurugram,
                    <br />
                    Haryana, India
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FiPhone />
                </div>

                <div>
                  <span className={styles.contactLabel}>Support Phone</span>
                  <Link href="tel:+919876543210">
                    +91 98765 43210
                  </Link>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FiMail />
                </div>

                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <Link href="mailto:hello@explorerpoint.com">
                    hello@explorerpoint.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <FooterLinks title="About Us" links={aboutLinks} />

          <FooterLinks title="Explore" links={blogLinks} />

          <div className={`${styles.column} ${styles.socialColumn}`}>
            <h3 className={styles.columnTitle}>Get Social</h3>

            <p className={styles.socialText}>
              Keep up-to-date with the latest destinations, travel stories,
              guides and unforgettable experiences from around India.
            </p>

            <div className={styles.socialLinks}>
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.icon];

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className={styles.socialLink}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Explorer Point. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className={styles.decorativeCircleOne} />
      <div className={styles.decorativeCircleTwo} />
    </div>
  );
};

export default FooterMain;
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navData";
import styles from "./mobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`} aria-hidden={!isOpen}>
      <button className={styles.overlay} type="button" aria-label="Close menu" onClick={onClose}></button>

      <div className={styles.menuPanel}>
        <div className={styles.menuHeader}>
          <span className={styles.menuLogo}>Explorer Point</span>

          <button className={styles.closeButton} type="button" aria-label="Close menu" onClick={onClose}>
            <svg viewBox="0 0 24 24">
              <path d="M6 6L18 18"></path>
              <path d="M18 6L6 18"></path>
            </svg>
          </button>
        </div>

        <nav className={styles.navigation}>
          {navLinks.map((item) => (
            <Link key={item.id} href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`} onClick={onClose}>
              <span>{item.title}</span>

              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7"></path>
                <path d="M8 7H17V16"></path>
              </svg>
            </Link>
          ))}
        </nav>

        <div className={styles.menuBottom}>
          <p>Explore unforgettable destinations, hidden places and incredible journeys across India.</p>

          <Link href="/destinations" className={styles.exploreButton} onClick={onClose}>
            <span>Explore India</span>

            <svg viewBox="0 0 24 24">
              <path d="M5 12H19"></path>
              <path d="M13 6L19 12L13 18"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
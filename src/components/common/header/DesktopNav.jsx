"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navData";
import styles from "./header.module.css";

const DesktopNav = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.desktopNav}>
      {navLinks.map((item) => (
        <Link key={item.id} href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
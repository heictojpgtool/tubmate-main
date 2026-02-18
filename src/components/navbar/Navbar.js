"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* LEFT LOGO */}
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <span>𝕏</span>
            <i className={styles.downloadIcon}>⬇</i>
          </div>

          <div className={styles.brandText}>
            <h1>
              Twitter Video <span>Downloader</span>
            </h1>
            <p>Download videos & GIFs from X/Twitter</p>
          </div>
        </Link>

        {/* RIGHT LINK */}
        <nav className={styles.nav}>
          <Link href="/how-to-use" className={styles.navLink}>
            How to Use
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import React from "react";
import styles from "./header.module.css"; // CSS module for styling
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span>📞 (225) 555-0118</span>
          <span>📧 michelle.rivera@example.com</span>
        </div>
        <div className={styles.promo}>
          Follow Us and get a chance to win 80% off
        </div>
        <div className={styles.socialLinks}>
          <Link href="#">📷</Link> {/* Instagram */}
          <Link href="#">📹</Link> {/* YouTube */}
          <Link href="#">📘</Link> {/* Facebook */}
          <Link href="#">🐦</Link> {/* Twitter */}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.brand}>Bandage</div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
        </ul>
        <div className={styles.actions}>
          <Link href="/login" className={styles.actionLink}>
            Login / Register
          </Link>
          <Link href="/search" className={styles.icon}>
            🔍
          </Link>
          <Link href="/cart" className={styles.icon}>
            🛒<span className={styles.badge}>1</span>
          </Link>
          <Link href="/wishlist" className={styles.icon}>
            ❤️<span className={styles.badge}>1</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

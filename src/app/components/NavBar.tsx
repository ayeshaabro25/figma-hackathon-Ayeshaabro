"use client"; // Add this line at the top to make it a Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; // External CSS module for styling

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Dropdown toggle button */}
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        ☰ {/* Hamburger menu icon */}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;

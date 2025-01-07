"use client";

import React from "react";
import styles from "./contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <h3>Phone</h3>
          <p>(225) 555-0118</p>
        </div>
        <div className={styles.infoItem}>
          <h3>Email</h3>
          <p>michelle.rivera@example.com</p>
        </div>
        <div className={styles.infoItem}>
          <h3>Address</h3>
          <p>123 Example Street, Springfield, USA</p>
        </div>
      </div>
      <div className={styles.followUs}>
        <h3>Follow Us</h3>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialIcon}>
            Instagram
          </a>
          <a href="#" className={styles.socialIcon}>
            YouTube
          </a>
          <a href="#" className={styles.socialIcon}>
            Facebook
          </a>
          <a href="#" className={styles.socialIcon}>
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;


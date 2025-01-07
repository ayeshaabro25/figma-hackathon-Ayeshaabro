"use client";

import React from "react";
import styles from "./about.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.aboutContent}>
        <p>
          We are a leading company in the field of medical supplies, dedicated to providing high-quality products and services to our customers. Our mission is to improve the quality of life for individuals worldwide.
        </p>
        <p>
          Established in 2005, we have a long history of innovation, with a commitment to the highest standards of quality and customer service. We believe in making healthcare more accessible and affordable for everyone.
        </p>
        <p>
          Our team of experts is always striving to stay ahead of the latest developments in medical technology to bring you the most cutting-edge products and solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

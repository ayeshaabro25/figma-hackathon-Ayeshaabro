import React from "react";
import styles from "./breadcrumb.module.css";
import Link from "next/link";

const Breadcrumb: React.FC = () => {
  return (
    <div className={styles.breadcrumbContainer}>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.breadcrumb}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <span className={styles.separator}>›</span>
        <span className={styles.current}>Shop</span>
      </div>
    </div>
  );
};

export default Breadcrumb;


import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <Link href="https://yosefus-portfolio.netlify.app/">
      <a target="_blank">
        <footer className={styles.footer}>Writing and design: yosefus flavius</footer>
      </a>
    </Link>
  );
}

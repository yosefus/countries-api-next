import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeBtn.module.scss';
import { GoHome } from 'react-icons/go';
import Link from 'next/link';

export default function HomeBtn() {
  return (
    <Link href="/">
      <a>
        <motion.div className={styles.btnDiv}>
          <GoHome />
        </motion.div>
      </a>
    </Link>
  );
}

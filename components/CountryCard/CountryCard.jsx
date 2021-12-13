import React from 'react';
import styles from './CountryCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CountryCard({ country }) {
  const { name, flag, alpha3Code } = country;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
  };

  return (
    <motion.li variants={item} className={styles.list}>
      <Link href={`/country/${alpha3Code}`}>
        <a>
          <div className={styles.countryCard}>
            <p className={styles.name}>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</p>
            <span>
              {
                <Image
                  alt="flag"
                  priority={true}
                  loader={myLoader}
                  src={flag}
                  layout="fill"
                  objectFit="cover"
                />
              }
            </span>
          </div>
        </a>
      </Link>
    </motion.li>
  );
}

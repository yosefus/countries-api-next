import React, { useState } from 'react';
import styles from './Country.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { AiOutlinePlus } from 'react-icons/ai';
import { HomeBtn, ServerError } from '../../components';

export default function Country({ data, name }) {
  const [transe, setTranse] = useState(false);

  if (!data) return <ServerError />;

  const {
    name: _name,
    flags,
    capital,
    languages,
    timezones,
    continents,
    altSpellings,
    population,
    currencies,
    startOfWeek,
    subregion,
    translations,
  } = data;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const PrintFromArr = (array) => (array ? `${array.map((item) => `${item} `)}` : '');

  const PrintFromObj = (obj) =>
    obj
      ? Object.keys(obj).map((key, i) => (
          <span key={i}>
            <span className={styles.subTitle}> {key}: </span> {obj[key]}
          </span>
        ))
      : '';

  const PrintCurrencies = (currencies) =>
    currencies
      ? Object.keys(currencies).map((key, i) => (
          <span key={i}>
            <span> {currencies[key]['name']}</span> <span>{`(${currencies[key]['symbol']})`}</span>
          </span>
        ))
      : '';

  const PrintTranslations = (translations) =>
    translations ? (
      <span className={styles.transBox}>
        <button onClick={() => setTranse(!transe)}>
          names <AiOutlinePlus className={transe ? styles.plus : styles.exit} />
        </button>
        {transe && (
          <motion.ul
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { type: 'spring', duration: 0.4 } }}
          >
            {Object.keys(translations).map((key, i) => (
              <li key={i}>
                <span className={styles.subTitle}>{key}: </span> <span>{translations[key]['official']}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </span>
    ) : (
      ''
    );

  return (
    <motion.div
      initial={{ x: -400 }}
      animate={{ x: 0, transition: { type: 'spring', duration: 1 } }}
      className={styles.container}
    >
      {<Image alt="flag" priority={true} loader={myLoader} src={flags.svg} layout="fill" objectFit="cover" />}
      <HomeBtn />
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0, transition: { type: 'spring', duration: 1, delay: 1 } }}
        className={styles.contentBox}
      >
        <h2>{_name.common}</h2>
        {PrintTranslations(translations)}
        <p>
          <span className={styles.title}> capital: </span> {PrintFromArr(capital)}
        </p>
        <p>
          <span className={styles.title}> population: </span> {population || ''}
        </p>
        <p>
          <span className={styles.title}> alternative Spellings: </span> {PrintFromArr(altSpellings)}
        </p>
        <p>
          <span className={styles.title}> continents: </span> {PrintFromArr(continents)}
        </p>
        <p>
          <span className={styles.title}> subregion: </span> {subregion || ''}
        </p>
        <p>
          <span className={styles.title}> timezones: </span> {PrintFromArr(timezones)}
        </p>
        <p>
          <span className={styles.title}> languages: </span> {PrintFromObj(languages)}
        </p>
        <p>
          <span className={styles.title}> currencies: </span> {PrintCurrencies(currencies)}
        </p>
        <p>
          <span className={styles.title}> startOfWeek: </span> {startOfWeek || ''}
        </p>
      </motion.div>
    </motion.div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { params } = context;
    const { name } = params;

    const res = await fetch(`https://restcountries.com/v3.1/alpha/${name.toLowerCase()}`);
    const data = await res.json();

    return { props: { data: data[0], name } };
  } catch (error) {
    console.log(error.message || error);
    return { props: { data: false, name: false } };
  }
};

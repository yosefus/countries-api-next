import React from 'react';
import styles from './SearchBar.module.scss';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchInputHandle }) {
  return (
    <div className={styles.searchBar}>
      <input type="text" onChange={searchInputHandle} />
      <span>
        <FaSearch />
      </span>
    </div>
  );
}

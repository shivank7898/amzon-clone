import React from 'react';
import styles from './sidebar.module.css'; // Import the CSS module

function SidebarFilterBar(props) {
  const handleApplyFilters = () => {
    // Implement your filtering logic here.
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Refine by</h2>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Category</h3>
        <ul className={styles.filterOptions} style={{borderTop:"0px"}}>
          <li className={styles.filterOption}>
            <label htmlFor="category1" className={styles.filterLabel}>
            <input type="checkbox" id="category1" />
              Category 1
            </label>
          </li>
          <li className={styles.filterOption}>
            <label htmlFor="category2" className={styles.filterLabel}>
            <input type="checkbox" id="category2" />
              Category 2
            </label>
          </li>
          <li className={styles.filterOption}>
            <label htmlFor="category3" className={styles.filterLabel}>
            <input type="checkbox" id="category3" />
              Category 3
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Price Range</h3>
        <input type="range" id="priceRange" min="0" max="1000" step="50" className={styles.priceRange} />
        <span className={styles.priceValue}>$0 - $1000</span>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Brand</h3>
        <select id="brand" className={styles.select}>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </div>
      <button onClick={handleApplyFilters} className={styles.applyFiltersButton}>
        Apply Filters
      </button>
      <button className={styles.resetFiltersButton}>Reset Filters</button>
    </div>
  );
}

export default SidebarFilterBar;

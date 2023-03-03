import React from "react";

import styles from "./HeaderTop.module.scss";

const HeaderTop = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_strategy}>
        <h3 className={styles.name__nav}>Стратегия № </h3>
        <ul className={styles.list_container}>
          <li>
            <button className={styles.list__item}>1</button>
          </li>
          <li>
            <button className={styles.list__item}>2</button>
          </li>
          <li>
            <button className={styles.list__item}>3</button>
          </li>
          <li>
            <button className={styles.reload__item}>reload</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderTop;

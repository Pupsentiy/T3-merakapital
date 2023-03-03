import React from "react";

import styles from "./HeaderInner.module.scss";

const HeaderInner = () => {
    return (
        <div className={styles.headerInner}>
            <h3 className={styles.name__nav}>Валюта</h3>
            <nav className={styles.nav_money}>
                <ul className={styles.list_container}>
                    <li>
                        <button className={styles.list__item}>USD</button>
                    </li>
                    <li>
                        <button className={styles.list__item}>BTC</button>
                    </li>
                </ul>
            </nav>
            <p className={styles.comments}></p>
        </div>
    );
};

export default HeaderInner;

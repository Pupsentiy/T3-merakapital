import React from "react";

import styles from "./HeaderInner.module.scss";
import {useDispatch} from "react-redux";
import {setCurrencyValueAction} from "../../store/action-creators/data";

const HeaderInner = () => {
    const dispatch = useDispatch()

    const getButtonValue = (event) => {
        const value = event.target.innerHTML
        dispatch(setCurrencyValueAction(value.toLowerCase()))
    }

  return (
    <div className={styles.headerInner}>
      <h3 className={styles.name__nav}>Валюта</h3>
      <nav className={styles.nav_money}>
        <ul className={styles.list_container}>
          <li>
            <button className={styles.list__item} onClick={(event) => getButtonValue(event)}>USD</button>
          </li>
          <li>
            <button className={styles.list__item} onClick={(event) => getButtonValue(event)}>BTC</button>
          </li>
        </ul>
      </nav>
      <p className={styles.comments}></p>
    </div>
  );
};

export default HeaderInner;

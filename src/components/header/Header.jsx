import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchDataAction, setButtonNum} from "../../store/action-creators/data";

import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch()
  const {reqNumber} = useSelector(
      (state) => state.data
  );
  const [num,setNum] = useState(1)

  const setNumFetch = () => {
    dispatch(fetchDataAction(
        reqNumber
    ))
  }
  const getBtnNum = (event) => {
    const id = event.target.innerHTML
    dispatch(setButtonNum(Number(id)))
    setNum(Number(id))
  }

useEffect(() => {
  setNumFetch()
},[num])


  return (
    <header className={styles.header}>
      <nav className={styles.nav_strategy}>
        <h3 className={styles.name__nav}>Стратегия № </h3>
        <ul className={styles.list_container}>
          <li>
            <button className={num === 1  ? styles.list__item_active : styles.list__item} onClick={(event) => getBtnNum(event)}>1</button>
          </li>
          <li>
            <button className={num === 2  ? styles.list__item_active : styles.list__item} onClick={(event) => getBtnNum(event)}>2</button>
          </li>
          <li>
            <button className={num === 3  ? styles.list__item_active : styles.list__item} onClick={(event) => getBtnNum(event)}>3</button>
          </li>
          <li>
            <button className={styles.reload__item}>reload</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

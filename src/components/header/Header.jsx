import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchDataAction, setButtonNum} from "../../store/action-creators/data";

import styles from "./Header.module.scss";
import {useTheme} from "../../hooks/use-theme";

const Header = () => {
  const dispatch = useDispatch()
  const { theme, setTheme } = useTheme()
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



  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

  const onReloadReq = () => {
    dispatch(fetchDataAction(
        reqNumber
    ))
  }

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
            <button className={styles.reload__item} onClick={() => onReloadReq()}>reload</button>
          </li>
        </ul>
        <div className={styles.button__container}>
          <div >
            <div aria-label="Theme toggle">
              <button className={theme === 'dark' ? styles.button__light : styles.button__dark} onClick={() => handleLightThemeClick() }>
                Light
              </button>
              <button className={theme === 'light' ? styles.button__light: styles.button__dark}   onClick={() => handleDarkThemeClick() }>
                Dark
              </button>
            </div>
          </div>
        </div>
      </nav>



    </header>
  );
};

export default Header;

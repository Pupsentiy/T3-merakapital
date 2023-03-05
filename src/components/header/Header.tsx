import React, {FC, useEffect, useState} from "react";

import {useAppDispatch, useTypedSelector} from "../../hooks/useTypedSelector";
import {useTheme} from "../../hooks/use-theme";

import {fetchDataAction, setButtonNumAction, setColorThemeAction} from "../../store/action-creators/data";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const {theme, setTheme} = useTheme()
  const {reqNumber} = useTypedSelector(
      (state) => state.data
  );
  const [num, setNum] = useState(1)

  const setNumFetch = () => {
    dispatch(fetchDataAction(
        reqNumber
    ))
  }
  const getBtnNum = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = (event.target as Element).innerHTML
    dispatch(setButtonNumAction(Number(id)))
    setNum(Number(id))
  }

useEffect(() => {
  setNumFetch()
},[num])



  const handleThemeClick = (theme:string) => {
    setTheme(theme)
    dispatch(setColorThemeAction(theme))
  }

  const onReloadReq = () => {
    dispatch(fetchDataAction(
        num
    ))
  }

  const dataButton = ['1','2','3']

  return (
    <header className={styles.header}>
      <nav className={styles.nav_strategy}>
        <h3 className={styles.name__nav}>Стратегия № </h3>
        <ul className={styles.list_container}>

          {dataButton && dataButton.map((el,index) =>
              (<li key={index}>
                <button className={num === (index + 1)  ? styles.list__item_active : styles.list__item} onClick={(event) => getBtnNum(event)}>{el}</button>
              </li>)
          )}

          <li>
            <button className={styles.reload__item} onClick={() => onReloadReq()}>Reload</button>
          </li>
        </ul>
        <div className={styles.button__container}>
          <div >
            <div aria-label="Theme toggle">
              <button className={theme === 'dark' ? styles.button__light : styles.button__dark} onClick={() => handleThemeClick('light') }>
                Light
              </button>
              <button className={theme === 'light' ? styles.button__light: styles.button__dark}   onClick={() => handleThemeClick('dark') }>
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

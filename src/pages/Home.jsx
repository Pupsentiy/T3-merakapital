import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataAction } from "../store/action-creators/data";

import Chart from "../components/chart/Cahrt";

import styles from './Home.scss'

const Home = ({ theme, setTheme }) => {
  const dispatch = useDispatch();
  const { loading, error, reqNumber } = useSelector(
    (state) => state.data
  );
  useEffect(() => {
    dispatch(fetchDataAction(reqNumber));
  }, [dispatch]);

  
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {loading ? (
        <h1 className={styles.loading}>Идет загрузка...</h1>
      ) : (
          <>
            <Chart  />
          </>
      )}
    </>
  );
};

export default Home;

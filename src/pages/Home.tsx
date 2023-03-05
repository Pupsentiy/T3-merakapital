import  { useEffect } from "react";

import { fetchDataAction } from "../store/action-creators/data";

import Chart from "../components/chart/Cahrt";
import {useAppDispatch, useTypedSelector} from "../hooks/useTypedSelector";

import styles from './Home.module.scss'

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading, error, reqNumber } = useTypedSelector(
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
            <Chart  />
      )}
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataAction } from "../store/action-creators/data";

import Chart from "../components/chart/Cahrt";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, btc, usd, title, error } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  
  if (error) {
    return <h1>{error}</h1>;
  }

  // const data = usd.slice(0,10)
  // console.log(selectedCurrency);
  return (
    <>
      {loading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <Chart  />
      )}
    </>
  );
};

export default Home;

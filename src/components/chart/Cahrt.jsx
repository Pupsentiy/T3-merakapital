import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {  useSelector } from "react-redux";
import styles from "./Chart.module.scss";

const Chart = () => {
  const state = useSelector(
    (state) => state.data
  );
  const [activeButton, setActiveButton] = useState(0)
  const [config, setConfig] = useState({
    series: [
      {
        name: "usd".toUpperCase(),
        data: state.usd.map(el => el.value) || [],
      },
    ],

    options: {
      chart: {
        id: "chart1",
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      labels:  state.usd.map(el => el.time) || [],

      colors: ["#0090FF"],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0) + "$";
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Date",
        },
        labels: {
          formatter: function (value, timestamp) {
            return new Date(value).toDateString().slice(4, 11);
          },
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });


   const setUpdateDate = (str) => {
       setConfig({
         ...config,
         options: {
           chart: {
             id: 'chart1'
           }
         },
         series: [{
           name: str.toUpperCase(),
           data: state[str].map(el => el.value) || []
         }]
       })

   }

   const toggleButton = (num) => {
     setActiveButton(num)
   }

  return (
    <div className={styles.wrapper_chart}>
      <div className={styles.headerChart}>
        <h3 className={styles.name__nav}>Валюта</h3>
        <nav className={styles.nav_money}>
          <ul className={styles.list_container}>
            <li>
              <button className={activeButton === 0  ? styles.list__item_active : styles.list__item} onClick={(event) => (setUpdateDate('usd'),toggleButton(0))}>USD</button>
            </li>
            <li>
              <button className={activeButton === 1 ? styles.list__item_active : styles.list__item  } onClick={(event) => (setUpdateDate('btc'),toggleButton(1))}>BTC</button>
            </li>
          </ul>
        </nav>
        <p className={styles.comments}> {state.title}</p>
      </div>
      <div id="chart">
        <ReactApexChart
          options={config.options}
          series={config.series}
          type="area"
          height={350}
        />
      </div>

    </div>
  );
};

export default Chart;

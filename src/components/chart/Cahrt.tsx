import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { ICurrency } from "../../store/types/types";

import styles from "./Chart.module.scss";

const Chart: FC = () => {
  const state = useTypedSelector((state) => state.data);
  const [activeButton, setActiveButton] = useState<number>(0);
  const [config, setConfig] = useState<string>("usd");

  const chartData: ApexOptions = {
    chart: {
      id: "chart1",
      stacked: false,
      height: 350,
      foreColor: state.colorTheme === "light" ? "#000" : "#fff",
      background: state.colorTheme === "light" ? "#fffffff0" : "#ffffff2e",
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    colors: ["rgba(205,114,114,0.94)"],
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
        formatter: function (val: number) {
          return val.toFixed(0) + "$";
        },
      },
      title: {
        text: "Price",
      },
    },
    xaxis: {
      type: "datetime",
      categories: state.usd.map((el) => el.time),
      title: {
        text: "Date",
      },
      labels: {
        formatter: function (
          value: string | number | Date,
          timestamp: undefined
        ) {
          return new Date(value).toDateString().slice(4, 11);
        },
      },
    },
    tooltip: {
      fillSeriesColor: true,
      shared: false,
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    series: [
      {
        name: "usd".toUpperCase(),
        data: state[config as keyof ICurrency].map((el) => el.value),
      },
    ],
  };

  const setUpdateDate = (str: string) => {
    setConfig(str);
  };

  const onChangeCurrency = (num: number) => {
    setActiveButton(num);
  };

  return (
    <div className={styles.wrapper_chart}>
      <div className={styles.headerChart}>
        <h3 className={styles.name__nav}>Валюта</h3>
        <nav className={styles.nav_money}>
          <ul className={styles.list_container}>
            <li>
              <button
                className={
                  activeButton === 0
                    ? styles.list__item_active
                    : styles.list__item
                }
                onClick={(event) => (setUpdateDate("usd"), onChangeCurrency(0))}
              >
                USD
              </button>
            </li>
            <li>
              <button
                className={
                  activeButton === 1
                    ? styles.list__item_active
                    : styles.list__item
                }
                onClick={(event) => (setUpdateDate("btc"), onChangeCurrency(1))}
              >
                BTC
              </button>
            </li>
          </ul>
        </nav>
        <p className={styles.comments}> {state.title}</p>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;

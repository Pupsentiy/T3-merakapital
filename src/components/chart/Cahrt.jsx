import React from "react";
import ReactApexChart from "react-apexcharts";
import {useDispatch, useSelector} from "react-redux";

import styles from './Chart.module.scss'

const Chart = () => {
    const dispatch = useDispatch();
    const {  btc, usd, selectedCurrency } = useSelector(
        (state) => state.data
    );


    // const data = usd.slice(0,10)
    const value = selectedCurrency.map(el => el.value)
    const time = selectedCurrency.map(el => el.time)

    const state = {
        series: [{
            name:'btc',
            data:value,
        }],
        options: {
            chart: {
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
            labels:time,

            colors: [ '#0090FF'],
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
                        return (val).toFixed(0) + '$';
                    },
                },
                title: {
                    text: "Price",
                },
            },
            xaxis: {
                type:'datetime',
                title:{
                    text:"Date",
                },
                datetime: time,
                labels:{
                    formatter: function (value, timestamp) {
                        return new Date(value).toDateString().slice(4,11) // The formatter function overrides format property
                    },
                }
            },

            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val);
                    },
                },
            },
        },
    };


    return (
        <div className={styles.wrapper_chart}>
            <div id="chart">
                {usd && (
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="area"
                        height={350}
                    />
                )}
            </div>
        </div>

    );
};

export default Chart;

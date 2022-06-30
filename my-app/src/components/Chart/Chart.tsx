import React, {useEffect, useState} from 'react';
import styles from './Chart.module.css'
import Row from "./Row/Row";


export type ChartType = {
    name: string;
    time: number
}

const inputDataChart: ChartType[] = [
    {name: "Landing Page", time: 7.4},
    {name: "Configurator", time: 0.2},
    {name: "Check-out", time: 7.0},
    {name: "Deal", time: 3.8},
]

const Chart = () => {
    const [dataChart, setDataChart] = useState<ChartType[]>(inputDataChart);


    const randomChart = () => {
        const newInputDataChart = dataChart.map((chart: ChartType) => {
            return {...chart, time: Number((Math.random() * (11)).toFixed(1))};
        })
        setDataChart(newInputDataChart);
    }


    useEffect(() => {
        const interval = setInterval(randomChart, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.chartBlock}>
            <h1>SPENT TIME(SECONDS)</h1>

            <div className={styles.chartContainer}>
                {dataChart.map((chart) => {
                    return (
                        <Row currName={chart.name} key={chart.name + 'row'} dataChart={dataChart}/>
                    );
                })}
            </div>

            <button className={styles.btn} onClick={randomChart}>Random Chart
            </button>
        </div>
    );
};

export default Chart;
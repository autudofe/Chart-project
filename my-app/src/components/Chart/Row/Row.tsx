import React from 'react';
import styles from './Row.module.css'
import classNames from "classnames";
import {ChartType} from "../Chart";
const blocksInfo = (data: ChartType[]) => data.reduce((acc, chart) => acc + chart.time, 0);

interface RowProps {
    dataChart: ChartType[];
    currName: string;
}

const Row = ({ dataChart, currName }: RowProps) => {
    const info = blocksInfo(dataChart);

    return (
        <div className={styles.row}>
            <div className={styles.name}>{currName}</div>
            <div className={styles.chartBar}>
                {dataChart.map((chart) => {
                    return (
                        <div
                            key={chart.name}
                            style={{ width: (chart.time * 100) / info + "%" }}
                            className={classNames(styles.chartBlock, {
                                [styles.active]: currName === chart.name,
                            })}
                        >
                            {currName === chart.name ? chart.time : ""}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Row;
import React from 'react'
import styles from './Victory.module.css'
import { VictoryBar, VictoryChart, VictoryLine, VictoryTooltip } from 'victory';
import { DataInputProps } from '../../App';
import Label from '../UI/Label';
import VictoryBarComponent from './VIctoryBarComponent';
import VictoryLineChart from './VictoryLineChart';
import VictoryPieChart from './VictoryPieChart';
import VictoryAreaChart from './VictoryAreaChart';

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

interface VictoryProps {
    data: DataInputProps[]
}

export interface VictoryChartProps {
    data: { x: any, y: any }[],
    title: string
    x?: string
    y?: string
}

const Victory = (props: VictoryProps) => {

    const houseMedianAgeChartsData = props.data?.map((record, index) => {
        return ({
            x: index,
            y: record['housing_median_age'] ?? 0
        });
    }) ?? [{ x: 0, y: 0 }];

    const totalBedroomsChartsData = props.data?.map((record, index) => {
        return ({
            x: record['total_bedrooms'] ?? 0,
            y: 0,
        });
    }) ?? [{ name: "", uv: 0 }];

    const medianIncomeChartsData = props.data?.map((record, index) => {
        return ({
            x: index,
            y: record['median_income'] ?? 0
        });
    }) ?? [{ name: "", uv: 0 }];

    const medianHouseValueChartsData = props.data?.map((record, index) => {
        return ({
            x: record['total_rooms'] ?? 0,
            y: record['median_house_value'] ?? 0
        });
    }) ?? [{ x: 0, y: 0 }];

    console.log(medianHouseValueChartsData.slice(100, 130));
    return (
        // <div style={{ width: "50%" }}>
        //     <VictoryChart domainPadding={10}>
        //         <VictoryBar
        //             style={{
        //                 data: { fill: "#009de6"},

        //             }}
        //             barRatio={0.5}
        //             labels={({ datum }) => `y: ${datum.value}\n x: ${datum.rooms}`}
        //             labelComponent={<VictoryTooltip />}
        //             //data={houseMedianAgeChartsData.slice(0, 100)}
        //             data={medianHouseValueChartsData.slice(100, 110)}
        //             // data accessor for x values
        //             y="value"
        //             x="rooms"

        //         // data accessor for y values
        //         //y="name"
        //         />
        //     </VictoryChart>
        //     <VictoryChart domainPadding={30}>
        //         <VictoryLine
        //             style={{
        //                 data: { stroke: "#009de6" },

        //             }}
        //             interpolation="natural"
        //             //data={houseMedianAgeChartsData.slice(0, 100)}
        //             data={houseMedianAgeChartsData.slice(0, 100)}
        //             // data accessor for x values
        //             y="uv"
        //         // data accessor for y values
        //         //y="name"
        //         />
        //     </VictoryChart>
        // </div>

        <div className={styles.main_container}>

            <Label text={'Victory'} className={styles.titleLabel} />

            <div className={styles.hr} />
            <Label text={'Line charts'} className={styles.subtitleLabel} />

            <div className={styles.chartsContainer}>


                <VictoryLineChart data={houseMedianAgeChartsData.slice(30, 70)} title={"Housing Median Age"} y={"Housing Median Age"} x={"Index"} />
                <VictoryLineChart data={medianHouseValueChartsData.slice(130, 170)} title={"House Median Value Based on Rooms"} y={"House Median Value"} x={"Rooms"} />
                <VictoryLineChart data={medianIncomeChartsData.slice(530, 570)} title={"House Median Income"} y={"House Median Income"} x={"Index"} />

            </div>

            <Label text={'Bar charts'} className={styles.subtitleLabel} />

            <div className={styles.chartsContainer}>

                <VictoryBarComponent data={houseMedianAgeChartsData.slice(30, 70)} title={"Housing Median Age"} y={"Housing Median Age"} x={"Index"} />
                <VictoryBarComponent data={medianHouseValueChartsData.slice(130, 170)} title={"House Median Value Based on Rooms"} y={"House Median Value"} x={"Rooms"} />
                <VictoryBarComponent data={medianIncomeChartsData.slice(530, 570)} title={"House Median Income"} y={"House Median Income"} x={"Index"} />


            </div>

            <Label text={'Pie charts'} className={styles.subtitleLabel} />

            <div className={styles.chartsContainer}>

                <VictoryPieChart data={houseMedianAgeChartsData.slice(32, 35)} title={"Housing Median Age"} y={"Housing Median Age"} x={"Index"} />
                <VictoryPieChart data={medianHouseValueChartsData.slice(130, 140)} title={"House Median Value Based on Rooms"} y={"House Median Value"} x={"Rooms"} />
                <VictoryPieChart data={medianIncomeChartsData.slice(530, 535)} title={"House Median Income"} y={"House Median Income"} x={"Index"} />

            </div>

            <Label text={'Area charts'} className={styles.subtitleLabel} />

            <div className={styles.chartsContainer}>

                <VictoryAreaChart data={houseMedianAgeChartsData.slice(32, 35)} title={"Housing Median Age"} y={"Housing Median Age"} x={"Index"} />
                <VictoryAreaChart data={medianHouseValueChartsData.slice(130, 134)} title={"House Median Value Based on Rooms"} y={"House Median Value"} x={"Rooms"} />
                <VictoryAreaChart data={medianIncomeChartsData.slice(530, 635)} title={"House Median Income"} y={"House Median Income"} x={"Index"} />

            </div>

        </div>

    )
}

export default Victory

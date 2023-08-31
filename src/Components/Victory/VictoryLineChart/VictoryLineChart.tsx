import React from 'react'
import styles from './VictoryLineChart.module.css'
import { ChartProps } from '../../../App'
import Label from '../../UI/Label'
import { VictoryChart, VictoryCursorContainer, VictoryLine, VictorySelectionContainer, VictoryTheme, VictoryTooltip, VictoryZoomContainer } from 'victory';
import { VictoryChartProps } from '../Victory';


const VictoryLineChart = (props: VictoryChartProps) => {
    return (
        <div className={styles.chartBox}>
            <div className={styles.chartBoxSubcontainer}>
                <Label text={props.title} className={styles.chartTitleLabel} />
                <VictoryChart
                    containerComponent={<VictorySelectionContainer />}
                >

                    <VictoryLine

                        style={{
                            data: { stroke: "tomato" },

                        }}

                        labels={({ datum }) => `${props.y ? props.y : "y"}: ${datum.y}\n ${props.x ? props.x : "x"}: ${datum.x}`}
                        labelComponent={<VictoryTooltip />}
                        //data={houseMedianAgeChartsData.slice(0, 100)}
                        data={props.data}
                        // data accessor for x values
                        y="y"
                        x="x"

                    // data accessor for y values
                    //y="name"
                    />
                </VictoryChart>
            </div>
        </div>
    )
}

export default VictoryLineChart

import React from 'react'
import styles from './VictoryPieChart.module.css'
import { ChartProps } from '../../../App'
import Label from '../../UI/Label'
import { VictoryChart, VictoryLine, VictoryPie, VictoryTheme, VictoryTooltip, VictoryZoomContainer } from 'victory';
import { VictoryChartProps } from '../Victory';


const VictoryPieChart = (props: VictoryChartProps) => {
  return (
    <div className={styles.chartBox}>
    <div className={styles.chartBoxSubcontainer}>
        <Label text={props.title} className={styles.chartTitleLabel} />
        
                <VictoryPie
                    colorScale={["gold","orange","tomato",  "red"]}
                    

                    data={props.data}
                    // data accessor for x values
                    // labels={({datum})  => datum.y}
                    labels={({ datum }) => `${props.y ? props.y : "y"}: ${datum.y}\n ${props.x ? props.x : "x"}: ${datum.x}`}
                    labelComponent={<VictoryTooltip />}
                // data accessor for y values
                //y="name"
                />

    </div>
</div>
  )
}

export default VictoryPieChart

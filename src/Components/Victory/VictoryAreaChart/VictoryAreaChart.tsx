import React from 'react'
import styles from './VictoryAreaChart.module.css'
import { ChartProps } from '../../../App'
import Label from '../../UI/Label'
import { VictoryArea, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryCursorContainer, VictoryLabel, VictoryTheme, VictoryTooltip, VictoryZoomContainer } from 'victory';
import { VictoryChartProps } from '../Victory';


const VictoryAreaChart = (props: VictoryChartProps) => {
    console.log(props.data)
  return (
    <div className={styles.chartBox}>
    <div className={styles.chartBoxSubcontainer}>
        <Label text={props.title} className={styles.chartTitleLabel} />
        <VictoryChart
    
        containerComponent={
            <VictoryCursorContainer
              cursorLabel={({ datum }) => `${props.y ? props.y : "y"}: ${Math.round(datum.y)}\n ${props.x ? props.x : "x"}: ${Math.round(datum.x)}`}
            />
          }
        
      >
        
                <VictoryArea
                    style={{
                        data: { fill: "tomato"},
                    
                    }}

                    data={props.data}
                    
                    
                // data accessor for y values
                //y="name"
                />
            </VictoryChart>
    </div>
</div>
  )
}

export default VictoryAreaChart


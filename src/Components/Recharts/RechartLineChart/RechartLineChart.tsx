import React from 'react'
import styles from './RechartLineChart.module.css'
import Label from '../../UI/Label'
import LineCharts from '../../UI/Recharts/LineCharts'
import { ChartProps, DataInputProps } from '../../../App'



const RechartLineChart = (props: ChartProps) => {
    return (
        <div className={styles.chartBox}>
            <div className={styles.chartBoxSubcontainer}>
                <Label text={props.title} className={styles.chartTitleLabel} />
                <LineCharts data={props.data} widthRC={"1000px"} heightRC={"1000px"} widthLineC={500} heightLineC={300} dataKey={'data'} top={20} right={20} left={-20} bottom={0} color={'#009de6'} />
            </div>
        </div>
    )
}

export default RechartLineChart

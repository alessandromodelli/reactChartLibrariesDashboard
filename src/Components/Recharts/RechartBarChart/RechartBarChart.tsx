import React from 'react'
import styles from './RechartBarChart.module.css'
import { ChartProps } from '../../../App'
import Label from '../../UI/Label'
import Barchart from '../../UI/Recharts/BarChart'

const RechartBarChart = (props: ChartProps) => {
  return (
    <div className={styles.chartBox}>
    <div className={styles.chartBoxSubcontainer}>
        <Label text={props.title} className={styles.chartTitleLabel} />
        <Barchart data={props.data} dataKey={'uv'} widthRC={"1000px"} heightRC={"1000px"}  top={20} right={20} left={20} bottom={0} color={'#009de6'} widthBarC={500} heightBarC={300} barSize={5} vertical={false} />
    </div>
</div>
  )
}

export default RechartBarChart

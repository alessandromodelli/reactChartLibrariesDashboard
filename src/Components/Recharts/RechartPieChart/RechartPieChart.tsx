import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartProps } from '../../../App';
import Label from '../../UI/Label';
import styles from './RechartPieChart.module.css'

const RechartPieChart = (props: ChartProps) => {
    console.log(props.data)
    return (
        <div className={styles.chartBox}>
        <div className={styles.chartBoxSubcontainer}>
            <Label text={props.title} className={styles.chartTitleLabel} />

          <PieChart width={400} height={400}>
            <Pie
              dataKey="uv"
              isAnimationActive={false}
              data={props.data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#009de6"
              label
            />
            <Pie dataKey="uv" data={props.data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#009de6" />
            <Tooltip />
          </PieChart>

        </div>
        </div>
      );
}

export default RechartPieChart




// const data01 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
// ];

// const data02 = [
//   { name: 'Group A', value: 2400 },
//   { name: 'Group B', value: 4567 },
//   { name: 'Group C', value: 1398 },
//   { name: 'Group D', value: 9800 },
//   { name: 'Group E', value: 3908 },
//   { name: 'Group F', value: 4800 },
// ];

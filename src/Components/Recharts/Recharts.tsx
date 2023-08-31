import React from 'react'
import styles from './Recharts.module.css'
import LineChart from './RechartLineChart'
import { DataInputProps } from '../../App'
import Label from '../UI/Label'
import Chart from './RechartLineChart/RechartLineChart'
import BarChart from './RechartBarChart'
import RechartPieChart from './RechartPieChart'


interface RechartProps {
  data: DataInputProps[]
}

const Recharts = (props: RechartProps) => {



  const houseMedianAgeChartsData = props.data?.map((record, index) => {
    return ({
      name: "",
      uv: record['housing_median_age'] ?? 0
    });
  }) ?? [{ name: "", uv: 0 }];
  const totalBedroomsChartsData = props.data?.map((record, index) => {
    return ({
      name: "",
      uv: record['total_bedrooms'] ?? 0
    });
  }) ?? [{ name: "", uv: 0 }];
  const medianIncomeChartsData = props.data?.map((record, index) => {
    return ({
      name: "",
      uv: record['median_income'] ?? 0
    });
  }) ?? [{ name: "", uv: 0 }];

  const medianHouseValueChartsData = props.data?.map((record, index) => {
    return ({
      name: "",
      uv: record['median_house_value'] ?? 0
    });
  }) ?? [{ name: "", uv: 0 }];

  return (
    <div className={styles.main_container}>

      <Label text={'Recharts'} className={styles.titleLabel} />

      <div className={styles.hr} />
      <Label text={'Line charts'} className={styles.subtitleLabel} />

      <div className={styles.chartsContainer}>

        <LineChart data={houseMedianAgeChartsData.slice(0, 100)} title={"House Median Age"} />

        <LineChart data={totalBedroomsChartsData.slice(0, 100)} title={"House Total Bedrooms"} />

        <LineChart data={medianIncomeChartsData.slice(0, 100)} title={"House Median Income"} />

        <LineChart data={medianHouseValueChartsData.slice(0, 100)} title={"House Median Value"} />

      </div>

      <Label text={'Bar charts'} className={styles.subtitleLabel} />

      <div className={styles.chartsContainer}>

        <BarChart data={houseMedianAgeChartsData.slice(30, 70)} title={"House Median Age"} />

        <BarChart data={totalBedroomsChartsData.slice(10, 20)} title={"House Total Bedrooms"} />

        <BarChart data={medianIncomeChartsData.slice(100, 124)} title={"House Median Income"} />

        <BarChart data={medianHouseValueChartsData.slice(1033, 1150)} title={"House Median Value"} />

      </div>

      <Label text={'Bar charts'} className={styles.subtitleLabel} />

      <div className={styles.chartsContainer}>

        <RechartPieChart data={houseMedianAgeChartsData.slice(30, 33)} title={"House Median Age"} />

        <RechartPieChart data={totalBedroomsChartsData.slice(152, 157)} title={"House Total Bedrooms"} />

        <RechartPieChart data={medianIncomeChartsData.slice(560, 574)} title={"House Median Income"} />

        <RechartPieChart data={medianHouseValueChartsData.slice(1033, 150)} title={"House Median Value"} />

      </div>

    </div>

  )
}

export default Recharts

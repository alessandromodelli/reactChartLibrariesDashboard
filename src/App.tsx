
import styles from  './App.module.css';
import React, { useEffect, useState } from "react";
import useReadCSV from './Components/Hooks/useReadCSV';
import Papa, { ParseResult } from "papaparse"
import FormInput from './Components/FormInput/FormInput';
import { BarChart, LineChart } from 'recharts';
import LineCharts from './Components/UI/Recharts/LineCharts';
import Recharts from './Components/Recharts';
import Label from './Components/UI/Label';
import Victory from './Components/Victory';

export interface DataInputProps {
    id: number,
    longitude: number,
    latitude: number,
    housing_median_age: number,
    total_rooms: number,
    total_bedrooms: number,
    population: number,
    households: number,
    median_income: number,
    median_house_value: number,
    ocean_proximity: string,
};

export interface ChartProps {
    data: { name: any, uv: any }[]
    title: string
  }

const App = () => {

    const [data, setData] = useState<string>();
    const [json, setJson] = useState<DataInputProps[]>();

    const [file, setFile] = useState();

    const fileReader = new FileReader();

    const csvToArray = () => {
        // Split data by newline character
        const lines = data?.trim().split(/\n/g);
        // Split data by ','
        const wordsPerLine = lines?.map(line => line.trim().split(','));
        //First line are the headings
        const headings = wordsPerLine?.shift();

        //Create JSON obj
        const jsonData = wordsPerLine?.map((line, index) => {
            return ({
                id: index,
                longitude: parseFloat(line[0]),
                latitude: parseFloat(line[1]),
                housing_median_age: parseFloat(line[2]),
                total_rooms: parseFloat(line[3]),
                total_bedrooms: parseFloat(line[4]),
                population: parseFloat(line[5]),
                households: parseFloat(line[6]),
                median_income: parseFloat(line[7]),
                median_house_value: parseFloat(line[8]),
                ocean_proximity: line[9]
            }) ?? [];
        });

        setJson(jsonData)

        console.log(jsonData)
    }

    const handleOnChange = (e: any) => {

        setFile(e.target.files[0]);
        console.log(file)
    };



    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = (event: any) => {
                const csvOutput = event.target.result;
                setData(csvOutput)
                //console.log(csvOutput)
            };

            fileReader.readAsText(file);



        }
    };

    useEffect(() => {
        csvToArray();
        //console.log(data)
    }, [data])




    return (
        <div className={styles.App}>
            <Label text={'Charts Libraries Analysis'} className={styles.title} />
            <FormInput handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />

            <div className={"chartsContainer"}>

                <Recharts data={json ?? []} />
                <Victory data={json ?? []} />

            </div>
            
        </div>
    );
};

export default App;
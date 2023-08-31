import React, { useEffect, useState } from "react";
import Papa, { ParseResult } from "papaparse"
// Allowed extensions for input file

type Data = {
    longitude: number,
    latitude: number,
    housing_median_age: number,
    total_rooms: number,
    total_bedrooms: number,
    population: number,
    households: number,
    median_income: number
    median_house_value: number
    ocean_proximity: string
  }
  
  type Values = {
    data: Data[]
  }


const useReadCSV = (fileName: string) => {

    const [vals, setVal] = React.useState<Values| undefined>()

    const getCSV = () => {
        Papa.parse(fileName, {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: ParseResult<Data>) => {
                setVal(results)
            },
        })
    }

    useEffect(() => {
        getCSV()
    }, [])

    return vals;
}

export default useReadCSV
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, ReferenceLine } from 'recharts';
import Label from "../../Label";

export interface LineChartsProps {

    data: DataProps[],
    widthRC: string,
    heightRC: string,
    widthLineC: number,
    heightLineC: number,
    dataKey: string,
    top: number,
    right: number,
    left: number,
    bottom: number,
    color: string,
    bmLineY?: number //Benchmark Y
    bmLineColor?: string

}

interface DataProps {

    name: string | undefined,
    uv: number | undefined,
    pv?: number,
    amt?: number,

}


const Linechart = (props: LineChartsProps) => {

    return (
        <AreaChart
            width={props.widthLineC}
            height={props.heightLineC}
            data={props.data}
            margin={{
                top: props.top,
                right: props.right,
                left: props.left,
                bottom: props.bottom,
            }}
        >
            <defs>
            {/* #8BC93D */}
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={props.color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={props.color} stopOpacity={0} />
                </linearGradient>

                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={"#FC8D41"} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={"#FC8D41"} stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid horizontal={true} vertical={false} opacity={0.2}/>
            <XAxis tickLine={false} axisLine={false} dataKey={props.dataKey} tick={{ opacity: '0.7', fontSize: 'calc(2px + 1vmin)' }} />
            <YAxis tickLine={false} axisLine={false} tick={{ opacity: '0.7', fontSize: 'calc(2px + 1vmin)' }} />
            <Tooltip contentStyle={{ backgroundColor: '#f2f6f6'}} />
            {props.bmLineY && <ReferenceLine y={props.bmLineY} stroke={props.bmLineColor} strokeDasharray="3 3" /> }
            <Area type="monotone" baseLine={8} dataKey="uv" stroke={props.color} dot={false} isAnimationActive={true} fillOpacity={1} fill="url(#colorUv)"/>
            <Area type="monotone" baseLine={8} dataKey="pv" stroke={"#FC8D41"} dot={false} isAnimationActive={true} fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
    );

}

export default Linechart
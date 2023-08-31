import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export interface BarChartProps {

    data: DataProps[],
    widthRC: string,
    heightRC: string,
    widthBarC: number,
    heightBarC: number,
    barSize: number,
    dataKey: string,
    top: number,
    right: number,
    left: number,
    bottom: number,
    color?: string
    vertical: boolean
}

export interface DataProps {

    name: string,
    uv: number,
    amt?: number,

}


const Barchart = (props: BarChartProps) => {
    const colors = ['#7ED6FB', '#20ACD9', '#09556F', '#06152B', '#7ED6FB', '#20ACD9', '#09556F', '#06152B', '#7ED6FB', '#20ACD9', '#09556F', '#06152B'];
    return (
        <BarChart
            width={props.widthBarC}
            height={props.heightBarC}
            data={props.data}
            margin={{
                top: props.top,
                right: props.right,
                left: props.left,
                bottom: props.bottom,
            }}
            layout={props.vertical ? "vertical" : "horizontal"}
        >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <CartesianGrid horizontal={true} vertical={false} opacity={0.2} />

            {props.vertical ?
                <>
                    <YAxis dataKey={props.dataKey} type="category" />
                    <XAxis type="number" />
                </> :
                <>
                    <XAxis dataKey={props.dataKey} />
                    {/* <YAxis type="category" /> */}
                </>

            }
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="uv" barSize={props.barSize} >
                {props.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />

                ))}

            </Bar>
        </BarChart>
    );

}

export default Barchart
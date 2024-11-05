import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export interface PopulationChartProps<T> {
	data: T[];
	xKey: keyof T;
	lineKeys: Array<keyof T>;
}

const PopulationChart = <T,>({
	data,
	xKey,
	lineKeys,
}: PopulationChartProps<T>) => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={data}
				width={500}
				height={300}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey={String(xKey)} />
				<YAxis />
				<Tooltip />
				<Legend />
				{lineKeys.map((key, index) => (
					<Line
						key={String(key)}
						type="monotone"
						dataKey={String(key)}
						stroke={index % 2 === 0 ? "#8884d8" : "#82ca9d"}
						activeDot={{ r: 8 }}
					/>
				))}
			</LineChart>
		</ResponsiveContainer>
	);
};

export default PopulationChart;

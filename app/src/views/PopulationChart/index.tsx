import { useState } from "react";
import {
	CartesianGrid,
	Label,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import type {
	NameType,
	ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import type { ContentType } from "recharts/types/component/Tooltip";

export interface PopulationChartProps<T> {
	data: T[];
	xKey: keyof T;
	lineKeys: Array<keyof T>;
	legendFormatter?: (value: string) => string;
	tooltip?: ContentType<ValueType, NameType>;
}

const PopulationChart = <T,>({
	data,
	xKey,
	lineKeys,
	legendFormatter = (value) => value,
	tooltip,
}: PopulationChartProps<T>) => {
	const [stroke, setStroke] = useState<{ [key: string]: number }>({
		...Object.fromEntries(lineKeys.map((key) => [String(key), 1])),
	});

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleMouseEnter = (o: any) => {
		const { dataKey } = o;

		setStroke((op) => ({ ...op, [dataKey]: 4 }));
	};

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleMouseLeave = (o: any) => {
		const { dataKey } = o;

		setStroke((op) => ({ ...op, [dataKey]: 2 }));
	};
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={data}
				width={500}
				height={300}
				margin={{
					top: 40,
					left: 40,
					right: 10,
					bottom: 15,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey={String(xKey)}>
					<Label value="年次" offset={-10} position="insideBottom" />
				</XAxis>
				<YAxis tickFormatter={(value: number) => value.toLocaleString()}>
					<Label value="人口(人)" position="top" offset={20} />
				</YAxis>
				{tooltip ? <Tooltip content={tooltip} /> : null}
				<Legend
					layout="horizontal"
					align="center"
					verticalAlign="bottom"
					formatter={legendFormatter}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					wrapperStyle={{
						bottom: 0,
					}}
				/>
				{lineKeys.map((key, index) => (
					<Line
						key={String(key)}
						type="monotone"
						dataKey={String(key)}
						activeDot={{ r: 8 }}
						strokeWidth={stroke[String(key)]}
					/>
				))}
			</LineChart>
		</ResponsiveContainer>
	);
};

export default PopulationChart;

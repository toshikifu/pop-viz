import type { TooltipProps } from "recharts";
import type {
	NameType,
	ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type PopulationChartTooltipProps = {
	getPrefNameByCode: (prefCode: string) => string;
} & TooltipProps<ValueType, NameType>;

const PopulationChartTooltip = ({
	active,
	payload,
	label,
	getPrefNameByCode,
}: PopulationChartTooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div
				className={`
				grid
				grid-rows-6
				grid-flow-col
				gap-4
				p-4
				bg-gradient-to-r 
				from-black/40 
				via-white/40 to-transparent 
				bg-[#E7EBF0] 
				bg-blend-soft-light 
				shadow-[inset_-2.5px_-2.5px_5px_#FAFBFF,inset_2.5px_2.5px_5px_#A6ABBD] 
				rounded-[10px] 
				border-[#CED1DC]
				border-1
				appearance-none
			`}
			>
				<h1 className="font-bold">{label}年</h1>
				{payload.map((p) => {
					return (
						<p key={p.dataKey} style={{ color: p.color }}>
							{getPrefNameByCode(p.dataKey as string)}:{" "}
							{Number(p.value).toLocaleString()}
						</p>
					);
				})}
			</div>
		);
	}

	return null;
};

export default PopulationChartTooltip;

import { PopulationCategory } from "~/utils/transform-population-data";

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
	value,
	onChange,
	className,
}) => {
	return (
		<select
			className={`
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
				${className}
			`}
			value={value}
			onChange={onChange}
		>
			{Object.values(PopulationCategory).map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
};
export default Select;

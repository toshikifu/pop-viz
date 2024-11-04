"use client";

import { useState } from "react";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
	name: string;
	value: string;
	defaultChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, value, defaultChecked }) => {
	const [isChecked, setIsChecked] = useState(defaultChecked ?? false);

	return (
		<div className="relative">
			<input
				type="checkbox"
				id="neumorphic-checkbox"
				name={name}
				value={value}
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
				className="sr-only peer"
			/>
			<label
				htmlFor="neumorphic-checkbox"
				className={`
            flex items-center justify-center w-[50px] h-[50px] rounded-[10px] cursor-pointer
            transition-all duration-200
            ${
							isChecked
								? "bg-gradient-to-br from-[#4A90E2] to-[#2485FF] shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
								: "bg-[#E7EBF0] shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.7),inset_5px_5px_10px_rgba(0,0,0,0.1)]"
						}
          `}
			>
				{isChecked && (
					<span className="text-white text-3xl font-bold select-none">✓</span>
				)}
			</label>
		</div>
	);
};

export default Checkbox;

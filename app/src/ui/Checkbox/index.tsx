"use client";

import { useState } from "react";

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
	props,
) => {
	const [isChecked, setIsChecked] = useState(props.defaultChecked);

	const handleToggle = () => {
		setIsChecked((prev) => !prev);
	};
	return (
		<div className="">
			<input
				type="checkbox"
				id={props.id}
				name={props.name}
				value={props.value}
				defaultChecked={props.defaultChecked}
				onChange={handleToggle}
				className="sr-only peer"
			/>
			<label
				htmlFor={props.id}
				className={`
            flex items-center justify-center w-7 h-7 rounded cursor-pointer
            transition-all duration-200
            ${
							isChecked
								? "bg-gradient-to-br from-[#4A90E2] to-[#2485FF] shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
								: "bg-[#E7EBF0] shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.7),inset_5px_5px_10px_rgba(0,0,0,0.1)]"
						}
          `}
			>
				{isChecked && (
					<span className="text-white text-lg font-bold select-none">✓</span>
				)}
			</label>
		</div>
	);
};

export default Checkbox;

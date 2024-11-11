import type React from "react";

interface CardProps {
	className?: string;
	children?: React.ReactNode;
}

const Rectangle: React.FC<CardProps> = ({ className = "", children }) => {
	return (
		<div
			className={`bg-[#E7EBF0] rounded-[20px] shadow-[inset_-2.5px_-2.5px_5px_#FAFBFF,inset_2.5px_2.5px_5px_#A6ABBD] ${className}`}
		>
			{children}
		</div>
	);
};

export default Rectangle;

export interface IconBadgeProps {
	children: React.ReactNode;
}

const IconBadge: React.FC<IconBadgeProps> = ({ children }) => {
	return (
		<div className="box-border w-20 h-20 bg-[#E7EBF0] rounded-full border border-white/20 shadow-[-10px_-10px_20px_#FAFBFF,_10px_10px_20px_#A6ABBD] flex items-center justify-center">
			{children}
		</div>
	);
};
export default IconBadge;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
	return (
		<button
			type="button"
			className={`
        group
        relative
        text-[#414B5A] 
        text-xl
        font-semibold 
        px-12 py-4 
        rounded-2xl 
        bg-gradient-to-b from-[#e6e9ef] to-[#ebeef4]
        shadow-[5px_5px_10px_rgb(163,177,198,0.6),_-5px_-5px_10px_rgba(255,255,255,0.5)]
        hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),_inset_-5px_-5px_10px_rgba(255,255,255,0.5)]
        active:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),_inset_-5px_-5px_10px_rgba(255,255,255,0.5)]
        active:transform active:scale-95
        transition-all duration-300 ease-in-out
        overflow-hidden
        ${disabled ? "opacity-50 cursor-not-allowed shadow-[inset_2px_2px_5px_rgb(163,177,198,0.6),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]" : ""}
      `}
		>
			{children}
		</button>
	);
};
export default Button;

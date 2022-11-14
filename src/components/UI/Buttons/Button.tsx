
const Button: React.FC<{
	className?: string;
	onClick?: () => void;
	icon?: JSX.Element;
	iconOnLeft?: boolean;
	label: string;
}> = ({
	className = "",
	onClick = () => {},
	icon,
	iconOnLeft = true,
	label,
}) => {
	return (
		<button className={`bg-white btn-shadow min-w-[144px] rounded-lg text-light-green px-5 py-2 flex items-center justify-center gap-2 ${className}`}>
			{iconOnLeft && icon}
			{label}
			{!iconOnLeft && icon}
		</button>
	)
}

export default Button;
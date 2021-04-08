import { StyledButton } from "../styles/GlobalStyles";

const Button = ({ primary, children, ...props }) => {
	return (
		<StyledButton
			whileHover={
				primary
					? {
							backgroundColor: "var(--third-color)",
							color: "var(--first-color)",
					  }
					: { color: "var(--third-color)" }
			}
			transition={{ duration: 0.3 }}
			primary={primary}
			{...props}
		>
			{children}
		</StyledButton>
	);
};

export default Button;

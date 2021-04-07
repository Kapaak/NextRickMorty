import { StyledButton } from "../styles/GlobalStyles";

const Button = ({ primary, children, ...props }) => {
	return (
		<StyledButton primary={primary} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;

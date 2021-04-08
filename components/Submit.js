import { StyledSubmit } from "../styles/GlobalStyles";

const Input = () => {
	return (
		<StyledSubmit
			initial={{ opacity: 0, x: -35 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6 }}
			whileHover={{ color: "var(--third-color)" }}
		>
			submit
		</StyledSubmit>
	);
};

export default Input;

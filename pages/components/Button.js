import styled from "styled-components";

const Button = ({ primary, children }) => {
	console.log(primary);
	return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
	background-color: transparent;
	padding: 1rem 2rem;
	color: var(--second-color);
	border: ${props => (props.primary ? "1px solid var(--third-color)" : "none")};
	border-radius: 0.8rem;
	margin: 2rem 1rem;
	font-size: 2rem;
	cursor: pointer;
`;

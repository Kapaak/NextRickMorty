import styled from "styled-components";

const Input = () => {
	return <StyledButton>submit</StyledButton>;
};

const StyledButton = styled.button`
	color: var(--second-color);
	background-color: transparent;
	padding: 1rem 2rem 1rem 1rem;
	font-size: 2rem;
	border: 1px solid var(--third-color);
	border-left: none;
	border-radius: 0 0.8rem 0.8rem 0;
	outline: none;
	cursor: pointer;
`;

export default Input;

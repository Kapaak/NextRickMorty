import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--first-color: #01383a;
	--second-color: #88be43;
	--third-color: #c7d759;
	--fourth-color: #f5c1a0;

	--first-font: "Barlow", sans-serif;
}
html {
	font-size: 62.5%;
}

body {
	font-size: 1.6rem;
    font-family: var(--first-font);
}

`;

export default GlobalStyles;

export const StyledContainer = styled.div`
	background-color: var(--first-color);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const StyledButton = styled.button`
	background-color: transparent;
	padding: 1rem 2rem;
	color: var(--second-color);
	border: ${props => (props.primary ? "1px solid var(--third-color)" : "none")};
	border-radius: 0.8rem;
	margin: 2rem 1rem;
	font-size: 2rem;
	cursor: pointer;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export const StyledSubmit = styled.button`
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

export const StyledInput = styled.div`
	input {
		font-size: 2rem;
		padding: 1rem 1rem 1rem 2rem;
		caret-color: var(--second-color);
		border: 1px solid var(--third-color);
		border-right: none;
		border-radius: 0.8rem 0 0 0.8rem;
		outline: none;
		background-color: transparent;
		color: var(--second-color);
	}
	ul {
		position: absolute;
		left: 0;
		margin-top: 1rem;
		width: 100%;
		border: 1px solid var(--third-color);
		border-radius: 0.8rem;
		overflow: hidden;
		max-height: 18rem;
		overflow-y: auto;
		z-index: 10;

		&::-webkit-scrollbar {
			width: 0.8rem;
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--second-color);
			border-right: 5px solid var(--first-color);
		}

		li {
			font-size: 2rem;
			padding: 1rem 1rem 1rem 2rem;
			color: var(--second-color);
			list-style: none;
			text-align: left;
			&:hover {
				background-color: var(--second-color);
				color: var(--first-color);
				cursor: pointer;
			}
		}
	}
`;

export const CharacterContainer = styled.a`
	position: relative;
	height: 18rem;
	display: grid;
	place-items: center;
	background-image: url(${props => props.imgUrl});
	background-size: cover;
	z-index: 1;
	cursor: pointer;

	h3 {
		z-index: 10;
		color: inherit;
		text-decoration: none;
		text-align: center;
	}

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgb(245 193 160 / 70%);
		z-index: 2;
	}
`;

export const CharacterListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	gap: 2rem;
	width: 100%;
	max-width: 1440px;
	padding: 2rem;
`;

export const StyledNav = styled.div`
	position: relative;
	display: block;
	color: red;
	background-color: var(--first-color);
	padding: 1rem;

	a {
		color: var(--second-color);
		text-decoration: none;
		font-size: 1.8rem;
	}
`;

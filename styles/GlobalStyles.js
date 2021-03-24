import { createGlobalStyle } from "styled-components";

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

import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
	return (
		<StyledLink>
			<Link href="/">
				<a>Rick & Morty</a>
			</Link>
		</StyledLink>
	);
};

export default Nav;

const StyledLink = styled.div`
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

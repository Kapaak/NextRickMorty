import Link from "next/link";
//style
import { StyledNav } from "../styles/GlobalStyles";

const Nav = () => {
	return (
		<StyledNav>
			<Link href="/">
				<a>Rick & Morty</a>
			</Link>
		</StyledNav>
	);
};

export default Nav;

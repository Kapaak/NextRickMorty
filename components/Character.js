import Link from "next/link";
import styled from "styled-components";
const Character = ({ character }) => {
	return (
		<>
			<Link href="/characters/[id]" as={`/characters/${character.id}`}>
				<CharacterContainer imgUrl={character.image}>
					<h3>{character.name}</h3>
				</CharacterContainer>
			</Link>
		</>
	);
};

export default Character;

const CharacterContainer = styled.a`
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

import Link from "next/link";
//style
import { CharacterContainer } from "../styles/GlobalStyles";

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

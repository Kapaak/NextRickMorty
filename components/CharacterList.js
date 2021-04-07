//style
import { CharacterListContainer } from "../styles/GlobalStyles";
//components
import Character from "./Character";

const CharacterList = ({ characters }) => {
	return (
		<CharacterListContainer>
			{characters.map(character => {
				return <Character character={character} key={character.id} />;
			})}
		</CharacterListContainer>
	);
};

export default CharacterList;

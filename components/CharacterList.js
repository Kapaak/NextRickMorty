//libraries
import styled from "styled-components";
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

const CharacterListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	gap: 2rem;
	width: 100%;
`;

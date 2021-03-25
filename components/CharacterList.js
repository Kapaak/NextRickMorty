import Character from "./Character";

const CharacterList = ({ characters }) => {
	return (
		<div>
			{characters.map(character => {
				return <Character character={character} key={character.id} />;
			})}
		</div>
	);
};

export default CharacterList;

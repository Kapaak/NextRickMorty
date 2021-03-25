import Link from "next/link";
const Character = ({ character }) => {
	return (
		<Link href="/characters/[id]" as={`/characters/${character.id}`}>
			<a>
				<h3>{character.name} &rarr;</h3>
			</a>
		</Link>
	);
};

export default Character;

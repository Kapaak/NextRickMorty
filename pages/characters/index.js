import axios from "axios";
import CharacterList from "../../components/CharacterList";

export default function Home({ characters }) {
	console.log(characters);
	return (
		<div>
			<CharacterList characters={characters} />
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await axios.get("https://rickandmortyapi.com/api/character");
	const characters = await res.data.results;

	return {
		props: {
			characters,
		},
	};
};

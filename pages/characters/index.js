//libraries
import axios from "axios";
import styled from "styled-components";
//components
import CharacterList from "../../components/CharacterList";
//styles
import { StyledContainer } from "../../styles/GlobalStyles";

export default function Home({ characters }) {
	return (
		<StyledContainer>
			<CharacterList characters={characters} />
		</StyledContainer>
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

//libraries
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
//components
import CharacterList from "../../components/CharacterList";
//styles
import { StyledContainer } from "../../styles/GlobalStyles";

export default function Home({ characters }) {
	const [data, setData] = useState(characters);
	const [counter, setCounter] = useState(2);
	// console.log(data);

	const fetchData = async () => {
		const resp = await axios.get(
			`https://rickandmortyapi.com/api/character?page=${counter}`
		);
		const data = await resp.data.results;
		setData(data);
		console.log(counter);
	};

	const fetchDataForwards = async () => {
		if (counter < 34) {
			setCounter(prev => prev + 1);
			fetchData();
		}
	};
	const fetchDataBackwards = async () => {
		if (counter > 0) {
			setCounter(prev => prev - 1);
			fetchData();
		}
	};
	//
	return (
		<CharactersContainer>
			<CharacterList characters={data} />
			<div className="buttons">
				<button onClick={fetchDataBackwards}>&#8678;</button>
				<button onClick={fetchDataForwards}>&#8680;</button>
			</div>
		</CharactersContainer>
	);
}

export const getStaticProps = async () => {
	const res = await axios.get(
		`https://rickandmortyapi.com/api/character?page=1`
	);
	const characters = await res.data.results;

	return {
		props: {
			characters,
		},
	};
};

const CharactersContainer = styled(StyledContainer)`
	.buttons {
		button {
			background-color: transparent;
			border: none;
			padding: 0.5rem 1rem;
			font-size: 4rem;
			cursor: pointer;
			color: var(--second-color);
		}
	}
`;

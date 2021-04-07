//libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
//components
import CharacterList from "../../components/CharacterList";
//styles
import { StyledContainer } from "../../styles/GlobalStyles";

export default function Home({ characters }) {
	const [data, setData] = useState(characters);
	const [counter, setCounter] = useState(1);

	const fetchData = async action => {
		await setCounter(prev => prev + action);
		const resp = await axios.get(
			`https://rickandmortyapi.com/api/character?page=${counter}`
		);
		const data = await resp.data.results;
		setData(data);
	};

	const fetchDataForwards = async () => {
		if (counter < 34) {
			console.log(counter, "plus");

			fetchData(+1);
		}
	};
	const fetchDataBackwards = async () => {
		if (counter > 0) {
			console.log(counter, "minus");
			fetchData(-1);
		}
	};

	return (
		<CharactersContainer>
			<CharacterList characters={data} />
			<div
				className="buttons"
				style={{ display: "flex", alignItems: "center" }}
			>
				<button onClick={fetchDataBackwards}>&#8678;</button>
				<p style={{ color: "var(--second-color)" }}>{counter}</p>
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
			outline: none;
		}
	}
`;

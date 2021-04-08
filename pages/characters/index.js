//libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
//components
import CharacterList from "../../components/CharacterList";
//styles
import { StyledContainer } from "../../styles/GlobalStyles";

const fetchData = async (setData, setPages) => {
	const data = await axios.get("https://rickandmortyapi.com/api/character");
	let pagesRequired = await data.data.info.pages;
	const apiPromises = [];

	for (let i = pagesRequired; i > 0; i--) {
		apiPromises.push(
			axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
		);
	}

	// Promise.all(
	// 	apiPromises.map(async api => {
	// 		const user = await api;
	// 		const resp = user.data.results;
	// 		processedResponses.push(user.data.results);
	// 		setData(prev => [...prev, resp]);
	// 	})
	// );
	Promise.all(apiPromises).then(responses => {
		const processedResponses = [];

		responses.map(response => {
			processedResponses.push(response.data.results);
		});
		processedResponses.reverse();

		setPages(pagesRequired);
		setData(processedResponses);
	});
};

export default function Home() {
	const [data, setData] = useState([]);
	const [pages, setPages] = useState([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		fetchData(setData, setPages);
		const reverseData = [...data].reverse();
		setData(reverseData);
	}, []);

	const counterHandler = action => {
		if (action === "INC") {
			if (counter < pages - 1) return setCounter(prev => prev + 1);
		}
		if (action === "DEC") {
			if (counter > 0) return setCounter(prev => prev - 1);
		}
	};

	return (
		<CharactersContainer exit={{ opacity: 0 }}>
			{data[counter] ? <CharacterList characters={data[counter]} /> : null}
			<div
				className="buttons"
				style={{ display: "flex", alignItems: "center" }}
			>
				<button onClick={() => counterHandler("DEC")}>&#8678;</button>
				<p style={{ color: "var(--second-color)" }}>
					{counter + 1}/{pages}
				</p>
				<button onClick={() => counterHandler("INC")}>&#8680;</button>
			</div>
		</CharactersContainer>
	);
}

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

import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const CustomAutoSuggest = ({ data }) => {
	const [state, setState] = useState({ suggestions: [], text: "" });
	const items = [...data];
	const { suggestions, text } = state;
	const router = useRouter();

	const onTextChanged = e => {
		const value = e.target.value;
		const newState = { ...state };
		let suggestions = [];

		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, "i");
			suggestions = items
				.sort(function (a, b) {
					if (a.name < b.name) {
						return -1;
					}
					if (a.name > b.name) {
						return 1;
					}
					return 0;
				})
				.filter(v => regex.test(v.name));
		}
		// const newsug = suggestions.map(el => {
		// 	return {
		// 		name: el.name,
		// 		id: el.id,
		// 	};
		// });

		setState({ ...newState, suggestions, text: value });
	};

	const suggestionSelected = value => {
		const newState = { ...state };
		setState({ ...newState, text: value, suggestions: [] });
		router.push({
			pathname: `/characters/${value.id}`,
		});
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul>
				{suggestions.map((item, index) => (
					<li onClick={() => suggestionSelected(item)} key={index}>
						{item.name}
					</li>
				))}
			</ul>
		);
	};

	return (
		<StyledInput>
			<input value={text} onChange={e => onTextChanged(e)} type="text" />
			{renderSuggestions()}
		</StyledInput>
	);
};

export default CustomAutoSuggest;

const StyledInput = styled.div`
	input {
		font-size: 2rem;
		padding: 1rem 1rem 1rem 2rem;
		caret-color: var(--second-color);
		border: 1px solid var(--third-color);
		border-right: none;
		border-radius: 0.8rem 0 0 0.8rem;
		outline: none;
		background-color: transparent;
		color: var(--second-color);
	}
	ul {
		position: absolute;
		left: 0;
		margin-top: 1rem;
		width: 100%;
		border: 1px solid var(--third-color);
		border-radius: 0.8rem;
		overflow: hidden;
		max-height: 18rem;
		overflow-y: auto;
		z-index: 10;

		scrollbar-gutter: stable;

		&::-webkit-scrollbar {
			width: 0.8rem;
		}

		&::-webkit-scrollbar-track {
			/* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--second-color);
			border-right: 5px solid var(--first-color);
		}

		li {
			font-size: 2rem;
			padding: 1rem 1rem 1rem 2rem;
			color: var(--second-color);
			list-style: none;
			text-align: left;
			&:hover {
				background-color: var(--second-color);
				color: var(--first-color);
				cursor: pointer;
			}
		}
	}
`;

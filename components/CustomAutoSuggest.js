import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const CustomAutoSuggest = ({ data }) => {
	const [state, setState] = useState({ suggestions: [], text: "" });
	// const items = ["David", "Damien", "Sara", "Jane"];
	const items = [...data].map(el => el.name);
	const { suggestions, text } = state;
	const router = useRouter();
	console.log(router);

	const onTextChanged = e => {
		const value = e.target.value;
		const newState = { ...state };
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, "i");
			suggestions = items.sort().filter(v => regex.test(v));
		}
		setState({ ...newState, suggestions, text: value });
	};

	const suggestionSelected = value => {
		const newState = { ...state };
		setState({ ...newState, text: value, suggestions: [] });
		console.log(value, " is selected");
		const findId = [...data].find(el => {
			return el.name === value;
		});
		console.log(findId.id);
		router.push({
			pathname: `/characters/${findId.id}`,
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
						{item}
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
		li {
			font-size: 2rem;
			padding: 1rem 1rem 1rem 2rem;
			color: var(--second-color);
		}
	}
`;

//library
import React, { useState } from "react";
import { useRouter } from "next/router";
//styles
import { StyledInput } from "../styles/GlobalStyles";

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

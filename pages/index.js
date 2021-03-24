import styled from "styled-components";
import React, { useState, useEffect } from "react";
//components
import Button from "./components/Button";
import Input from "./components/Input";

export default function Home() {
	const [isSearching, setIsSearching] = useState(false);

	return (
		<StyledHome>
			<div className="headline">
				<h2>Rick and Morty</h2>
				<h3>character database</h3>
			</div>
			<div className="routes">
				{isSearching ? (
					<Input />
				) : (
					<Button
						onClick={() => {
							console.log("pep");
							setIsSearching(search => !search);
						}}
						primary
					>
						search
					</Button>
				)}

				<Button primary>characters</Button>
			</div>
		</StyledHome>
	);
}

const StyledHome = styled.div`
	background-color: var(--first-color);
	min-height: 100vh;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.headline {
		h2,
		h3 {
			color: var(--fourth-color);
			text-align: center;
		}
		h2 {
			font-size: 8.5rem;
			text-transform: uppercase;
			line-height: 1;
		}
		h3 {
			font-size: 5.5rem;
		}
	}

	.routes {
	}
`;

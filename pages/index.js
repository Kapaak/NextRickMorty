import styled from "styled-components";
import React, { useState } from "react";

//components
import HomeHeadline from "../components/HomeHeadline";
//styles
import { StyledContainer } from "../styles/GlobalStyles";
import Image from "next/image";

export default function Home() {
	const [isSearching, setIsSearching] = useState(false);

	const resetIsSearching = e => {
		const isClickOutside =
			e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT";

		if (isClickOutside) setIsSearching(false);
	};

	return (
		<StyledHome onClick={resetIsSearching}>
			<div>placeholder</div>
			<div>
				<HomeHeadline
					isSearching={isSearching}
					setIsSearching={setIsSearching}
				/>
			</div>
			<div className="styled-img top-left">
				<Image src="/cloud1.svg" width={300} height={300} layout="fixed" />
			</div>
			<div className="styled-img top-right">
				<Image src="/cloud2.svg" width={500} height={300} layout="fixed" />
			</div>
			<div className="styled-img bottom-right">
				<Image src="/cloud1.svg" width={500} height={300} layout="fixed" />
			</div>
			<StyledCircle />

			{/* <Image
				src="/../public/morty.webp"
				width={300}
				height={300}
				layout="responsive"
			/> */}
		</StyledHome>
	);
}

const StyledHome = styled(StyledContainer)`
	position: relative;
	overflow: hidden;
	justify-content: space-between;

	.styled-img {
		position: absolute;
		z-index: 0;

		&.top-left {
			left: 4rem;
		}

		&.top-right {
			top: 4rem;
			left: 100rem;
		}
		&.bottom-right {
			bottom: 4rem;
			left: 80rem;
			transform: rotate(160deg);
		}
	}
	.headline {
		margin-top: 15rem;
		z-index: 1;
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
		text-align: center;
		z-index: 1;
	}
`;

const StyledCircle = styled.div`
	width: 90rem;
	height: 90rem;
	border-radius: 50%;
	background-color: var(--second-color);
	margin-bottom: -76rem;
	margin-left: -18rem;
	margin-right: auto;
	box-shadow: 5px -7px 33px var(--second-color);
`;

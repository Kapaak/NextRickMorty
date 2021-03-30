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
			<div></div>
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
		transition: all 0.5s ease;

		&.top-left {
			left: 4rem;
		}

		&.top-right {
			top: 4rem;
			right: 4rem;
		}
		&.bottom-right {
			bottom: 4rem;
			right: 10rem;
			transform: rotate(160deg);
		}
	}
	.headline {
		position: relative;
		margin-top: 15rem;
		z-index: 2;
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
		position: relative;
		text-align: center;
		z-index: 1;
	}

	@media (max-width: 1400px) {
		.styled-img.top-right {
			left: 116rem;
		}
		.styled-img.bottom-right {
			left: 120rem;
		}
	}

	@media (max-width: 700px) {
		.headline {
			margin-bottom: 1rem;
			h2 {
				font-size: 5.5rem;
			}
			h3 {
				font-size: 3.5rem;
			}
		}

		.routes {
			input {
				padding: 0.6rem 1rem 0.9rem 2rem;
			}
			button {
				font-size: 1.6rem;
			}
		}

		.styled-img.top-left {
			left: 30rem;
		}
	}
	@media (max-width: 500px) {
		.headline {
			h2 {
				font-size: 4.5rem;
			}
			h3 {
				font-size: 3rem;
			}
		}

		.routes {
			input {
				padding: 0.5rem 1rem 0.8rem 2rem;
			}
			button {
				font-size: 1.4rem;
			}
		}

		.styled-img.top-left {
			left: 30rem;
		}
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

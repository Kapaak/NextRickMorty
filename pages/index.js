import styled from "styled-components";
import React, { useState } from "react";

//components
import HomeHeadline from "../components/HomeHeadline";
//styles
import { StyledContainer } from "../styles/GlobalStyles";
import Image from "next/image";
//images
import cloud1 from "../public/cloud1.svg";
import cloud2 from "../public/cloud2.svg";

export default function Home() {
	const [isSearching, setIsSearching] = useState(false);

	const resetIsSearching = e => {
		const isClickOutside =
			e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT";

		if (isClickOutside) setIsSearching(false);
	};

	return (
		<StyledHome onClick={resetIsSearching}>
			<HomeHeadline isSearching={isSearching} setIsSearching={setIsSearching} />
			<Image src="/../public/cloud1.svg" width={300} height={300} />
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

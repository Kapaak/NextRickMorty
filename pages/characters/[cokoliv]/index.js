//imports
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
//styles
import { StyledContainer } from "../../../styles/GlobalStyles";

export default function Character({ character }) {
	console.log(character);
	const characterOriginUpdate = () => {
		const newChar = character.origin.name;
		return newChar.replace(/ *\([^)]*\) */g, "");
	};
	return (
		<StyledCharacter>
			<div className="character-container">
				<div className="character-headline">
					<h2>{character.name}</h2>
					<div className="character-info">
						<h3>Race</h3>
						<h4>{character.species}</h4>
					</div>
					<div className="character-info">
						<h3>Planet</h3>
						<h4>{characterOriginUpdate()}</h4>
					</div>
					<div className="character-info">
						<h3>Status</h3>
						<h4>{character.status}</h4>
					</div>
				</div>
				<Image
					src={character.image}
					alt={character.name}
					width={450}
					height={500}
				/>
				{/* <img src={character.image} alt={character.name} /> */}
			</div>
		</StyledCharacter>
	);
}

export const getStaticProps = async context => {
	//tady fetchnu data pro tuto stranku a pro vsechny mozny iterace tehle stranky
	const res = await axios.get(
		`https://rickandmortyapi.com/api/character/${context.params.cokoliv}`
	);
	const character = await res.data;

	return {
		props: {
			character,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await axios.get(`https://rickandmortyapi.com/api/character/`);
	const characters = await res.data.results;
	const ids = characters.map(character => character.id);
	const paths = ids.map(id => ({ params: { cokoliv: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

const StyledCharacter = styled(StyledContainer)`
	.character-container {
		display: flex;
		margin-right: 2rem;

		.character-headline {
			margin-right: 20rem;
			h2 {
				color: var(--fourth-color);
				font-size: 6.5rem;
				text-transform: uppercase;
				line-height: 1;
				margin-bottom: 10rem;
			}
			.character-info {
				display: flex;
				align-items: baseline;
				h3,
				h4 {
					font-weight: 400;
					color: var(--third-color);
					text-transform: uppercase;
				}

				h3 {
					font-size: 5.3rem;
					line-height: 1.7;
				}
				h4 {
					font-size: 3rem;
					margin-left: auto;
					min-width: 18rem;
				}
			}
		}
	}
`;

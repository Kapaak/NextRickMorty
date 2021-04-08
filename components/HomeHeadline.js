//library
import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
//components
import Button from "../components/Button";
import Submit from "./Submit";
import CustomAutoSuggest from "./CustomAutoSuggest";

function fetchData(setData) {
	let pagesRequired = 0;

	axios.get("https://rickandmortyapi.com/api/character").then(resp => {
		const apiPromises = [];
		pagesRequired = resp.data.info.pages;

		for (let i = pagesRequired; i > 0; i--) {
			apiPromises.push(
				axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
			);

			Promise.all(apiPromises).then(responses => {
				const processedResponses = [];
				responses.map(response => {
					processedResponses.push(response.data.results);
				});
				setData(processedResponses.flat());
			});
		}
	});
}

const HomeHeadline = ({ isSearching, setIsSearching }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData(setData);
	}, []);
	return (
		<>
			<motion.div
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
				className="headline"
			>
				<h2>Rick and Morty</h2>
				<h3>character database</h3>
			</motion.div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.6 }}
				className="routes"
			>
				{isSearching ? (
					<div className="type-in">
						<CustomAutoSuggest data={data} />
						<Submit />
					</div>
				) : (
					<Button
						onClick={() => {
							setIsSearching(searching => !searching);
						}}
						primary
					>
						search
					</Button>
				)}

				<Button>
					<Link href="/characters">
						<a>characters</a>
					</Link>
				</Button>
			</motion.div>
		</>
	);
};

export default memo(HomeHeadline);

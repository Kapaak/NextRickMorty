//components
import Button from "../components/Button";
import Input from "../components/Input";
//import
import Link from "next/link";

const HomeHeadline = ({ isSearching, setIsSearching }) => {
	return (
		<>
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
							setIsSearching(search => !search);
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
			</div>
		</>
	);
};

export default HomeHeadline;

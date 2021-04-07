import Nav from "../components/Nav";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

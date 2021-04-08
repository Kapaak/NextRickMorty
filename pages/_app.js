import Nav from "../components/Nav";
import GlobalStyles from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;

import { Box } from "@chakra-ui/react";
import Navbar from "../navbar";
import HomeText from "./HomeText";

export default function Home() {
	return (
		<Box>
			<Navbar />
			<HomeText />
		</Box>
	);
}

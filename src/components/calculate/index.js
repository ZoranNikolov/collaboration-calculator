import { Flex } from "@chakra-ui/react";
import Navbar from "../navbar";
import Sidebar from "./Sidebar";
import LoadedData from "./LoadedData";

export default function Calculate() {
	return (
		<>
			<Navbar />
			<Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
				<LoadedData />
				<Sidebar />
			</Flex>
		</>
	);
}

import { Link as RouterLink } from "react-router-dom";
import { HOME, CALCULATE, CONTACT } from "../../lib/routes";
import { Flex, Link } from "@chakra-ui/react";

export default function Navbar() {
	return (
		<Flex
			shadow="sm"
			pos="fixed"
			width="full"
			borderTop="6px solid"
			borderTopColor="blue.500"
			height="16"
			zIndex="3"
			justify="center"
			bg="white"
		>
			<Flex px="4" w="full" align="center" maxW="1200px" gap="10">
			<Link color="blue.700" as={RouterLink} to={HOME} fontWeight="bold">
				Home
			</Link>
			<Link
				color="blue.700"
				as={RouterLink}
				to={CALCULATE}
				fontWeight="bold"
			>
				Calculate
			</Link>
			<Link
				color="blue.700"
				as={RouterLink}
				to={CONTACT}
				fontWeight="bold"
			>
				Contact us
			</Link>
			</Flex>
		</Flex>
	);
}

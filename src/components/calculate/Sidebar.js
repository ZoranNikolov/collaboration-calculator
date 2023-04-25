import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Sidebar() {
	const pairData = useSelector((state) => state.pair.value);
	const errorsList = useSelector((state) => state.errors?.value);

	const [longestPeriodTogetherPair, setLongestPeriodTogetherPair] =
		useState();

	useEffect(() => {
		setLongestPeriodTogetherPair(pairData);
	}, [pairData]);

	return (
		<Box
			px="6"
			height="80vh"
			w="100%"
			maxW="400px"
			borderLeft="1px solid"
			borderLeftColor="blue.100"
			position="sticky"
			top="16"
			display={{ base: "none", md: "block" }}
		>
			<Box mt="8">
				{errorsList?.length > 0 ? (
					<Box>
						<Heading as="h2" size="s" mb="2">
							The file uploaded contains the following errors:
						</Heading>
						{errorsList.map((error, i) => (
							<Text key={i} color="red">
								{error}
							</Text>
						))}
					</Box>
				) : (
					<>
						<Heading as="h2" size="s" mb="2">
							Information about the pair of employees who has
							collaborated together for long period of time:
						</Heading>
						{longestPeriodTogetherPair && longestPeriodTogetherPair.length > 0 && longestPeriodTogetherPair[0] === "no pair" ? (
							<Text mb="2">There is no pair who has worked on common project.</Text>
							) : longestPeriodTogetherPair && longestPeriodTogetherPair.length > 0 ? (
							<Box>
								<Box>
									<Text mb="2">
										The pair of employees who has worked on
										common projects for the longest period
										of time is{" "}
										<strong>
											{longestPeriodTogetherPair.map(
												(pair) => pair.pair
											)}
										</strong>
										.
									</Text>
									<Text mb="2">
										They have worked on common projects for{" "}
										<strong>
											{longestPeriodTogetherPair.map(
												(pair) =>
													pair.daysWorkedTogether
											)}
										</strong>{" "}
										days.
									</Text>
									<Box>
										<Text mb="2">
											They have worked on projects as
											follows:
										</Text>
										{longestPeriodTogetherPair.map((pair) =>
											pair.projects?.map((project, i) => (
												<Text key={i}>
													- {project.id} -{" "}
													{project.days} days;
												</Text>
											))
										)}
									</Box>
								</Box>
							</Box>
						) : (
							<Text as="i">
								Please submit your data in order to calculate
								the desired info.
							</Text>
						)}
					</>
				)}
			</Box>
		</Box>
	);
}

/*

import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Sidebar() {
	const pairData = useSelector((state) => state.pair.value);
	const errorsList = useSelector((state) => state.errors?.value);

	const [longestPeriodTogetherPair, setLongestPeriodTogetherPair] =
		useState();

	useEffect(() => {
		setLongestPeriodTogetherPair(pairData);
	}, [pairData]);

	return (
		<Box
			px="6"
			height="80vh"
			w="100%"
			maxW="400px"
			borderLeft="1px solid"
			borderLeftColor="blue.100"
			position="sticky"
			top="16"
			display={{ base: "none", md: "block" }}
		>
			<Box mt="8">
				{errorsList?.length > 0 ? (
					<Box>
						<Heading as="h2" size="s" mb="2">
							The file uploaded contains the following errors:
						</Heading>
						{errorsList.map((error, i) => (
							<Text key={i} color="red">
								{error}
							</Text>
						))}
					</Box>
				) : (
					<>
						<Heading as="h2" size="s" mb="2">
							Information about the pair of employees who has
							collaborated together for long period of time:
						</Heading>
						{longestPeriodTogetherPair[0] === "no pair" ? (
							<Text mb="2">There is no pair who has worked on common project.</Text>
						) : longestPeriodTogetherPair?.length > 0 ? (
							<Box>
								<Box>
									<Text mb="2">
										The pair of employees who has worked on
										common projects for the longest period
										of time is{" "}
										<strong>
											{longestPeriodTogetherPair.map(
												(pair) => pair.pair
											)}
										</strong>
										.
									</Text>
									<Text mb="2">
										They have worked on common projects for{" "}
										<strong>
											{longestPeriodTogetherPair.map(
												(pair) =>
													pair.daysWorkedTogether
											)}
										</strong>{" "}
										days.
									</Text>
									<Box>
										<Text mb="2">
											They have worked on projects as
											follows:
										</Text>
										{longestPeriodTogetherPair.map((pair) =>
											pair.projects?.map((project, i) => (
												<Text key={i}>
													- {project.id} -{" "}
													{project.days} days;
												</Text>
											))
										)}
									</Box>
								</Box>
							</Box>
						) : (
							<Text as="i">
								Please submit your data in order to calculate
								the desired info.
							</Text>
						)}
					</>
				)}
			</Box>
		</Box>
	);
}


*/
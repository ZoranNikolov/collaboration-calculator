import {
	Box,
	Heading,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import { heading, text, tableData } from "./homeContent";

export default function HomeText() {
	return (
		<>
			<Box maxW="900px" mx="auto" py="20">
				<Heading
					as="h1"
					fontSize="2xl"
					fontWeight="bold"
					mb="4"
					textAlign="justify"
				>
					{heading}
				</Heading>
				{text.map((paragraph) => (
					<Text key={paragraph.id} pb="2" as="p">
						{paragraph.content}
					</Text>
				))}
				<Table variant="striped">
					<Thead>
						<Tr>
							<Th textTransform="none" fontSize="md">EmpID</Th>
							<Th textTransform="none" fontSize="md">ProjectID</Th>
							<Th textTransform="none" fontSize="md">DateFrom</Th>
							<Th textTransform="none" fontSize="md">DateTo</Th>
						</Tr>
					</Thead>
					<Tbody>
						{tableData.map((line) => (
							<Tr key={line.id}>
								<Td>{line.empId}</Td>
								<Td>{line.projectId}</Td>
								<Td>{line.dateFrom}</Td>
								<Td>{line.dateTo}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</>
	);
}

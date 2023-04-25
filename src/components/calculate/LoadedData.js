import {
	Box,
	Button,
	FormControl,
	FormLabel,
	VStack,
	Heading,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	HStack,
	Flex,
	Center,
} from "@chakra-ui/react";
import useLoadedData from "../../hooks/useLoadedData";

export default function LoadedData() {
	const {
		dataList,
		isDataLoaded,
		isLoading,
		isSubmitting,
		inputRef,
		handleSubmit,
		handleFileInputChange,
		handleLoadData,
		handleReset,
	} = useLoadedData();

	return (
		<Box w="800px">
			<Center>
				<Flex
					justifyContent="center"
					alignItems="center"
					border="2px solid"
					borderColor="blue.100"
					borderRadius="md"
					p="4"
					mt="8"
					w="425px"
					top="16"
				>
					<Box flex="1">
						<HStack spacing="5">
							<form>
								<FormControl py="4">
									<FormLabel htmlFor="csvFile">
										Select your CSV file
									</FormLabel>
									<input
										type="file"
										id="csvFile"
										name="csvFile"
										onChange={handleFileInputChange}
										ref={inputRef}
										onClick={() => handleReset(false)}
									/>
								</FormControl>
							</form>
						</HStack>
						<HStack>
							{isDataLoaded && (
								<Button
									colorScheme="blue"
									type="submit"
									isDisabled={isSubmitting}
									onClick={handleSubmit}
									w="100px"
								>
									Submit
								</Button>
							)}
							{!isDataLoaded && (
								<Button
									colorScheme="blue"
									onClick={handleLoadData}
									w="100px"
								>
									Load data
								</Button>
							)}
							<Button
								colorScheme="red"
								onClick={() => handleReset(true)}
								variant="outline"
							>
								Reset
							</Button>
						</HStack>
					</Box>
				</Flex>
			</Center>

			<VStack>
				{dataList?.length > 0 && !isLoading ? (
					<>
						<Heading size="lg" py="10">
							CSV Data
						</Heading>
						<Table variant="striped" colorScheme="gray">
							<Thead>
								<Tr>
									<Th>Row №</Th>
									<Th>Employee ID</Th>
									<Th>Project ID</Th>
									<Th>Date from</Th>
									<Th>Date to</Th>
								</Tr>
							</Thead>
							<Tbody>
								{dataList.map((item, i) => (
									<Tr key={i}>
										<Td>{i + 1}</Td>
										<Td>{item.EmpID}</Td>
										<Td>{item.ProjectID}</Td>
										<Td>{item.DateFrom}</Td>
										<Td>{item.DateTo}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</>
				) : null}
			</VStack>
		</Box>
	);
}

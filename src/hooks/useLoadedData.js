import { useState, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
	addCsvData,
	addPair,
	csvDataSlice,
	pairSlice,
	errorsSlice,
} from "../features/CollaborationData";
import useCsvReader from "./useCsv";
import { useLongestWorkingPair } from "../hooks/useLongestWorkingPair";

export default function useLoadedData() {
	const { csvArray, resetCsvArray, readCsvFile } = useCsvReader();
	const { getLongestWorkingPair } = useLongestWorkingPair();
	const [isDataLoaded, setIsDataLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const dispatch = useDispatch();
	const dataList = useSelector((state) => state.csvData?.value);
	const errorsList = useSelector((state) => state.errors?.value);
	const inputRef = useRef(null);
	const toast = useToast();

	const dataToSubmit = dataList.length ? getLongestWorkingPair(dataList) : null;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (dataToSubmit) {
			dispatch(addPair(dataToSubmit));
		} else {
			dispatch(addPair('no pair'))
		}
		setIsSubmitting(true);
	};

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		readCsvFile(file);
		if (csvArray.length > 0) {
			csvArray.forEach((row) => dispatch(addCsvData(row)));
			setIsDataLoaded(true);
		}
	};

	const handleLoadData = () => {

		if (csvArray.length > 0 && csvArray[0] !== "error") {
			csvArray.forEach((row) => dispatch(addCsvData(row)));
			setIsDataLoaded(true);
			setIsLoading(false);
		} else if (csvArray.length > 0 && csvArray[0] === "error") {
			toast({
				title: "Invalid headers in the CSV file",
				description: "Cannot load data from CSV with invalid headers",
				status: "error",
				position: "top",
				duration: 5000,
				isClosable: true,
			});
		} else if (csvArray.length > 0 && errorsList.length > 0) {
			toast({
				title: "The selected file contains errors",
				description: "Cannot load data from CSV with invalid headers",
				status: "error",
				position: "top",
				duration: 5000,
				isClosable: true,
			});
		}else {
			toast({
				title: "Please select a file to load",
				description: "No file selected",
				status: "error",
				position: "top",
				duration: 5000,
				isClosable: true,
			});
		}
		
		if (errorsList.length > 0) {
			setIsSubmitting(true);
		}
	};

	const handleReset = (showToast) => {
		dispatch(csvDataSlice.actions.resetCsvData());
		dispatch(pairSlice.actions.resetPairData());
		dispatch(errorsSlice.actions.resetErrorData());
		resetCsvArray();
		inputRef.current.value = "";
		setIsDataLoaded(false);
		setIsLoading(true);
		setIsSubmitting(false);

		if (showToast) {
			toast({
				title: "Data reset successfully",
				status: "success",
				position: "top",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	return {
		dataList,
		isDataLoaded,
		isLoading,
		isSubmitting,
		inputRef,
		handleSubmit,
		handleFileInputChange,
		handleLoadData,
		handleReset,
	};
}

import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addError } from "../features/CollaborationData";
import { DATEFORMATS as dateFormats } from "../utils/supportedDateFormats";
import useProcessRows from "./useProcessRows";

export default function useCsvReader() {
	const [csvArray, setCsvArray] = useState([]);
	const toast = useToast();
	const processRows = useProcessRows();
	const dispatch = useDispatch();

	const processCsv = (str, delim = ",") => {
		const headers = str.slice(0, str.indexOf("\n")).split(delim);
		headers[headers.length - 1] = headers[headers.length - 1].trim();

		if (
			headers.every((val, index) => 
			val === ["EmpID", "ProjectID", "DateFrom", "DateTo"][index]) === false
		) {
		const error = ['Invalid headers in the CSV file.\nThe headers should be in format `EmpID, ProjectID, DateFrom, DateTo`.']
			dispatch(addError(error));
			setCsvArray(["error"])
			return;
		}

		const tempRows = str.slice(str.indexOf("\n") + 1).split("\n");
		if (tempRows[tempRows.length - 1] === "") {
			tempRows.pop();
		}

		const rows = tempRows.map((row) => row.replace(/\r$/, ""));
		const newArray = processRows(rows, headers, delim, dateFormats);
		setCsvArray(newArray);
	};

	function readCsvFile(file) {
		const reader = new FileReader();

		reader.onload = function (e) {
			const text = e.target.result;
			if (file.type === "text/csv") {
				processCsv(text);
			} else {
				toast({
					title: "Invalid file type",
					status: "error",
					description: "Please select a CSV file",
					isClosable: true,
					position: "top",
					duration: 5000,
				});
			}
		};

		reader.readAsText(file);
	}

	function resetCsvArray() {
		setCsvArray([]);
	}

	return { csvArray, readCsvFile, resetCsvArray };
}
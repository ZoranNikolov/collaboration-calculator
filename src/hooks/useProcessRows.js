import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addError } from "../features/CollaborationData";
import { useToast } from "@chakra-ui/react";
import moment from "moment";

const useProcessRows = () => {
	const dispatch = useDispatch();
	const errorsList = useSelector((state) => state.errors?.value);
	const toast = useToast();

	useEffect(() => {
		if (errorsList.length > 0) {
			toast({
				title: `The selected file contains errors`,
				description: "Please fix them and reupload",
				status: "error",
				isClosable: true,
				position: "top",
				duration: 5000,
			});
		}
	}, [errorsList]);

	const processRows = (rows, headers, delim, dateFormats) => {
		const newArray = rows.map((row, line) => {
			
			const values = row.split(delim);

			for (let i = values.length - 2; i < values.length; i++) {

				let date;

				if (i === values.length - 1 && 
					values[values.length - 1].toLowerCase().trim() === "null") {
					date = new Date();
					const formattedDate = moment(date).format("YYYY-MM-DD");
					values.splice(values.length - 1, 1, formattedDate);
				}

				for (let j = 0; j < dateFormats.length; j++) {
					date = moment(values[i], dateFormats[j], true);
					if (date.isValid()) {
						break;
					}
				}

				if (!date.isValid()) {
					const error = `Invalid date format on line ${line + 1}`;
					dispatch(addError(error));
				} else {
					values.splice(i, 1, moment(date).format("YYYY-MM-DD"));
				}
			}

			if (isNaN(values[0]) || values[0] ==="") {
				const error = `Invalid Employee ID on line ${line + 1}`
				dispatch(addError(error));
			}

			if (isNaN(values[1]) || values[1] ==="") {
				const error = `Invalid Project ID on line ${line + 1}`
				dispatch(addError(error));
			}

			const eachObject = headers.reduce((obj, header, i) => {
				obj[header] = values[i];
				return obj;
			}, {});

			return eachObject;
		});

		return newArray;
	};

	return processRows;
};

export default useProcessRows;

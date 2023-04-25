export const useLongestWorkingPair = () => {

	const getLongestWorkingPair = (dataList) => {

		const pairsData = {};
		for (let i = 0; i < dataList.length; i++) {
			for (let j = i + 1; j < dataList.length; j++) {
				if (
					dataList[i].ProjectID === dataList[j].ProjectID &&
					dataList[i].EmpID !== dataList[j].EmpID
				) {
					const dateFrom1 = new Date(dataList[i].DateFrom);
					const dateTo1 = new Date(dataList[i].DateTo);
					const dateFrom2 = new Date(dataList[j].DateFrom);
					const dateTo2 = new Date(dataList[j].DateTo);

					const days = Math.ceil(
						(Math.min(dateTo1, dateTo2) -
							Math.max(dateFrom1, dateFrom2) +
							1) /
							86400000
					);
					if (days > 0) {
						const key =
							dataList[i].EmpID < dataList[j].EmpID
								? `${dataList[i].EmpID}-${dataList[j].EmpID}`
								: `${dataList[j].EmpID}-${dataList[i].EmpID}`;

						if (!pairsData[key]) {
							pairsData[key] = {
								days: days,
								projects: [
									{
										id: dataList[i].ProjectID,
										days: days,
									},
								],
								commonProjects: new Set([
									dataList[i].ProjectID,
								]),
							};
						} else {
							pairsData[key].days += days;
							let projectExists = false;
							for (let k = 0; k < pairsData[key].projects.length; k++) {
								if (
									pairsData[key].projects[k].id ===
									dataList[i].ProjectID
								) {
									pairsData[key].projects[k].days += days;
									projectExists = true;
									break;
								}
							}
							if (!projectExists) {
								pairsData[key].projects.push({
									id: dataList[i].ProjectID,
									days: days,
								});
								pairsData[key].commonProjects.add(
									dataList[i].ProjectID
								);
							}
						}
					}
				}
			}
		}

		let longestOverlappingPair = null;
		let longestOverlappingPeriod = 0;

		for (let pair in pairsData) {
			if (pairsData[pair].days > longestOverlappingPeriod) {
				longestOverlappingPeriod = pairsData[pair].days;
				longestOverlappingPair = pair;
			}
		}

		if (longestOverlappingPair !== null) {
			const longestWorkingPair = {
				pair: longestOverlappingPair,
				daysWorkedTogether: pairsData[longestOverlappingPair].days,
				projects: pairsData[longestOverlappingPair].projects.sort(
					(a, b) => b.days - a.days
				),
			};
			return longestWorkingPair;
		}
		return null;
	};
	return { getLongestWorkingPair };
};

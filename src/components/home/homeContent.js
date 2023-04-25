export const heading = `Collaboration calculator`;

export const text = [
	{
		id: 1,
		content: `This is an app that calculates the days each pair of employees has worked together on common projects.`,
	},
	{
		id: 2,
		content: `The app will show you the pair of employees that has collaborated on common projects for the longest period of time.`,
	},
	{
		id: 3,
		content: `You could use the app by uploading your CSV file, loading and submitting the data.`,
	},
	{
		id: 4,
		content: `There are several date formats supported by the application: "MM/DD/YYYY", "DD/MM/YYYY", "MMM DD, YYYY", "DD MMM YYYY", "YYYY/MM/DD", "DD-MM-YYYY", "YYYY-MM-DD", "YYYY/MM/DD".`,
	},
	{
		id: 5,
		content: `The CSV file you upload needs to have a header row. The header row should be in the following format: 'EmpID,ProjectID,DateFrom,DateTo'. Each ID should be a number.`,
	},
	{
		id: 6,
		content: `Here is an example of how your CSV file needs to be formatted in order to be processed by the app successfully.`,
	},
];

export const tableData = [
	{
		id: 1,
		empId: 143,
		projectId: 12,
		dateFrom: "2014-11-05",
		dateTo: "2014-11-10",
	},
	{
		id: 2,
		empId: 143,
		projectId: 10,
		dateFrom: "2014-11-10",
		dateTo: "2014-11-15",
	},
	{
		id: 3,
		empId: 200,
		projectId: 12,
		dateFrom: "2014-11-06",
		dateTo: "2014-11-11",
	},
	{
		id: 4,
		empId: 200,
		projectId: 12,
		dateFrom: "2014-11-10",
		dateTo: "2014-11-12",
	},
];

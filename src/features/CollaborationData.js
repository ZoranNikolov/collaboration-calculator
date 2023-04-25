import { createSlice } from "@reduxjs/toolkit";

export const csvDataSlice = createSlice({
	name: "csvData",
	initialState: { value: [] },
	reducers: {
		addCsvData: (state, action) => {
			state.value.push(action.payload);
		},
		resetCsvData: (state) => {
			state.value = [];
		},
	},
});

export const pairSlice = createSlice({
	name: "pair",
	initialState: { value: [] },
	reducers: {
		addPair: (state, action) => {
			state.value.push(action.payload);
		},
		resetPairData: (state) => {
			state.value = [];
		},
	},
});

export const errorsSlice = createSlice({
	name: "errors",
	initialState: { value: [] },
	reducers: {
		addError: (state, action) => {
			state.value.push(action.payload);
		},
		resetErrorData: (state) => {
			state.value = [];
		},
	},
});

export const reducers = {
	csvData: csvDataSlice.reducer,
	pair: pairSlice.reducer,
	errors: errorsSlice.reducer
};

export const { addCsvData } = csvDataSlice.actions;
export const { addPair } = pairSlice.actions;
export const { addError } = errorsSlice.actions;
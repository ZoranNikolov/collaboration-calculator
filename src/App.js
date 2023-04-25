import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/RootReducer"

const store = configureStore({
	reducer: rootReducer,
});

function App() {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ChakraProvider>
	);
}

export default App;

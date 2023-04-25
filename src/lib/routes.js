import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";
import Contact from "../components/contact";
import Calculate from "../components/calculate";

export const HOME = "/";
export const CONTACT = "/contact";
export const CALCULATE = "/calculate";

export const router = createBrowserRouter([
	{ path: HOME, element: <Home /> },
	{ path: CONTACT, element: <Contact /> },
	{ path: CALCULATE, element: <Calculate /> },
]);

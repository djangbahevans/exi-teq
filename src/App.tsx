import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Login";
import Signuppage from "./pages/Signup";

export default () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Homepage />} path="/" />
			<Route element={<Loginpage />} path="/signin" />
			<Route element={<Signuppage />} path="/signup" />
		</Routes>
	</BrowserRouter>
);

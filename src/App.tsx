import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<SubNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<SingleProduct />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

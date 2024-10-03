import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayot from "./pages/layouts/AppLayout";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayot />} />
			</Routes>
		</BrowserRouter>
	);
}

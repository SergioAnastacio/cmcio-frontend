import { Outlet } from "react-router-dom";

import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

export default function AppLayout() {
	return (
		<>
			<Header />
			<div className="w-screen h-screen  bg-athensgray-default">
				<div className="h-full flex-col items-center mx-3">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
}

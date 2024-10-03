import { Search, Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
export default function Header() {
	const [postalCode, setPostalCode] = useState("");
	return (
		<>
			<div className="bg-black">
				<div className="w-screen h-14 flex align-middle">
					<p className="align-middle lg:text-l text-white text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
						assumenda veniam. Aperiam
					</p>
					<button
						type="button"
						className="text-woodsmoke-default  h-rounded-lg p-2 m-2   bg-rochi-400"
					>
						cerrar
					</button>
				</div>
			</div>

			<header className="bg-white shadow-md">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex-shrink-0">
							<img src="/logo.svg" alt="Logo" width={120} height={40} />
						</div>

						{/* Search Bar */}
						<div className="hidden sm:block flex-grow max-w-md mx-4">
							<div className="relative">
								<input
									type="text"
									placeholder="Buscar productos..."
									className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Search className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						</div>

						{/* Menu Button */}
						<div className="flex items-center">
							<button
								type="button"
								className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
							>
								<span className="sr-only">Abrir menu</span>
								<Menu className="h-6 w-6" />
							</button>

							{/* Cart Button */}
							<button
								type="button"
								className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
							>
								<span className="sr-only">Ver carrito</span>
								<ShoppingCart className="h-6 w-6" />
							</button>
						</div>
					</div>

					{/* Mobile Search Bar */}
					<div className="sm:hidden px-4 pb-4">
						<div className="relative">
							<input
								type="text"
								placeholder="Buscar productos..."
								className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Search className="h-5 w-5 text-gray-400" />
							</div>
						</div>
					</div>
					{/* Postal Code Input */}
					<div className="hidden py-4">
						<div className="max-w-xs mx-auto">
							<label
								htmlFor="postal-code"
								className="block text-sm font-medium text-gray-700"
							>
								Código Postal
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="text"
									name="postal-code"
									id="postal-code"
									className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
									placeholder="Ingresa tu código postal"
									value={postalCode}
									onChange={(e) => setPostalCode(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

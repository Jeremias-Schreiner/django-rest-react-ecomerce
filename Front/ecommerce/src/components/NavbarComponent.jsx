import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscaste: ${search}`);
    };

    return (
        <nav className="bg-blue-950 text-white px-4 py-3">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold hover:cursor-pointer">Mercopolis </div>
                <button
                    className="lg:hidden block"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                <div className="hidden lg:flex">
                    <form onSubmit={handleSearch} className="flex items-center md:mx-4">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-96 px-4 py-1 rounded-l-md text-black focus:outline-none bg-blue-100"
                        />
                        <button
                            type="submit"
                            className="px-1 py-1 rounded-r-md hover:bg-blue-200 bg-blue-100"
                        >
                            🔍
                        </button>
                    </form>
                </div>

                <div className="hidden items-center gap-4 lg:flex">
                    <a href="#" className="hover:text-blue-400 font-bold">Home</a>
                    <a href="#" className="hover:text-blue-400 font-bold">Features</a>
                    <a href="#" className="hover:text-blue-400 font-bold">Pricing</a>
                    <a href="#" className="hover:text-blue-400 font-bold">About</a>

                </div>
            </div>

            {isOpen && (
                <div className="flex flex-col gap-3 mt-3 lg:hidden">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">Features</a>
                    <a href="#" className="hover:text-gray-400">Pricing</a>
                    <a href="#" className="hover:text-gray-400">About</a>

                    <form onSubmit={handleSearch} className="flex mt-2">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-2 py-1 rounded-l-md text-black focus:outline-none bg-blue-200"
                        />
                        <button
                            type="submit"
                            className="px-3 py-1 rounded-r-md bg-blue-100"
                        >
                            🔍
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
}

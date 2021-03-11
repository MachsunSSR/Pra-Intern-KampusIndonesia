import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMobile, setMobile] = useState(false);

    const toggleMobile = () => {
        setMobile(!isMobile);
    };

    return (
        <nav className="fixed w-screen shadow z-30 bg-white">
            <div className="lg:px-40 px-14 h-16 flex flex-row items-center justify-between">
                <div className="font-bold">KampusIndonesia</div>
                <div className="hidden md:grid grid-cols-4 gap-10 text-center text-base">
                    <Link
                        to="/"
                        className="hover:text-blue-300 transition duration-300 "
                    >
                        Beranda
                    </Link>
                    <Link
                        to="/layanan"
                        className="hover:text-blue-300 transition duration-300 "
                    >
                        Layanan
                    </Link>
                    <Link
                        to="/tentang"
                        className="hover:text-blue-300 transition duration-300 "
                    >
                        Tentang
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-300 transition duration-300 "
                    >
                        Hubungi Kami
                    </Link>
                </div>
                <button className="hidden md:block bg-blue-300 px-7 py-1 focus:outline-none rounded-full hover:bg-white hover:text-black transition duration-500 ring-4 ring-blue-300 ring-offset-0 font-semibold text-white">
                    Login
                </button>
                <div className="md:hidden">
                    <button
                        className="focus:outline-none"
                        onClick={toggleMobile}
                    >
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <Link
                    to="/"
                    className={`${
                        isMobile ? "block" : "hidden"
                    } md:hidden hover:text-blue-300 transition duration-300 py-2 px-14`}
                >
                    Beranda
                </Link>
                <Link
                    to="/layanan"
                    className={`${
                        isMobile ? "block" : "hidden"
                    } md:hidden hover:text-blue-300 transition duration-300 py-2 px-14`}
                >
                    Layanan
                </Link>
                <Link
                    to="/tentang"
                    className={`${
                        isMobile ? "block" : "hidden"
                    } md:hidden hover:text-blue-300 transition duration-300 py-2 px-14`}
                >
                    Tentang
                </Link>
                <Link
                    to="/contact"
                    className={`${
                        isMobile ? "block" : "hidden"
                    } md:hidden hover:text-blue-300 transition duration-300 py-2 px-14`}
                >
                    Hubungi Kami
                </Link>
            </div>
        </nav>
    );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMobile, setMobile] = useState(false);

    const toggleMobile = () => {
        setMobile(!isMobile);
    };

    return (
        <nav className="fixed w-screen z-30 bg-metrocolor-primblack ">
            <div className="lg:px-40 px-14 h-16 flex flex-row items-center justify-between text-metrocolor-secblue">
                <div className="font-bold">KampusIndonesia</div>
                <div className="hidden md:grid grid-cols-4 gap-10 text-center text-base">
                    <Link
                        to="/"
                        className="hover:text-metrocolor-primblue transition duration-300 "
                    >
                        Beranda
                    </Link>
                    <Link
                        to="/layanan"
                        className="hover:text-metrocolor-primblue transition duration-300 "
                    >
                        Layanan
                    </Link>
                    <Link
                        to="/tentang"
                        className="hover:text-metrocolor-primblue transition duration-300 "
                    >
                        Tentang
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-metrocolor-primblue transition duration-300 "
                    >
                        Hubungi Kami
                    </Link>
                </div>
                <button className="hidden md:block bg-metrocolor-primblue px-7 py-1 focus:outline-none rounded-full hover:bg-metrocolor-primblack transition duration-500 ring-4 ring-metrocolor-primblue ring-offset-0 font-semibold text-white">
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

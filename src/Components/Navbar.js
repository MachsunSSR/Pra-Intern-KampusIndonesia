import React, { useState } from "react";
import { Link } from "react-router-dom";
import FB from "../Assets/facebook.svg";
import GO from "../Assets/google.svg";

export default function Navbar() {
    const [isMobile, setMobile] = useState(false);
    const [showLogin, setLogin] = useState(false);

    const toggleMobile = () => {
        setMobile(!isMobile);
    };

    const isLogin = () => {
        setLogin(true);
    };

    const notLogin = () => {
        setLogin(false);
    };

    return (
        <div className=" z-30 fixed w-screen">
            <nav className=" z-29 bg-metrocolor-primblack">
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
                            to="/"
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
                    <button
                        onClick={isLogin}
                        className="hidden md:block bg-metrocolor-primblue px-7 py-1 focus:outline-none rounded-full hover:bg-metrocolor-primblack transition duration-500 ring-4 ring-metrocolor-primblue ring-offset-0 font-semibold text-white"
                    >
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
                <div
                    className={`${
                        isMobile ? "block" : "hidden"
                    } md:hidden hover:text-metrocolor-primblue text-white transition duration-300`}
                >
                    <Link
                        to="/"
                        className={`${
                            isMobile ? "block" : "hidden"
                        } md:hidden hover:text-metrocolor-primblue text-white divide-y-2 transition duration-300 py-2 px-14`}
                    >
                        Beranda
                    </Link>
                    <Link
                        to="/"
                        className={`${
                            isMobile ? "block" : "hidden"
                        } md:hidden hover:text-metrocolor-primblue text-white divide-y-2 transition duration-300 py-2 px-14`}
                    >
                        Layanan
                    </Link>
                    <Link
                        to="/tentang"
                        className={`${
                            isMobile ? "block" : "hidden"
                        } md:hidden hover:text-metrocolor-primblue text-white divide-y-2 transition duration-300 py-2 px-14`}
                    >
                        Tentang
                    </Link>
                    <Link
                        to="/contact"
                        className={`${
                            isMobile ? "block" : "hidden"
                        } md:hidden hover:text-metrocolor-primblue text-white divide-y-2 transition duration-300 py-2 px-14 pb-4`}
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </nav>
            {/* LOGIN FORM */}
            <div
                className={`pb-24 ${showLogin ? "block" : " hidden"} 
            transition duration-500 ease-in-out transform `}
            >
                <div className=" z-5 min-h-screen flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white p-8 rounded shadow-2xl md:w-90 flex flex-col items-center justify-center mb-16">
                        <button
                            className="-mt-7 ml-80 text-2xl"
                            onClick={notLogin}
                        >
                            x
                        </button>
                        <h1 className="mb-8">Sign In</h1>
                        <form className="flex flex-col flex-wrap items-center justify-center space-y-5 w-80">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border-2 border-gray-400 px-3 py-2 rounded w-full outline-none focus:border-metrocolor-primblue"
                            />

                            <div className="w-full">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="border-2 border-gray-400 px-3 py-2 rounded w-full outline-none focus:border-metrocolor-primblue"
                                />
                                <div className="pt-2 text-xs flex flex-row-reverse justify-between">
                                    <p>Lupa password?</p>
                                </div>
                            </div>

                            <button className=" px-3 py-2 rounded w-full bg-metrocolor-primblue text-white font-bold">
                                Sign In
                            </button>
                            <p className="text-sm">
                                Belum mempunyai akun? Sign Up.
                            </p>
                            <div className="w-full flex items-center">
                                <hr
                                    className="w-full  bg-gray-400"
                                    style={{ height: "3px" }}
                                />
                                <p className="text-sm px-5">Atau</p>
                                <hr
                                    className="w-full bg-gray-400"
                                    style={{ height: "3px" }}
                                />
                            </div>

                            <button className=" px-3 py-3 rounded w-full bg-blue-500 text-white text-sm flex items-center space-x-8">
                                <img src={GO} alt="" className="w-5" />
                                <p>Masuk menggunakan google</p>
                            </button>
                            <button className=" px-3 py-3 rounded w-full bg-blue-800 text-white text-sm flex items-center space-x-8">
                                <img src={FB} alt="" className="w-5" />
                                <p>Masuk menggunakan Facebook</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

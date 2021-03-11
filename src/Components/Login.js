import React from "react";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white p-8 rounded shadow-2xl md:w-90 flex flex-col items-center justify-center">
                <h1 className="mb-8">Sign In</h1>
                <form
                    action="post"
                    className="flex flex-col flex-wrap items-center justify-center space-y-5 w-80"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-2 border-gray-400 px-3 py-2 rounded w-full outline-none focus:border-blue-500"
                    />

                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Password"
                            className="border-2 border-gray-400 px-3 py-2 rounded w-full outline-none focus:border-blue-500"
                        />
                        <div className="pt-2 text-xs flex flex-row-reverse justify-between">
                            <p>Lupa password?</p>
                        </div>
                    </div>

                    <button className=" px-3 py-2 rounded w-full bg-blue-300 text-white font-bold">
                        Sign In
                    </button>
                    <p className="text-sm">Belum mempunyai akun? Sign Up.</p>
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

                    <button className=" px-3 py-3 rounded w-full bg-blue-300 text-white text-sm">
                        Masuk menggunakan google
                    </button>
                    <button className=" px-3 py-3 rounded w-full bg-blue-300 text-white text-sm">
                        Masuk menggunakan Facebook
                    </button>
                </form>
            </div>
        </div>
    );
}

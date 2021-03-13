import React from "react";
import { FiClock } from "react-icons/fi";
import Button from "./Button";

export default function BeasiswaCard({ judul, gambar }) {
    return (
        <button
            className="flex items-center justify-center shadow-md h-42 sl:50  sl:h-64 lg:h-96
        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
            <div className="flex flex-col space-y-2 ">
                <div className="">
                    <img
                        src={gambar}
                        alt="gambar"
                        className="rounded w-full object-contain"
                    />
                </div>
                <div className="flex flex-col justify-start px-4 space-y-2">
                    <h3 className="font-bold text-xl text-left">{judul}</h3>
                    <div className="flex items-center space-x-2">
                        <div>
                            <FiClock />
                        </div>
                        <p className="text-sm">
                            2 Februari 2021 - 4 Maret 2021
                        </p>
                    </div>
                    <Button bg="bg-white" text="text-black">
                        Detail
                    </Button>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </button>
    );
}

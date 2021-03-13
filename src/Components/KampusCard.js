import React from "react";
import Button from "./Button";
import Medal from "../Assets/medal.svg";

export default function KampusCard({ univ, gambar, gedung }) {
    return (
        <div className="shadow-md flex flex-col w-64 h-80 bg-white rounded-md">
            <div className="">
                <img src={gedung} alt="" className="rounded-md" />
            </div>
            <div className="flex items-center justify-between -mt-8 px-2 mb-4">
                <div>
                    <img src={gambar} alt="" />
                </div>
                <p className="bg-metrocolor-secblack p-2 rounded-lg self-end text-white text-sm">
                    Akreditas : A
                </p>
            </div>
            <div className="px-4 mb-4">
                <p>{univ}</p>
                <div className="flex w-6 space-x-2">
                    <img src={Medal} alt="" />
                    <p>Negeri</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Button wid="w-56">Lihat Detail</Button>
            </div>
        </div>
    );
}

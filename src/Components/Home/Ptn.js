import React from "react";
import Button from "../Button";
import SBawah from "../../Assets/bawah.svg";

export default function Ptn() {
    return (
        <div className="bg-metrocolor-secblue py-24">
            <div className="grid grid-cols-2 px-40">
                <div className="flex flex-col justify-center space-y-12 pr-24">
                    <h2>Informasi Lengkap Kuota PTN Favorit</h2>
                    <p className="text-base">
                        Lihat informasi terkait kuota jalur SNPMTN, SBMPTN,
                        Mandiri pada tiap tiap Kampus di Indonesia. Ada juga
                        informasi informasi lain yang tersedia
                    </p>
                    <div>
                        <Button bg="bg-metrocolor-secblue" text="text-black">
                            Selengkapnya
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={SBawah} alt="" />
                </div>
            </div>
        </div>
    );
}

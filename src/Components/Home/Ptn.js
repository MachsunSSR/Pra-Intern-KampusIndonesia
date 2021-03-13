import React from "react";
import Button from "../Button";
import SBawah from "../../Assets/bawah.svg";

export default function Ptn() {
    return (
        <div className="bg-metrocolor-secblue py-12 md:py-24">
            <div className="grid md:grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-40">
                <div className="flex flex-col justify-center space-y-12 md:pr-24 text-center md:text-left">
                    <h4>Informasi Lengkap Kuota PTN Favorit</h4>
                    <div className="md:hidden items-center sm:ml-20">
                        <img
                            src={SBawah}
                            alt=""
                            className="justify-self-center"
                        />
                    </div>
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
                <div className="hidden md:flex flex-col justify-center items-center">
                    <img src={SBawah} alt="" />
                </div>
            </div>
        </div>
    );
}

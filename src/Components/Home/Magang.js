import React from "react";
import SMagang from "../../Assets/magang.svg";
import Button from "../Button";

export default function Magang() {
    return (
        <div className="py-24 md:py-36 px-8 md:px-16 lg:px-24 xl:px-40 bg-metrocolor-secblue">
            <div className=" grid md:grid-cols-2 text-center md:text-left">
                <div className="hidden md:flex flex-col justify-center items-center  ">
                    <img src={SMagang} alt="" />
                </div>
                <div className="flex flex-col space-y-12 justify-center md:pl-24 lg:px-24">
                    <h4>Informasi Magang & Lowongan Pekerjaan</h4>
                    <div className=" md:hidden flex flex-col justify-center items-center ">
                        <img src={SMagang} alt="" />
                    </div>
                    <p>
                        Cari Pekerjaan favorit yang sesuai dengan passion anda
                    </p>
                    <div>
                        <Button bg="bg-metrocolor-secblue" text="text-black">
                            Cari Lowongan
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

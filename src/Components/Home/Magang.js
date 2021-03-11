import React from "react";
import SMagang from "../../Assets/magang.svg";
import Button from "../Button";

export default function Magang() {
    return (
        <div className="py-36 px-8 md:px-16 lg:px-24 xl:px-40 bg-metrocolor-secblue">
            <div className=" grid grid-cols-2 ">
                <div>
                    <img src={SMagang} alt="" />
                </div>
                <div className="flex flex-col space-y-12 justify-center px-24">
                    <h2>Informasi Magang & Lowongan Pekerjaan</h2>
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

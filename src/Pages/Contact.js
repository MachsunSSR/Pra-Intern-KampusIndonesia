import React from "react";
import Button from "../Components/Button";
import SContact from "../Assets/contact.svg";

export default function Contact() {
    return (
        <div className="grid grid-cols-2 justify-center items-center bg-metrocolor-secblue">
            <div className="flex flex-col justify-center space-y-8  pl-40 py-40">
                <h2>Hubungi Kami</h2>
                <p>
                    Komunikasi adalah pendekatan terbaik. Ingin mendapatkan
                    informasi magang di Kampus Indonesia atau melamar di PT.
                    Inspirasi Mandiri Nusantara? silahkan hubungi kami dengan
                    cara tekan tombol dibawah ini
                </p>
                <div className="md:w-64">
                    <a href="https://linktr.ee/kampusindonesia" target="_blank">
                        <Button bg="bg-white" text="text-black">
                            Hubungi Kami
                        </Button>
                    </a>
                </div>
            </div>
            <div className="mt-40">
                <img src={SContact} alt="" />
            </div>
        </div>
    );
}

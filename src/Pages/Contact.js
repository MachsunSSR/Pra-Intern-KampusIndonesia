import React from "react";
import Button from "../Components/Button";
import SContact from "../Assets/contact.svg";

export default function Contact() {
    return (
        <div className="grid md:grid-cols-2 justify-center items-center bg-metrocolor-secblue">
            <div className="flex flex-col justify-center space-y-8 px-8 md:pl-40 py-24 md:py-40">
                <h4 className="text-center md:text-left">Hubungi Kami</h4>
                <div className="md:hidden">
                    <img src={SContact} alt="" />
                </div>
                <p>
                    Komunikasi adalah pendekatan terbaik. Ingin mendapatkan
                    informasi magang di Kampus Indonesia atau melamar di PT.
                    Inspirasi Mandiri Nusantara? silahkan hubungi kami dengan
                    cara tekan tombol dibawah ini
                </p>
                <div className="md:w-64 text-center md:text-left">
                    <a href="https://linktr.ee/kampusindonesia" target="_blank">
                        <Button bg="bg-white" text="text-black" wid="px-12">
                            Hubungi Kami
                        </Button>
                    </a>
                </div>
            </div>
            <div className="hidden md:block xl:mt-40">
                <img src={SContact} alt="" />
            </div>
        </div>
    );
}

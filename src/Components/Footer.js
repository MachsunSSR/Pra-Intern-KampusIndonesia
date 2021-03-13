import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import ugm from "../Assets/ugm.png";
import itb from "../Assets/itb.png";
import ipb from "../Assets/ipb.png";
import telu from "../Assets/telu.png";

export default function Footer() {
    return (
        <div className="grid lg:grid-cols-3 py-24 bg-metrocolor-primblack px-24 text-white">
            <div className="pr-14">
                <div>
                    <h1>KampusIndonesia</h1>
                </div>
                <div className="mt-4">
                    <p className="text-sm">
                        Kampus Indonesia adalah suatu platform yang menampung
                        informasi informasi PTN favorit, beasiswa bagi seluruh
                        kalangan, lowongan pekerjaan, hingga seminar yang bisa
                        membantu anda mearih masa depan yang cerah.
                    </p>
                </div>
                <div className="text-sm mt-4">
                    <div className="flex flex-row mt-2 items-center">
                        <div>
                            <HiOutlineMail size="1.5em" />
                        </div>
                        <div className="ml-4">info@kampusindonesia.id</div>
                    </div>
                    <div className="flex flex-row mt-3 items-center">
                        <div>
                            <FiPhone size="1.5em" />
                        </div>
                        <div className="ml-4">021 3452 2885</div>
                    </div>
                    <div className="flex flex-row mt-3 items-center">
                        <div>
                            <ImLocation size="1.5em" />
                        </div>
                        <div className="ml-4">
                            PT. Inspirasi Mandiri Nusantara, Kec. Lowokwaru
                            Malang, Jawa Timur
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:justify-self-center">
                <div className="mt-4 lg:mt-0">
                    <h1>Layanan</h1>
                </div>
                <ul className="text-sm mt-4 list-disc ml-4">
                    <li>Beasiswa</li>
                    <li className="mt-2">Lowongan Pekerjaan</li>
                    <li className="mt-2">Workshop & Seminar</li>
                    <li className="mt-2">Info Kampus Terkini</li>
                    <li className="mt-2">Tips & Trick PTN Favorit</li>
                    <li className="mt-2">Lomba</li>
                </ul>
            </div>
            <div className="lg:mt-0 mt-4 lg:justify-self-center">
                <div>
                    <h1>Partnership</h1>
                </div>
                <div className="flex flex-row text-sm mt-4 space-x-4">
                    <img src={ugm} alt="ugm" className="w-10 h-10"></img>
                    <img src={itb} alt="ugm" className="w-10 h-10"></img>
                    <img src={ipb} alt="ugm" className="w-10 h-10"></img>
                    <img src={telu} alt="ugm" className="w-10 h-10"></img>
                </div>
                <div className="text-sm mt-4">
                    <h1>Social Media</h1>
                    <div className="flex flex-row mt-4">
                        <div>
                            <RiInstagramFill size="1.5em" />
                        </div>
                        <div className="ml-3">@kampusindonesia</div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <div>
                            <FaTwitterSquare size="1.5em" />
                        </div>
                        <div className="ml-3">@kampus_indonesia</div>
                    </div>
                    <div className="flex flex-row mt-4">
                        <div>
                            <FaFacebookSquare size="1.5em" />
                        </div>
                        <div className="ml-3">@kampusindonesia.id</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

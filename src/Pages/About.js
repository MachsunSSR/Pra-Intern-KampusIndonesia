import React from "react";
import Button from "../Components/Button";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import about from "../Assets/about.svg";

export default function About() {
    return (
        <div className="bg-metrocolor-secblue">
            <div className="grid  md:grid-cols-2 justify-center items-center px-8 md:px-16 lg:px-24 xl:px-40 py-28  md:py-36 md:gap-32">
                <img src={about} alt="" className="md:block hidden" />
                <div className="flex md:text-left text-justify flex-col items-center md:items-start justify-center space-y-8 md:space-y-16">
                    <h4>Kampus Indonesia</h4>
                    <img src={about} alt="" className="md:hidden" />
                    <p>
                        Kampus Indonesia adalah platform pendidikan yang
                        menampung informasi informasi PTN favorit, beasiswa bagi
                        seluruh kalangan, lowongan pekerjaan, hingga seminar
                        yang bisa membantu anda mearih masa depan yang cerah
                    </p>
                    <a
                        href="https://www.instagram.com/kampusindonesia/"
                        target="_blank"
                        className="md:w-64"
                    >
                        <Button
                            bg="bg-white"
                            text="text-black"
                            className="w-auto"
                        >
                            Kunjungi Kami
                        </Button>
                    </a>
                </div>
            </div>
            <div className="grid gap-y-8 md:grid-cols-3 justify-items-center px-8 md:px-16 lg:px-24 xl:px-40 pt-18 pb-36">
                <div className="flex flex-col md:justify-self-start ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.28548095132!2d112.5617422295964!3d-7.978639465268434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789f376237c02f%3A0x55d227f46d92cb02!2sPT%20Inspirasi%20Mandiri%20Nusantara!5e0!3m2!1sid!2sid!4v1615628359172!5m2!1sid!2sid"
                        loading="lazy"
                        className="rounded border-4 border-metrocolor-secblack object-contain w-auto h-80 shadow-lg"
                    ></iframe>
                </div>

                <div className="flex flex-col space-y-7 md:px-0 px-24">
                    <h1>Contact :</h1>
                    <div className="flex items-center space-x-4">
                        <HiOutlineMail size="1.5em" />

                        <p>info@kampusindonesia.id</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FiPhone size="1.5em" />

                        <p>021 3452 2885</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ImLocation size="2.5em" />

                        <p>
                            PT. Inspirasi Mandiri Nusantara, Kec. Lowokwaru
                            Malang, Jawa Timur
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-7">
                    <h1>Social Media :</h1>
                    <div className="flex items-center space-x-4">
                        <RiInstagramFill size="2em" />
                        <p>@kampusindonesia</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaTwitterSquare size="2em" />
                        <p>@kampus_indonesia</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaFacebookSquare size="2em" />
                        <p>@kampusindonesia.id</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

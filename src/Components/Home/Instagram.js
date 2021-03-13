import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import satu from "../../Assets/1.jpg";
import dua from "../../Assets/2.jpg";
import tiga from "../../Assets/3.jpg";
import empat from "../../Assets/4.jpg";
import lima from "../../Assets/5.jpg";
import enam from "../../Assets/6.jpg";
import tuju from "../../Assets/7.jpg";
import delapan from "../../Assets/8.jpg";
import sembilan from "../../Assets/9.jpg";

export default function Instagram() {
    return (
        <div className="py-4 bg-metrocolor-secblack">
            <div className="flex flex-col items-center text-metrocolor-secblue bg-metrocolor-primblack py-16 space-y-10 px-8 md:px-16 lg:px-24 xl:px-40">
                <h2>Kabar Kami</h2>
                <div className="flex space-x-8 text-xs md:text-base items-center">
                    <a
                        href="http://instagram.com/kampusindonesia"
                        target="_blank"
                        className="font-bold"
                    >
                        @kampusindonesia
                    </a>
                    <p>Followers : 368k</p>
                    <p>Following : 61</p>
                    <p>Total Post : 7899</p>
                </div>
                <div className="grid grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-10 lg:gap-14">
                    <img
                        src={satu}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={dua}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={tiga}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={empat}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={lima}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={enam}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={tuju}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={delapan}
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                    <img
                        src={sembilan}
                        className="2xl:hidden w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded bg-metrocolor-secblack border-2 border-metrocolor-secblack
                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    ></img>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="http://instagram.com/kampusindonesia"
                        target="_blank"
                    >
                        <RiInstagramFill size="30" />
                    </a>
                    <a
                        href="http://instagram.com/kampusindonesia"
                        target="_blank"
                    >
                        Ikuti kami agar tidak ketinggalan info terbaru >>
                    </a>
                </div>
            </div>
        </div>
    );
}

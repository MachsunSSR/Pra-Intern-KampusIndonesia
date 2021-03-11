import React, { useState } from "react";
import BeasiswaCard from "../BeasiswaCard";
import Brillian from "../../Assets/brillian.jpg";
import Lpdp from "../../Assets/lpdp.jpg";
import Unggulan from "../../Assets/unggulan.jpg";
import Sejutacita from "../../Assets/sejutacita.jpg";
import Ruangkreasi from "../../Assets/ruangkreasi.jpg";
import Djarum from "../../Assets/djarum.png";

export default function Beasiswa() {
    const [toggle, setToggle] = useState(false);

    const click = () => {
        setToggle(!toggle);
    };

    return (
        <div className="px-40 justify-center py-24">
            <div className=" flex flex-col space-y-4">
                <h2>Informasi Beasiswa & Seminar</h2>
                <p>Tingkatkan kemampuan dan wujudkan mimpimu</p>
                <div className="flex flex-row-reverse gap-x-8 font-bold">
                    <button
                        className={`${
                            toggle ? "text-metrocolor-primblue" : ""
                        } focus:outline-none font-semibold animate duration-300 hover:text-metrocolor-primblue`}
                        onClick={click}
                    >
                        Seminar
                    </button>
                    <button
                        className={`${
                            toggle ? "" : "text-metrocolor-primblue"
                        } focus:outline-none font-semibold animate duration-300 hover:text-metrocolor-primblue`}
                        onClick={click}
                    >
                        Beasiswa
                    </button>
                </div>
            </div>
            <hr className="mt-2 border-2 rounded-full bg-gray-200" />
            <div className="grid grid-cols-3 grid-rows-2 gap-10 pt-10">
                <BeasiswaCard judul="Beasiswa Brillian" gambar={Brillian} />
                <BeasiswaCard judul="Beasiswa LPDP" gambar={Lpdp} />
                <BeasiswaCard judul="Beasiswa Djarum" gambar={Djarum} />
                <BeasiswaCard judul="Beasiswa Sejutacita" gambar={Sejutacita} />
                <BeasiswaCard
                    judul="Beasiswa Ruangkreasi"
                    gambar={Ruangkreasi}
                />
                <BeasiswaCard judul="Beasiswa Unggulan" gambar={Unggulan} />
            </div>
        </div>
    );
}

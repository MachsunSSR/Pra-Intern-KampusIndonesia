import React from "react";
import Button from "../Button";
import KampusCard from "../KampusCard";
import ugm from "../../Assets/ugmmini.svg";
import ub from "../../Assets/miniub.svg";
import ui from "../../Assets/miniui.svg";
import gedungugm from "../../Assets/gedungugm.jpg";
import gedungui from "../../Assets/gedungui.jpg";
import gedungub from "../../Assets/gedungub.jpg";

export default function Kampus() {
    return (
        <div className="grid md:grid-cols-3 py-24 md:py-36 px-8 md:px-16 lg:px-24 xl:px-40 bg-metrocolor-secblue ">
            <div className="flex flex-col space-y-8 bg-metrocolor-secblack py-8 px-8 w-80 rounded-lg text-metrocolor-secblue justify-self-center ml-16 md:ml-0 ">
                <h1 className="md:block hidden">
                    Website Untuk mencari Informasi Seputar Kuliah
                </h1>
                <h2 className="md:hidden">
                    Website Untuk mencari Informasi Seputar Kuliah
                </h2>
                <p>
                    Dapatkan informasi seputar dunia perkuliahan secara
                    terupdate dari kami melalui aplikasi kampus Indonesia
                </p>
                <Button bg="bg-metrocolor-primblue" text="text-white">
                    Cari Kampus Lainnya
                </Button>
            </div>
            <div className="col-span-2 gap-4 mt-8 space-y-8  md:space-y-2">
                <div className="text-center md:flex justify-between items-center ">
                    <h1>Rekomendasi kampus terbaik</h1>
                    <a className="hidden md:block">Lihat kampus lain></a>
                </div>
                <div className="grid items-center justify-center md:grid-cols-3 gap-4">
                    <KampusCard
                        univ="Universitas Gadjah Mada"
                        gambar={ugm}
                        gedung={gedungugm}
                    />
                    <KampusCard
                        univ="Universitas Brawijaya"
                        gambar={ub}
                        gedung={gedungub}
                    />
                    <KampusCard
                        univ="Universitas Indonesia"
                        gambar={ui}
                        gedung={gedungui}
                    />
                    <div className="text-center mt-10 md:hidden">
                        <a className=" ">Lihat kampus lain></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

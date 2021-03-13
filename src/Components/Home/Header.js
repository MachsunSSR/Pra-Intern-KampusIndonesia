import React from "react";
import Vector1 from "../../Assets/homeatas.svg";
import Button from "../Button";
import bgatas from "../../Assets/bgatas.svg";

export default function Header() {
    const bgStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: "url(" + { bgatas } + ")",
    };
    return (
        <div className="py-24 md:py-36 bg-metrocolor-primblack bg-local">
            <div className="grid md:grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-40  ">
                <div className="flex flex-col justify-center text-metrocolor-secblue space-y-10 text-center md:text-left text-center md:text-left">
                    <h4>
                        Bersama Kampus Indonesia,{" "}
                        <br className="hidden md:block" /> Meraih Masa Depan
                        Cemerlang
                    </h4>
                    <div className=" md:hidden flex flex-col justify-center items-center ">
                        <img src={Vector1} alt="" />
                    </div>
                    <p className="text-base">
                        Kampus Indonesia adalah platform pendidikan yang
                        menyediakan informasi terkait PTN favorit, Beasiswa, dan
                        lain sebagainya Ingin tahu lebih banyak?
                    </p>
                    <div>
                        <Button bg="bg-metrocolor-primblack">
                            Selengkapnya
                        </Button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col justify-center items-center ">
                    <img src={Vector1} alt="" />
                </div>
            </div>
        </div>
    );
}

import React from "react";
import Vector1 from "../../Assets/homeatas.svg";
import Button from "../Button";

export default function Header() {
    return (
        <div className="py-36 bg-metrocolor-primblack">
            <div className="grid grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-40  ">
                <div className="flex flex-col justify-center text-metrocolor-secblue space-y-10">
                    <h2>
                        Bersama Kampus Indonesia, <br /> Meraih Masa Depan
                        Cemerlang
                    </h2>
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
                <div className="flex flex-col justify-center items-center ">
                    <img src={Vector1} alt="" />
                </div>
            </div>
        </div>
    );
}

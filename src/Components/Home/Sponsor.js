import React from "react";
import ugm from "../../Assets/ugm.png";
import itb from "../../Assets/itb.png";
import ipb from "../../Assets/ipb.png";
import telu from "../../Assets/telu.png";

export default function Sponsor() {
    return (
        <div>
            <div className="grid grid-cols-2 justify-center items-center mr-4 md:mr-0 py-12 md:py-24 px-8 md:px-16 lg:px-24 xl:px-40">
                <h2>Bekerja Sama Dengan :</h2>

                <div className="flex justify-center items-center space-x-2 md:space-x-10">
                    <img
                        src={ugm}
                        alt="ugm"
                        className="w-16 h-16 lg:w-32 lg:h-32"
                    ></img>
                    <img
                        src={itb}
                        alt="ugm"
                        className="w-16 h-16 lg:w-32 lg:h-32"
                    ></img>
                    <img
                        src={ipb}
                        alt="ugm"
                        className="w-16 h-16 lg:w-32 lg:h-32"
                    ></img>
                    <img
                        src={telu}
                        alt="ugm"
                        className="w-16 h-16 lg:w-32 lg:h-32 "
                    ></img>
                </div>
            </div>
        </div>
    );
}

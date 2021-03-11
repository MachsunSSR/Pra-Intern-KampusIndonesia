import React, { useState, useEffect } from "react";
import { RiInstagramFill } from "react-icons/ri";

export default function Instagram() {
    return (
        <div className="py-4 bg-metrocolor-secblack">
            <div className="flex flex-col items-center text-metrocolor-secblue bg-metrocolor-primblack py-16 space-y-8 ">
                <h2>Kabar Kami</h2>
                <div className="flex space-x-8">
                    <a
                        href="http://instagram.com/kampusindonesia"
                        target="_blank"
                    >
                        @kampusindonesia
                    </a>
                    <p>Followers : </p>
                    <p>Following : </p>
                    <p>Total Post : </p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="w-64 h-64 bg-metrocolor-secblack border-3 border-metrocolor-secblue"></div>
                    <div className="w-64 h-64 bg-metrocolor-secblack border-3 border-metrocolor-secblue"></div>
                    <div className="w-64 h-64 bg-metrocolor-secblack border-3 border-metrocolor-secblue"></div>
                    <div className="w-64 h-64 bg-metrocolor-secblack border-3 border-metrocolor-secblue"></div>
                    <div className="w-64 h-64 bg-metrocolor-secblack border-3 border-metrocolor-secblue"></div>
                    <div className="w-64 h-64 bg-metrocolor-secblack border-3 border-metrocolor-secblue"></div>
                </div>
                <div className="flex items-center space-x-4">
                    <RiInstagramFill size="40" />
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

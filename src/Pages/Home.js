import React from "react";
import Header from "../Components/Home/Header";
import Magang from "../Components/Home/Magang";
import Beasiswa from "../Components/Home/Beasiswa";
import Instagram from "../Components/Home/Instagram";
import Ptn from "../Components/Home/Ptn";
import Sponsor from "../Components/Home/Sponsor";

export default function Home() {
    return (
        <div>
            <Header />
            <Magang />
            <Beasiswa />
            <Instagram />
            <Ptn />
            <Sponsor />
        </div>
    );
}

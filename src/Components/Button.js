import React from "react";

export default function Button({ children, bg, text }) {
    return (
        <button
            className={`px-5 py-2 font-semibold bg-metrocolor-primblue
            text-white focus:outline-none rounded-md text-sm border-metrocolor-primblue
            hover:${bg} hover:${text} hover:font-semibold animate duration-300  `}
            style={{ border: "3px solid #24CAE5" }}
        >
            {children}
        </button>
    );
}

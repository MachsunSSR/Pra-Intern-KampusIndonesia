import React from "react";

export default function Grid() {
    return (
        <div
            className="bg-blue-800 min-h-screen flex 
                        items-center justify-center"
        >
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 grid-rows-4 gap-4">
                <div className="lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-3 bg-white p-5 rounded">
                    1
                </div>
                <div className="lg:col-start-3 lg:row-start-1 lg:col-span-3 lg:row-span-3 bg-red-300 p-5 rounded">
                    2
                </div>
                <div className="lg:col-start-6 lg:row-start-1 lg:col-span-2 lg:row-span-3 bg-white p-5 rounded">
                    3
                </div>
                <div className="bg-white p-11 rounded">4</div>
                <div className="bg-white p-11 rounded">4</div>
                <div className="bg-white p-11 rounded">4</div>
                <div className="bg-white p-11 rounded">4</div>
                <div className="bg-white p-11 rounded">4</div>
                <div className="bg-white p-11 rounded">4</div>
                <div className="bg-white p-11 rounded">4</div>
            </div>
        </div>
    );
}

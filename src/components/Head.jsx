import React from 'react';

function Head() {
    let date = new Date().toDateString();
    return (
        <div className="head-container bg-gray-100 py-5 mx-30 md:mx-40">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Best Website builders in the US</h1>
            <hr className="w-full border-t border-gray-400 p-2"/>
            <div className="head-menu flex items-center gap-4 p-3 pb-4">
                <img src="../public/images/check-mark.png" alt="" className="w-5 h-5" />
                <h3 className="text-base md:text-lg">Last Updated - {date}</h3>
                <img src="../public/images/info.png" alt="" className="w-5 h-5" />
                <h3 className="text-base md:text-lg">Advertising Disclosure</h3>
                <div className="right-head flex items-center ml-auto">
                    <h3 className="text-base md:text-lg">Top Relevant</h3>
                    <img src="../public/images/down-arrow.png" alt="" className="w-5 h-5" />
                </div>
            </div>
            <hr className="w-full border-t border-gray-400 "/>
        </div>
    );
}

export default Head;

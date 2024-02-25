import React from 'react';

function Card() {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg md:max-w-xl lg:max-w-2xl">
        <img
          src="../public/images/187db358671328189d3da83955a6ffe9.png"
          alt="yes"
          className="w-full h-35  object-center"
        />

        <div className="p-4">
          <div className="flex gap-4">
            <div className="bg-gray-200 w-20 h-8 rounded-lg flex items-center justify-center">
              <h4 className="text-gray-700 text-sm">20% off</h4>
            </div>
            <div className="bg-gray-200 w-32 h-8 rounded-lg flex items-center justify-center">
              <h4 className="text-gray-700 text-sm">Limited Time</h4>
            </div>
          </div>

          <h2 className="font-bold text-center text-lg text-gray-800 mt-2">Webbuilder 1</h2>

          <h3 className="font-normal text-sm text-gray-700 mt-1">
            Computer Modern classic with Wix support
          </h3>

          <div className="flex items-center mt-2">
            <h4 className="text-gray-700 mr-1 text-base">$39.96</h4>
            <h4 className="text-gray-500 mr-1 text-xs">$39.96</h4>
            <h4 className="text-red-700 text-xs">(20% Off)</h4>
          </div>

          <button className="w-full mt-4 bg-blue-500 text-white rounded-lg px-4 py-2">
            View Deal
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

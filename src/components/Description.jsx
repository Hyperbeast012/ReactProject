import React from "react";

function Description(props) {
  return (
    <div className="Description-container flex flex-col items-center md:items-stretch md:flex-row md:justify-between gap-8 md:gap-0 md:px-11 my-8 mx-32">
      <h1 className="text-lg md:text-xl font-medium">{props.no}</h1>
      <div className="Description-img flex flex-col items-center md:items-start py-11 px-9">
        <img
          src="../public/images/187db358671328189d3da83955a6ffe9.png"
          alt=""
          className="w-80 h-32"
        />
        <h3 className="text-base px-9 py-2">{props.builder}</h3>
      </div>
      <div className="Description flex flex-col items-center md:items-start px-4 md:px-0 py-4 md:py-0">
        <h4 className="text-base font-normal">
          <b>{props.boldText}</b> {props.Text}
        </h4>
        <h3 className="text-lg font-semibold mt-4">Main highlights</h3>
        <h5 className="text-base mt-2">{props.desc}</h5>
        <div className="show flex items-center mt-2 cursor-pointer py-11">
          <h3 className="text-base text-blue-500">Show more</h3>
          <img
            src="../public/images/down-arrow.png"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
        </div>
      </div>
      <div className="rating-box flex flex-col items-center">
        <div className="rating w-36 h-40 bg-blue-100 rounded-b-lg flex flex-col items-center justify-center">
          <h1 className="text-lg font-semibold">{props.rate}</h1>
          <h3 className="text-base mt-1">{props.rates}</h3>
          <img
            src={props.rateImage}
            alt="image"
            width={60}
            height={60}
            className="mt-2"
          />
        </div>
        <button className="view w-48 h-12 bg-blue-500 text-white font-semibold rounded-lg mt-4 md:mt-16 ">
          View
        </button>
      </div>
    </div>
  );
}

export default Description;

import React from 'react';

function Me() {
  return (
    <>       
      <div className="Description-container flex flex-col items-center md:flex-row md:justify-between gap-8 md:gap-0 md:px-11 my-8 mx-32 -mt-[10rem]">
        <h1 className="text-lg md:text-xl font-medium">4</h1>
        <div className="Description-img">
          <img src="../public/images/187db358671328189d3da83955a6ffe9.png" alt="" className="w-70 h-32 my-11 mx-9 mt-[20rem]"  />
          <h3 className="text-base px-24">CDK</h3>
        </div>
        <div className="Description">
          <h4>
            <b>CDK Responsive Builder:</b> An extensive library of widgets and apps, and detailed step-by-step guides
          </h4>
          <div className="off gap-1 flex bg-blue-300 w-16 decoration-blue-500 my-1">
            <h4 >26% </h4>
            <h5 className="mr-40">off</h5>
          </div>
          <h3 className="text-lg font-semibold mt-4">Main highlights</h3>
        </div>
        <div className="rating-box flex flex-col items-center translate-y-40 ">
          <div className="rating w-36 h-40 bg-blue-100 rounded-b-lg flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">9.1</h1>
            <h3 className="text-base mt-1">Very Good</h3>
            <img
              src="../public/images/star.png"
              alt="image"
              width={60}
              height={60}
              className="mt-2"
            />
          </div>
          <button className="view w-48 h-12 bg-blue-500 text-white font-semibold rounded-lg mt-4 md:mt-[13rem]">
            View
          </button>
        </div>
      </div>
      <div className="blockContainer mb-4 mx-auto md:ml-[28rem] md:mr-0 md:-mt-[10rem] p-8 bg-red-200 md:w-[500px] rounded-lg">
  <div className="block1 flex gap-4 my-1">
    <h2 className='text1 bg-white rounded-lg'>9.9</h2>
    <h3>Building Responsive</h3>
  </div>
  <div className="block1 flex gap-3 my-1">
    <h2 className='text1 bg-white rounded-lg'>8.9</h2>
    <h3>Cool</h3>
  </div>
  <div className="block1 flex gap-3 my-1">
    <h2 className='text1 bg-white rounded-lg'>8.9</h2>
    <h3>Docs</h3>
  </div>
</div>
<div className="blockDesc mt-8 mb-16 mx-auto px-4 md:ml-[24rem] md:p-9">
  <h2 className="text-xl font-semibold">Why we love it</h2>
  <div className="DescBlock flex flex-wrap gap-3 p-1">
    <img src="../public/images/checked.png" alt="" width={20} height={15} />
    <h2>Documentation</h2>
  </div>
  <div className="DescBlock flex flex-wrap gap-3 p-1">
    <img src="../public/images/checked.png" alt="" width={20} height={15} />
    <h2>Easy Use</h2>
  </div>
  <div className="DescBlock flex flex-wrap gap-3 p-1">
    <img src="../public/images/checked.png" alt="" width={20} height={15} />
    <h2>Out of box</h2>
  </div>
</div>

<div className="show cursor-pointer mx-auto md:ml-[26rem] md:-mt-20 md:pb-8">
  <h3 className="text-base text-blue-500">Show more</h3>
</div>

    </>
  )
}

export default Me;

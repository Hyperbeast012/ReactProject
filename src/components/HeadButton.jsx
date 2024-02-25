import React from 'react';

function HeadButton(props) {
  return (
    <div className="head-button w-18  h-6 sm:w-28 sm:h-8 md:w-32 md:h-10 lg:w-36 lg:h-12 xl:w-40 xl:h-14 bg-gray-200 rounded-lg flex items-center justify-center ">
      {props.btn}
    </div>
  );
}

export default HeadButton;

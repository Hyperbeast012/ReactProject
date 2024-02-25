import React from 'react';

function Choice(props) {
  return (
    <div className="flex items-center bg-orange-500 w-36 h-9 rounded-r-lg mx-40 mt-5 gap-2 justify-center">
     <img src={props.boxI} alt="Best Choice" className="w-5 h-5" />
      <h3 className="font-inter text-base font-normal">{props.boxH}</h3>
    </div>
  );
}

export default Choice;

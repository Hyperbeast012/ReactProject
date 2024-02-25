import React from 'react';

function Menu(props) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <h3 className="font-inter text-sm font-normal">{props.list}</h3>
      <img src="../public/images/right-arrow.png" alt="Right Arrow" className="w-4 h-3" />
    </div>
  );
}

export default Menu;
